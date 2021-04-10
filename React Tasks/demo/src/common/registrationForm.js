import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import FlashLogo from '../imgs/flash.png';
import Checkbox from '@material-ui/core/Checkbox';
// import { blue } from '@material-ui/core/colors';


 const useStyles = makeStyles({
     paperStyle: {
        backgroundColor: "#FFF8FF",
        width: "400px",
        height: "auto",
        padding: "7% 0%",
        textAlign: "-webkit-center",
        position: "relative",
        margin: "auto",
        marginTop: "20px",
     },
     fieldStyle: {
         backgroundColor: "white",
         color: "black",
         marginBottom: "15px",
         width: "80%",
         '&:hover': {
            backgroundColor: "rgba(128,128,128,.1)",
            oultline: "none",
         },
         '&:focus': {
             oultline: "none",
         }
     },
    buttonStyle: {
        display: "block",
        marginTop: "5px",
        fontWeight: "500",
        textTransform: "capitalize",
        letterSpacing: "1px",
        backgroundColor: "#f06292",
        transition: "1s",
        opacity: "0.95",
        padding:"2% 20%",
        '&:hover': {
            backgroundColor: "#f06292",
            boxShadow: "none",
            transform: "scale(1.2)",
            opacity: "1",
        },
    },
    headingStyle: {
        textAlign: "center",
        letterSpacing: "1px",
        fontWeight: "500",

    },
    checkboxStyle: {
        display: "inline-block",
        position: "absolute",
        left: "8%",
        bottom: "15%",
        oultlineOffset: "none !important"
    },
    imglogoStyle: {
        width: "100px",
        display: "block",
        marginBottom: "30px",
    },
    paraStyle: {
        margin: "0%",
        marginLeft: "30px",
        marginBottom: "22px"
    },
    anchorStyle: {
        textDecoration: "none",
        color: "#f06292"
    }
 });
export default function Form() {
    const classes = useStyles();
    return (
         <div className="form">
            <Paper elevation = {3} className = {classes.paperStyle} >
                     <img src ={FlashLogo} className={classes.imglogoStyle} alt="Flash"/>
                        < h1 className = {
                            classes.headingStyle
                        } > Create an account </h1>


                     <TextField id = "outlined-basic"
                     label = "Enter Name"
                     placeholder = "Edward Cullen"
                     variant = "outlined"
                     name = "number"
                     type = "string"
                     required
                      className = {
                          classes.fieldStyle
                      }/>

                     <TextField id = "2"
                     label = "Enter Phone Number"
                     placeholder = "9988776655"
                     name = "number"
                    //  type = "number"
                     variant = "outlined" required
                     className = {
                         classes.fieldStyle
                     }
                     />
                     <TextField id = "3"
                     label = "Enter Email"
                     placeholder = "edward@twilight.com"
                     name = "email"
                     type = "email"
                     variant = "outlined"
                     required
                     className = {classes.fieldStyle}/>


                <TextField id = "4"
                  placeholder = "Edward@123"
                    label="Password"
                    name="password"
                    type="password"
                    variant = "outlined"
                    required
                    errorMessages={['this field is required']}
                     className = {classes.fieldStyle}
                />
                <Checkbox className = {classes.checkboxStyle}
                        color="secondary" 
                /><p className = {classes.paraStyle}>I read and accept <a className = {classes.anchorStyle} href="#" title="Terms">terms and conditions</a>.</p >
                <Button variant = "contained"
                      color = "primary"
                     className = {
                         classes.buttonStyle
                     }>
                          Create Account 
                </Button>                 
            </Paper>
        </div>
    );
}