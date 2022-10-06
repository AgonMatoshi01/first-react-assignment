import React from "react";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Header from "./components/Header";
import {Route,Routes, Redirect, Navigate} from "react-router-dom";


export default () =>{
    return (
    <div>
        <h1>Simple SPA</h1>
            <Header></Header>
        <Routes>
            <Route path="/Home" element ={<Home/>}/>
            <Route path="/Stuff" element ={<Stuff/>}/>
            <Route path="/Contacts" element ={<Contact/>}/>
            <Route
                path="*"
            element={<Navigate to="/Home" />}
            />
        </Routes>

    </div>
);};
 

