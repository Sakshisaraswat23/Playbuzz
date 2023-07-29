import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { matchfilter, matchList,getcount } from '../Service/api';
import { makeStyles } from '@material-ui/core';
import { Checkbox, Radio } from "antd";
import ReactPaginate from "react-paginate";
import Box from '@mui/material/Box';
import { Gender,sports } from './Data.js';
const useStyles = makeStyles({
	timeline: {
		marginLeft: '10%',
	},
});

export default function ColorsTimeline() {
	const [users, setUsers] = useState([]);
	const [pageCount, setpageCount] = useState(3);
	const [checked, setChecked] = useState([]);
	const [radio, setRadio] = useState([]);
	// const classes = useStyles();
	// console.log(sports);
	useEffect(() => {
		getTotalCount();
		fetchMatches(1);
	}, []);
	useEffect(() => {
		if (checked.length || radio.length) fetchMatches(1);
	  }, [checked, radio]);


	  const filterMatch = async () => {
		try {
		  const response = await matchfilter(checked,radio)
		  console.log(response);
		  setUsers(response?.data);
		} catch (error) {
		  console.log(error);
		}
	  };

	const getTotalCount = async () => {
		let total = await getcount();
		setpageCount(Math.ceil(total.data / 3));
	};

	const fetchMatches = async (currentPage) => {
		let response = await matchList(currentPage, checked,radio);
		setUsers(response.data);
	};
	const handlePageClick = async (data) => {
		let currentPage = data.selected + 1;
		fetchMatches(currentPage);
		
	  };
	  const handleFilter = (value, id,name) => {
		
		let all = [...checked];
		if (value) {
		  all.push(name);
		} else {
		  all = all.filter((c) => c !== name);
		}
		setChecked(all);
		console.log(checked);
	  };
	return <>
	 <Box
    sx={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ width: '30%', flexShrink: 0 }}>
	<div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {sports?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked , c._id, c.name)}
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
		   <div >
  				{users?.map((user) => (
    				<Card key={user.id} prop={user} />
  				))}
			</div>

	  		<ReactPaginate
				previousLabel={"previous"}
				nextLabel={"next"}
				breakLabel={"..."}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={handlePageClick}
				containerClassName={"pagination justify-content-center"}
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
		   </>
    </Box>
  </Box>
	
	</>;
}
