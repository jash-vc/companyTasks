import React from "react";
import "../assets/css/components/main.css";
import Heading from "./Heading";
import Tabs from "./TabsNavigation";

export default function Main(){
    return(
        <div className="mainContainer text-white">
            <Heading/>
            <Tabs/>
        </div>
    )
}