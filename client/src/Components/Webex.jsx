import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FormGroup, FormControl, InputLabel, Input, makeStyles, Typography } from '@material-ui/core';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

function Webex() {
    const classes = useStyles();
	const token= "ZTZhOWZkNTgtMmVjOC00NjdlLWI2YTUtM2NmOGJiYjc5ZTM5ODk2ZTNhZDAtNzJl_P0A1_f339566d-b6a8-4b98-a4bb-08dad1980264"
	const create_meet= async() =>
    {   
		// Create a new Date object
const currentDate = new Date();

// Get the current year, month, day, hours, minutes, and seconds
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

// Format the date and time in ISO 8601 format (YYYY-MM-DDTHH:mm:ss)
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

// console.log(formattedDateTime); // Output: e.g., "2023-07-17T09:30:00"

		// console.log(curr)
    //  let curr=`${startingDate}T${this.startTime}:00+05:30`;
    //  let after=`${startingDate}T${this.endTime}:00+05:30`;
    //  let payload = {
    //  title: "match" ,
    //  start: curr ,
    //  end:  curr ,
    //  }; 
    // await axios
    // .request({
    //   url: "https://webexapis.com/v1/meetings",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + token,
    //   },
    //   data: payload
    // })
    // .then((response) => {
    //   console.log(response.data.webLink);
    // //   Link=response.data.webLink;
    // });    
    }
		return (
			<>
			<FormGroup className={classes.container}>
            <Typography variant="h4">Create Meet</Typography> 
			{/* <FormControl>
                <InputLabel htmlFor="my-input">YYYY/MM/DD</InputLabel>
                <Input type='time' onChange={(e) => console.log(e.target.value)} name='date' required autoComplete="off" />
            </FormControl>            */}
            <FormControl>
                <Button  variant="contained" color="primary" onClick={() => create_meet()}>Meet</Button>
            </FormControl>

        </FormGroup>  
				
			</>
		);
	}
	

export default Webex;
