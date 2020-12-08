import React from "react"

function New(props){
    return (

            <div  className="col-lg-4 col-md-6 col-sm-12 news p-4" >
                <div className = "d-flex py-2 news-img" >
                    <img className="mr-3" src = {`${process.env.PUBLIC_URL}${props.data.img_url}`} style ={{width:"90%", objectFit:"cover"}}/>
                    <img src = {`${process.env.PUBLIC_URL}${props.data.news_logo}`} style ={{width:`${props.data.logo_style === "round"?"10%":"18%"}`, marginTop:"auto"}}/>
                </div>
                <div className="news-intro p-3 d-flex align-content-around flex-wrap" >
                    
                    <div className="avenir small-title py-2" style ={{width:"100%"}}>
                        {props.data.date}
                    </div>
                    <div className="avenir font-weight-bold py-2" style ={{width:"100%"}}>
                        {props.data.title}
                    </div>
             
                    <div className="d-flex flex-row-reverse" style ={{width:"100%"}}>
                        <a className="btn btn-outline-dark py-2 " href ={props.data.url_1}> Go to Article</a>
                    </div>
                </div>
            </div>

    )
}
export default New