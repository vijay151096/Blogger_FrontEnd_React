import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import React from "react";
import Login from "../components/login";
import App from "../App";
import BlogDetailView from "../components/BlogDetailView";

function BaseRouter() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/" element={<App />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/blog/:id" element={<BlogDetailView />}/>
                </Routes>
            </Router>
        </>
    )

}
export default BaseRouter