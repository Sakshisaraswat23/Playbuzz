import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import {Server} from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
//was getting error while using app.listen as http and app was not connected
// (https://stackoverflow.com/questions/70421655/get-socket-io-not-found-404) --> see this
connect().then(() => {
    try {
        server.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})



const io = new Server(server, {
	cors: {
		origin: '*',
	},
});

app.io = io;

io.on('connection', (socket) => {
	console.log('connected to socket');
});
