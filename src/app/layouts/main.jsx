import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/comments");
    };
    return (
        <div className="card-body">
            <h3 className="card-title text-center shadow-lg p-3 mb-5 bg-body rounded">
                Учись легче, учась быстрее, учись свободнее...
            </h3>
            <div className="d-grid gap-2 col-6 mx-auto ">
                <button className=" btn-circle btn btn-warning" onClick={handleClick}>GO!</button>
            </div>
        </div>
    );
};

export default Main;
