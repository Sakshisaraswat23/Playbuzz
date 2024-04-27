import mongoose from "mongoose";
import ENV from '../config.js'

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    //connect request to db
    const conn = await mongoose.connect(ENV.ATLAS_URI);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
}

export default connect;