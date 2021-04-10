import '../styles/custom.css';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
// import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Superman from '../imgs/superman.jpeg';
import Batman from '../imgs/vector-batman-logo2.jpg';
import Flash from '../imgs/flash.png';
import { red } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import Aquaman from '../imgs/aquaman.png';
import Grid from '@material-ui/core/Grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const currencies = [{
      value: 'USD',
      label: '$',
    },
  ];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

// Custom CSS from Text Field but Not working
const CssTextField = withStyles({
  root3: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

// Whole Page CSS
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  appbarStyle: {
    backgroundColor: "#252F3E",
    textAlign: "justify",
    padding: "2% 3% 6% 3%",
    '& h1':{
      fontWeight: "600",
      fontSize: "50px",
      letterSpacing: "1px",
      marginBottom: "0",
      marginTop: "0",
    },
  },
  divContainer: {
    position: "relative",
    '& h2': {
      position :"absolute",
      fontWeight: "600",
      letterSpacing: "1px",
      marginBottom: "0",
      marginTop: "0",
      top: "1%",
      left: "6%"
    },
    '& p': {
      position: "absolute",
      top : "40%",
      left: "6%",
      margin: "12px 1px 0 1px",
      },
  },
  buttons: {
      position: "absolute",
      top: "25%",
      right: "1%"
    },
  paperContainer: {
      maxWidth: "95%",
      alignItems: "center",
      margin: "auto",
      borderRadius: "25px 25px 2px 2px",
      top: "4%",
  },
  genButton: {
      color: "rgba(0,0,0,.87)",
      backgroundColor: "#22d3ee",
      textTransform: "none",
      borderRadius: "20px",
      padding: "8px 25px",
      transition: '.75s',
      '&:hover': {
        backgroundColor: red[600],
        color: "#fff",
      },
  },
  genButton2: {
    color: "rgba(0,0,0,.87)",
    backgroundColor: grey[300],
    textTransform: "none",
    borderRadius: "20px",
    padding: "8px 25px",
    transition: '.75s',
    margin: "0 0 0 10px",
    '&:hover': {
      backgroundColor: green[600],
      color: "#fff",
    },
  },
  fieldStyle: {
      backgroundColor: "white",
      color: "black",
      margin: "1%",
      width: "90%",
      '&:hover': {
          oultline: "none",
      },
      '&:focus': {
          oultline: "none",
      }
  },
  tabStyle: {
      marginTop:"-4.5%",
      borderBottom: "2px solid black",
      marginBottom: "0px"
  },
  fieldStyleShip: {
      backgroundColor: "white",
      color: "black",
      width: "90%",
      '&:hover': {
          backgroundColor: "rgba(128,128,128,0.01)",
          oultline: "none",
      },
      '&:focus': {
          oultline: "none",
      }
  },
  root2: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        width: "90%",
        margin: "auto",
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    imgContainer: {
        // backgroundColor: "#F2F2FF",
        borderRadius: "20px",
        padding:"2%",
    },
    gridContainer: {
        marginBottom: "1%",
        padding: "0 3.5%",
    },

   imgParent: {
        maxWidth: "25%",
        display: "inline-block",
        flexWrap: "wrap",
        margin: "1%",
        '& img': {
            width: "200px",
            borderRadius: "15%"
        }
   },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    console.log("helo");
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className={classes.root}>

      {/* AppBar */}
      <AppBar position = "static" className = {classes.appbarStyle}>
            <div className = {classes.divContainer}>
                 <Avatar alt="Batman" src={Batman} />
                 <h2> Braies Lake - Canvas Print </h2>
                 <p>Product Detail</p>
                 <div className = {classes.buttons}>
                   <Button variant="contained" color="primary" href="#contained-buttons" className = { classes.genButton}>
                      <DeleteOutlineIcon />&nbsp;&nbsp;Remove
                    </Button>
                    <Button variant="contained" color="primary" href="#contained-buttons" className = { classes.genButton2}>
                      Save
                    </Button>
                  </div>
            </div>
        </AppBar>
      
      <Paper elevation = {2} className = { classes.paperContainer}>
      
      {/* TabHeader */}
      <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="white"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className = {classes.tabStyle}
          >
          <Tab label="Basic Info" {...a11yProps(0)}/>
          <Tab label="Images" {...a11yProps(1)} />
          <Tab label="Pricing" {...a11yProps(2)} />
          <Tab label="Shipping" {...a11yProps(3)} />
        </Tabs>
      
      {/* Product Info */}
      <TabPanel value={value} index={0}>
          <div  className={classes.imgContainer}>
             <form className={classes.root3}>
                    <CssTextField 
                    label = "Product Name"
                    placeholder = "Coca-cola"
                    variant = "outlined"
                    name = "name"
                     type = "string" fullWidth 
                     className= {classes.fieldStyle}
                     required />
                    <TextField
                        id="outlined-textarea"
                            label="Description"
                            placeholder="Product Details"
                            multiline rows = {6}
                            variant="outlined" fullWidth className= {classes.fieldStyle}
                        />
                    <Autocomplete class = "myClass" multiple id="tags-outlined"  options={myHeroes}
                      getOptionLabel={(option) => option.title}
                      // defaultValue={[myHeroes[4]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                      <TextField
                          {...params}
                          variant="outlined"
                          label="Categories"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          placeholder="Select multiple categories..." fullWidth className= {classes.fieldStyle}
                        />
                      )}
                    />

                    <Autocomplete class = "myClass" multiple id="tags-outlined"  options={myHeroes}
                      getOptionLabel={(option) => option.title}
                      // defaultValue={[myHeroes[27]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                      <TextField
                          {...params}
                          variant="outlined"
                          label="Tags"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          placeholder="Select multiple tags..." fullWidth className= {classes.fieldStyle}
                      />
                      )}
                    />
          </form>
          </div>
      </TabPanel>
      
      {/* Images */}
      <TabPanel value={value} index={1}>
      <div className={classes.imgContainer}>
          <div className = {classes.imgParent}>
            <img src ={Flash} className={classes.imglogoStyle} alt="Flash"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Aquaman} className={classes.imglogoStyle} alt="Aquaman"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Superman} className={classes.imglogoStyle} alt="Superman"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Flash} className={classes.imglogoStyle} alt="Flash"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Aquaman} className={classes.imglogoStyle} alt="Aquaman"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Superman} className={classes.imglogoStyle} alt="Superman"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Flash} className={classes.imglogoStyle} alt="Flash"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Aquaman} className={classes.imglogoStyle} alt="Aquaman"/>
        </div>
        <div className = {classes.imgParent}>
            <img src ={Superman} className={classes.imglogoStyle} alt="Superman"/>
        </div>
        </div>
      </TabPanel>
      
      {/* Pricing */}
      <TabPanel value={value} index={2}>
        <div className={classes.imgContainer} >
                    <TextField id = "outlined-basic" label = "Tax Excluded Price" variant = "outlined" name = "name"
                    placeholder = "10"
                    type = "number" fullWidth className= {classes.fieldStyle} 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                     required/>

                    <TextField
                        id="outlined-textarea"
                            label="Tax included Price"
                            type = "number"
                            placeholder="15" 
                            variant="outlined" fullWidth className= {classes.fieldStyle}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            required/>
                    <TextField
                        id="outlined-textarea"
                            label="Tax Rate"
                            type = "number"
                            required
                            placeholder="5"
                            variant="outlined" fullWidth className= {classes.fieldStyle}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            required/>
                    <TextField
                        id="outlined-textarea"
                            label="Compared Price"
                            type = "number"
                            required
                            placeholder="20"
                            variant="outlined" fullWidth className= {classes.fieldStyle}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            required/>                    
                        
        </div>
      </TabPanel>
      
      {/* Shipping */}
      <TabPanel value={value} index={3}>
         <div className={classes.imgContainer} >
            <Grid container xs = {12} className = {classes.gridContainer}>
             <Grid item xs={4}>
                  <TextField id = "outlined-basic" label = "Width" placeholder = "100" variant = "outlined" name = "name"type = "number" fullWidth required className = {classes.fieldStyleShip}
                   InputProps={{
                              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}/>
             </Grid>
             <Grid item xs={4}>
                  <TextField id = "outlined-basic" label = "Height" placeholder = "100" variant = "outlined" name = "name"
                     type = "number"
                     required fullWidth className = {
                       classes.fieldStyleShip
                     }
                    InputProps={{
                              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}
                     />
             </Grid>
             <Grid item xs={4}>
                  <TextField id = "outlined-basic" label = "Depth" placeholder = "3" variant = "outlined" name = "name"
                     type = "number"
                     fullWidth required className = {
                       classes.fieldStyleShip
                     }
                     InputProps={{
                              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                          }}
                     />
             </Grid>
             </Grid>
             {/* <Grid container xs = {12}> */}
                <TextField id = "outlined-basic" label = "Weight" placeholder = "2" variant = "outlined" name = "name"
                     type = "number"
                     fullWidth required className = {
                       classes.fieldStyle
                     }
                     InputProps={{
                              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                     />
                <TextField id = "outlined-basic" label = "Extra Shipping Fee" placeholder = "10" variant = "outlined" name = "name"
                     type = "number"
                     fullWidth required className = {
                       classes.fieldStyle
                     }
                     InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                     />
            {/* </Grid> */}
        </div>
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel> */}
      </Paper>
</div>
  );
}


const myHeroes = [
  { title: 'Iron Man', universe: "Marvel" },
  { title: 'Hulk', universe: "Marvel" },
  {
    title: 'Black Widow',
    universe: "Marvel"
  },
  { title: 'Captain America', universe:"Marvel" },
  {
    title: 'Spider Man',
    universe: "Marvel"
  },
  {
    title: "Thor",
    universe: "Marvel"
  },
  {
    title: 'Loki',
    universe: "Marvel"
  },
  {
    title: 'Hawkye',
    universe: "Marvel"
  },
  {
    title: 'Antman',
    universe: "Marvel"
  },
  {
    title: 'Scarlet Witch',
    universe: "Marvel"
  },
  {
    title: 'Iron Fist',
    universe: "Marvel"
  },
  {
    title: 'Daredevil',
    universe: "Marvel"
  },
  {
    title: 'Punisher',
    universe: "Marvel"
  },
  {
    title: 'Jessica Jones',
    universe: "Marvel"
  },
  {
    title: 'Dr. Strange',
    universe: "Marvel"
  },
  {
    title: "Fury",
    universe: "Marvel"
  },
  {
    title: 'Winter Soldier',
    universe: "Marvel"
  },
  {
    title: 'Falcon',
    universe: "Marvel"
  },
  {
    title: 'Black panther',
    universe: "Marvel"
  },
  {
    title: 'Star Lord',
    universe: "Marvel"
  },
  {
    title: 'Nebula',
    universe: "Marvel"
  },
  {
    title: 'Rocket',
    universe: "Marvel"
  },
  {
    title: 'Groot',
    universe: "Marvel"
  },
  {
    title: "Wasp",
    universe: "Marvel"
  },
  { title: 'Batman', universe: 1997 },
  { title: 'Superman', universe: 1995 },
  { title: 'Aquaman', universe: 1994 },
  { title: 'Flash', universe: 2001 },
  { title: 'Wonder Woman', universe: 1998 },
  { title: 'Supergirl', universe: 1968 },
  { title: 'Cyborg', universe: 1998 },
  { title: 'Oliver Queen', universe: 2014 },
  { title: 'Lois Lane', universe: 1942 },
  { title: 'Iris West', universe: 1931 },
  { title: 'Green Larten', universe: 1960 },
];