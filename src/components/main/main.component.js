import React from "react"
import { withRouter } from "react-router-dom"
import Nav from "./nav.component"
import "../../App.css"
function Main(props){
    return (
       <main className="main-canvas">
           <section className = "sticky-top">
               <Nav history = {props.history}></Nav>
           </section>
           <section className="container-fluid my-auto " style={{ paddingLeft:"60px", paddingRight:"60px"}}>
               {props.children}
           </section>

           <section class="icon-bar">
            <a href="https://www.facebook.com/apexcomm" class="facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/apexcomm/" class="instagram">
            <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg" class="youtube">
            <i class="fab fa-youtube-square"></i>
            </a>
            <a href="https://vimeo.com/apexcomm" class="vimeo">
                    <i class="fab fa-vimeo-v"></i>
                    </a>
                    <a href="https://www.weibo.com/u/5888176990" class="weibo">
                    <i class="fab fa-weibo"></i>
                    </a>
            </section>
           <section class="gmail-bar avenir text-uppercase" style={{writingMode: "vertical-rl",textOrientation: "mixed"}}>   hello@apexcomm.us </section>
           <footer className="trocchi text-weight-bold text-center p-4 text-uppercase small-title" style = {{position:"relative", bottom:"0 !important"}} >© 2020 APEX Communications, INC. All Rights Reserved.</footer>
       </main>
    )
}

export default withRouter(Main)