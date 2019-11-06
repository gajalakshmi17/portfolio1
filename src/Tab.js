import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import back2 from './back3.jpg';
import './tab.css';
import Card1 from './card1.js';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    
    width: '100%',
    //backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
		   <Tab label="Item four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
		<div>
		<div className="image1">
    <div className="hovereffect">
        <img className="img-responsive" src={back2} alt=""/>
        <div className="overlay">
            <h2>Hover effect 2</h2>
            <a className="info" href="#">link here</a>
        </div>
    </div>
</div>
<div className="image2">
    <div className="hovereffect">
        <img className="img-responsive" src={back2} alt=""/>
        <div className="overlay">
            <h2>Hover effect 2</h2>
            <a className="info" href="#">link here</a>
        </div>
    </div>
</div>
<div className="image2">
    <div className="hovereffect">
        <img className="img-responsive" src={back2} alt=""/>
        <div className="overlay">
            <h2>Hover effect 2</h2>
            <a className="info" href="#">link here</a>
        </div>
    </div>
</div>
</div>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
		 <TabPanel value={value} index={3} dir={theme.direction}>
          Item four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}