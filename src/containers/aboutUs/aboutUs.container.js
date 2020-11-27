import React from "react"
import { withRouter } from "react-router-dom"
import Service from "./aboutUs.component/service.component"
import {ourStory, ourService, client_horizontal, client_square,partner} from "../../data/aboutUs.data"
import Icon from "./aboutUs.component/Icon.conponent"
function AboutUS(props){
    return (
        <main className ="px-4">
            <div className="row p-4">
            <div className="col-12 col-md-6 align-self-end">
               <img src={`${process.env.PUBLIC_URL}/img/aboutUs/aboutUs.png`} style = {{width:"100%"}}/>
            </div>
            <div className="col-12 col-md-6 align-self-center">
                <div className= "article title py-2">
                    OUR STORY
                </div>
                <div className="article paragraph py-2" >
                     {ourStory.description}
                </div>
            </div>
            </div>

            <div className="p-4">
                <div className= "article title py-2 text-center" style = {{marginTop:"100px", marginBottom:"50px"}}>
                    SERVICES
                </div>
                <div className="row" >
                {ourService.map((value, index) => {
                    return <Service key={index} data={value}/>
                })}
                </div>
            </div>
            <div className="p-4 ">
                <div className= "article title py-2 text-center" style = {{marginTop:"100px", marginBottom:"50px"}}>
                    CLIENTS
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                   { client_horizontal.map((value, index) =><Icon data ={value}/>)}
                   </div>
                   <div className="d-flex flex-wrap justify-content-center">
                   { client_square.map((value, index) =><Icon data ={value}/>)}
                   </div>
            </div>
            <div className="p-4">
                <div className= "article title py-2 text-center" style = {{marginTop:"100px", marginBottom:"50px"}}>
                    COLLABORATIONS
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                   { partner.map((value, index) =><Icon data ={value}/>)}
                   </div>
            </div>
        </main>
    )
}
export default withRouter(AboutUS)