import React from "react";
import { Link } from "react-router-dom"
import { UseUserContext } from "../../contexttask3/UserContext";
// import { UseUserContext } from "../../contexttask3/UserContext";

const Intro = () => {
    const {startTimer} = UseUserContext();
    
    return(
        <center>
            <div className='text-center h4'>Instruction Page</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">1.You are given 1minutes to answer the question.</li>
                <li className="list-group-item">2.You are not allowed to skip the questions.</li>
                <li className="list-group-item">3.All the questions must be answered.</li>
                <li className="list-group-item">4.You are not allowed to go back.</li>
                <li className="list-group-item">5.Score will be displayed at end.</li>
                </ul>
                <Link className="display-5" to="/quiz" style={{"textDecoration" : "none"}} onClick={startTimer}>  Start </Link>

        </center>
    )
}

export default Intro;