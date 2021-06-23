import React, { useState } from 'react';
import "./Time.css"

const Time = () => {

    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time)
    const [cdate, setCdate] = useState(date)

    const UpdateTime = () => {
        date = new Date().toLocaleDateString();
        time = new Date().toLocaleTimeString();
        setCtime(time)
        setCdate(date)
    };

    setInterval(UpdateTime, 1000);

    return (
        <div className="card">
            {/*  <i
                className="fa fa-user-o fa-2x text-lightblue"
                aria-hidden="true"
            ></i> */}
            <div className="card_inner">
                <span className="font-bold text">{cdate}</span>
                <span className="font-bold text">{ctime}</span>
            </div>
        </div>
    )
}

export default Time
