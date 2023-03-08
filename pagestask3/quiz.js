import React from "react";
import Border from "../../contexttask3/Border";
import "./quiz.css"
import { questions } from "../../contexttask3/question";
import { UseUserContext } from "../../contexttask3/UserContext";
import { Link } from "react-router-dom";
import Result from "./result";
import Progress from "../../contexttask3/progress";

const quiz = () => {
    const{index,Next,value,onRadioChange,Submit,time,inter} = UseUserContext();
    const {id,q,o1,o2,o3} = questions[index];
    return(
        <>

        {time.min !== 1 ?
        <div className="center">
            <center className="display-5">Quiz App</center>
            <Border>
                <div className="content">

                    <p>{id} - {q}</p>

                    <ul>
                        <li>
                            <label>
                                <input type="radio" value={o1} checked={value===o1} onChange={onRadioChange}/>
                                <span className="p-2 h6">{o1}</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value={o2} checked={value===o2} onChange={onRadioChange}/>
                                <span className="p-2 h6">{o2}</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value={o3} checked={value===o3} onChange={onRadioChange}/>
                                <span className="p-2 h6">{o3}</span>
                            </label>
                        </li>
                    </ul>
                    {index === questions.length - 1 ?
                    <Link className="display-5" to="/result" onClick={Submit} style={{"textDecoration" : "none"}}>Submit</Link> :
                    <button className="btn btn-primary" onClick={Next}>Next</button>}
                    </div>
            </Border>

            <Progress/>

            <div className="display-5">
                {time.min} : {time.sec}
            </div>
        </div>  :
        <>
        {clearInterval(inter)}
        <Result/>
        </>
        }

        </>
    )
}

export default quiz;