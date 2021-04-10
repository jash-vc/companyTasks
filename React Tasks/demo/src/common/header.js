import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar'; 
import {makeStyles} from '@material-ui/core/styles';

 const useStyles = makeStyles({
   appbarStyle: {
         color: "white",
         backgroundColor: "#f06292",
       },
       avtarC: {
         backgroundColor: "orange",
         display: "flex",
         left: "95%",
         margin: ".5%",
       }
});

export default function HeaderBar(){
    const classes = useStyles();
    return(
            <header>       
                <AppBar className = {classes.appbarStyle} position="static" color = "accent"> 
                            <Avatar className = {classes.avtarC}>BA</Avatar> 
                </AppBar>
            </header >
        );
}