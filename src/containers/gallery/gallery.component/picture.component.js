import React from "react"
import { withRouter } from "react-router-dom"

function Picture(props){
    return (
            <div style ={{height:"270px"}} className="p-2">
                <img src = {`${process.env.PUBLIC_URL}${props.data.img_url}`} style ={{height:"100%"}}/>
            </div>
    )
}
export default withRouter(Picture)