import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Badminton from './Sports/Badminton/Badminton';
import ColorsTimeline from './Card/Timeline';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ display: 'flex', justifyContent: 'center', maxHeight: "5vh", marginBottom: "2px" }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: "white" }}
                label="Matches"
                value="1" />
              <Tab sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: "white" }}
                label="Liked "
                value="2" />
            </TabList>
          </Box>
        </Box>
        <TabPanel value="1">
          <ColorsTimeline />
        </TabPanel>
        <TabPanel value="2">hello</TabPanel>
      </TabContext>
    </Box>
  );
}
