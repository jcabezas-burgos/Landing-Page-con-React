import React from "react";

function Card (props) {
    return (
        <div className="col-4 col-md-5 col-xl-4 d-flex justify-content-md-center" >
            <div className="card" style={{width: "18rem"}}>
                <img src={props.cardImg} className="card-img-top" alt="..." style={{height: "15rem" ,width: "18rem"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.cardtitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <a href="/#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
         </div>
            );
}

export default Card