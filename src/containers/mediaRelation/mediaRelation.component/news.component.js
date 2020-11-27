import React from "react"

function News(props){
    return (

            <a href ={props.data.url_1} style ={{color:"black", width:"30%"}}>
                <div className = "py-2">
                    <img src = {`${process.env.PUBLIC_URL}${props.data.img_url}`} style ={{width:"100%"}}/>
                </div>
                <div className="avenir font-weight-bold py-2">
                    {props.data.title}
                </div>
                <div className="avenir small-title py-2">
                    {props.data.date}
                </div>
                <div className="avenir py-2">
                    {props.data.description}
                </div>
            </a>

    )
}
export default News