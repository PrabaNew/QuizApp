import React from "react";
// import { UseUserContext } from "../../contexttask3/UserContext";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const welcome = () => {
    return(
        <center>
            <div className="display-5">Welcome To The Quiz App</div>
            <br/>
            <div className="display-5">Click Here To Enter</div>
            <br/>
            <div className="display-5"><BsArrowDown/></div>
            <br/>
            <Link to="/intro" className="display-5" style={{"textDecoration" : "none"}}>click Here</Link>
        </center>
    ) 
}

export default welcome;