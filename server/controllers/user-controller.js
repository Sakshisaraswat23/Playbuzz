import User from '../model/user.js';

// Get all users
export const getUsers = async (request, response) => {
	try {
		const users = await User.find().sort({ date: 1 }); // for giving data in sorted order.
		response.status(200).json(users);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

// Get a user by id
export const getUserById = async (request, response) => {
	try {
		const user = await User.findById(request.params.id);
		response.status(200).json(user);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

//add data
export const addUser = async (request, response) => {
    const user = request.body;
    console.log("inside")

    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
	try {
		const newUser = await User.findByIdAndUpdate(
			{ _id: request.params.id },
			{ $set: request.body },
			{ new: true },
		);
		request.app.io.emit('updated_badmintonScore', newUser);
		response.status(201).json(newUser);
	} catch (error) {
		response.status(409).json({ message: error.message });
	}
};

//count number of matches
export const matchCountContoller=async (req,res)=>{
	try {
		const total = await User.countDocuments();
		console.log(total)
		res.status(200).json(total);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}

};

//pagination --> showing list based on pages
export const matchListController = async (req,res) =>{
	try{
		const { checked, radio } = req.body;
		console.log(checked);
		console.log(radio);
	 	let args = {};
	  	if (checked?.length > 0) args.sports = checked;
	  	if (radio?.length) args.gender = radio;
		const perPage=3;
		const page=req.params.page ? req.params.page : 1;
		console.log(args)
		const users= await User
		.find(args)
		.skip((page-1) * perPage)
		.limit(perPage)
		// console.log(users)
		res.status(200).send(users);
	}
	catch( error){
		res.status(400).json({message: error.message});
	}

}

//filter
export const matchFiltersController = async (req, res) => {
	try {
	  const { checked, radio } = req.body;
	  let args = {};
	  if (checked.length > 0) args.sports = checked;
	  if (radio.length) args.gender = radio;
	  const matches = await User.find(args);
	  console.log(matches);
	  res.status(200).send(matches);
	} catch (error) {
	  console.log(error);
	  res.status(400).send({message: error.message });
	}
  };
// module.exports = { getUsers, getUserById, editUser,addUser };
