import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { matchfilter, matchList, getcount } from "../Service/api";
import { makeStyles } from "@material-ui/core";
import { Checkbox, Radio } from "antd";
import ReactPaginate from "react-paginate";
import Box from "@mui/material/Box";
import { Gender, sports } from "./Data.js";
import axios from "axios";
import { addliked_matches } from "../Service/api";
import { getUsername } from "../../helper/helper";
import toast, { Toaster } from "react-hot-toast";
  import "./Time.css";
// const useStyles = makeStyles({
// 	timeline: {
// 		marginLeft: '10%',
// 	},
// });

export default function ColorsTimeline() {
  const [matchesData, setmatchesData] = useState([]); //matches
  const [pageCount, setpageCount] = useState(3);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [userData, setuserData] = useState({}); //user ka data
  // const classes = useStyles();
  // console.log(sports);
  useEffect(() => {
    (async () => {
      getTotalCount();
      const data = await getdata();
      setuserData(data);
      console.log(data);
      const matches = await fetchMatches2(data, 1);
      console.log(matches);
      setmatchesData(matches);
    })();
  }, []);
  useEffect(() => {
    if (checked.length || radio.length) fetchMatches(1);
  }, [checked, radio]);

  //   const filterMatch = async () => {
  // 	try {
  // 	  const response = await matchfilter(checked,radio)
  // 	  console.log(response);
  // 	  setmatchesData(response?.data);
  // 	} catch (error) {
  // 	  console.log(error);
  // 	}
  //   };

  const getTotalCount = async () => {
    let total = await getcount();
    setpageCount(Math.ceil(total.data / 3));
  };

  // const fetchMatches = async (currentPage) => {
  // 	let response = await matchList(currentPage, checked,radio);
  // 	let arr=response.data.map((match) => {

  // 		return {...match,isliked: false }

  // 	})

  // 	setmatchesData(arr);
  // };
  const getdata = async () => {
    const { username } = await getUsername(); //username --> name
    const { data } = await axios.get(`/api/user/${username}`); //data user ka
    console.log(data);
    return data;
  };
  const fetchMatches = async (currentPage) => {
    let response = await matchList(currentPage, checked, radio);
    console.log(userData);
    let arr = response.data.map((match) => {
      // Check if the match ID is present in liked array
      const isLiked =
        userData?.liked.length > 0 && userData?.liked.includes(match._id);
      return { ...match, isliked: isLiked };
    });

    setmatchesData(arr);
  };
  const fetchMatches2 = async (uData, currentPage) => {
    let response = await matchList(currentPage, checked, radio);
    let arr = response.data.map((match) => {
      // Check if the match ID is present in liked array
      const isLiked =
        uData?.liked.length > 0 && uData?.liked.includes(match._id);
      return { ...match, isliked: isLiked };
    });

    return arr;
  };
  const handleUserClick = async (modifiedMatchData) => {
    try {
      let { status } = await addliked_matches(userData._id,modifiedMatchData._id )
      if(status === 200){
        toast.success(' Successfully done!')
        const matchIndex = matchesData.findIndex(
          (user) => user._id === modifiedMatchData._id
        );
        // Create a copy of the matchesData array with the modified user object
        const updatedmatchesData = [...matchesData];
        updatedmatchesData[matchIndex] = modifiedMatchData;
        // Update the state with the modified matchesData array
        setmatchesData(updatedmatchesData);
        
      }  
    } catch (error) {
      return toast.error('Error try again!')
    }
    
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    fetchMatches(currentPage);
  };
  const handleFilter = (value, id, name) => {
    let all = [...checked];
    if (value) {
      all.push(name);
    } else {
      all = all.filter((c) => c !== name);
    }
    setChecked(all);
    console.log(checked);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "30%", flexShrink: 0 }}>
          <div className="col-md-3 filters">
            <h4 className="text-center">Filter By Category</h4>
            <div className="d-flex flex-column">
              {sports?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) =>
                    handleFilter(e.target.checked, c._id, c.name)
                  }
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            <h4 className="text-center mt-4">Filter By Gender</h4>
            <div className="d-flex flex-column">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Gender?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.gender}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-column">
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
              >
                RESET FILTERS
              </button>
            </div>
          </div>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <>
            <div>
              {matchesData?.map((user) => (
                <Card
                  key={user._id}
                  prop={user}
                  onUserClick={handleUserClick}
                />
              ))}
            </div>
            <div className={"cent"}>
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
            </div>
            
          </>
        </Box>
      </Box>
    </>
  );
}
