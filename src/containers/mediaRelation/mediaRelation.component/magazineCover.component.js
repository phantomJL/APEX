import React from "react"

function Magazine(props){
    return (
        <div className=" col-lg-2 col-md-3 col-sm-6 ">
        <div className="container p-2 my-2" >
            <div className="d-flex justify-content-center" style ={{height:"170px" , width:"100% !important", backgroundColor:"transparent !important"}}>
                <img src = {`${process.env.PUBLIC_URL}${props.data.url}`} style ={{height:"100%",objectFit:"cover"}}/>
            </div>
        </div>
        </div>
    )
}
export default Magazine