import React from "react";
import { questions } from "../../contexttask3/question";
import { UseUserContext } from "../../contexttask3/UserContext";

const Result = () => {
    const {mark} = UseUserContext();
    return(
        <div>
            Your mark is {mark} / {questions.length}
        </div>
    )
}

export default Result;