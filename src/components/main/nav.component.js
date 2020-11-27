import React,{useEffect, useRef, useState} from "react"
import "../../App.css"

export default function Nav(props){
    const aboutUS = useRef();
    const caseStudy = useRef();
    const gallery = useRef();
    const mediaRelation = useRef();
    const contactUs = useRef();
    const [current_page, setPage] = useState("/")

    const navToPage=(page)=>{ 
        props.history.push(`/${page}`)   
        setPage(`/${page}`)
    }
    useEffect(()=>{
        props.history.location.pathname === "/AboutUS" ? aboutUS.current.setAttribute("class", "nav-link disabled") : aboutUS.current.setAttribute("class", "nav-link")
        props.history.location.pathname === "/CaseStudy"  ? caseStudy.current.setAttribute("class", "nav-link disabled") : caseStudy.current.setAttribute("class", "nav-link")
        props.history.location.pathname === "/Gallery"  ? gallery.current.setAttribute("class", "nav-link disabled") : gallery.current.setAttribute("class", "nav-link")
        props.history.location.pathname === "/MediaRelation"  ? mediaRelation.current.setAttribute("class", "nav-link disabled") : mediaRelation.current.setAttribute("class", "nav-link")
        props.history.location.pathname === "/ContactUs"  ? contactUs.current.setAttribute("class", "nav-link disabled") : contactUs.current.setAttribute("class", "nav-link")
   
    })


    return (
        <div className="p-3 d-flex justify-content-between align-items-center" id="mynav">
        <div onClick={e => props.history.push("/")} ><img alt= "logo" src = {`${process.env.PUBLIC_URL}/img/apex_black.png`} style={{width:"80px"}}/></div>
        <ul className="nav small-title">
            <li className="nav-item px-2">
                <div ref={aboutUS} className="nav-link " onClick={e => navToPage("AboutUS")}>ABOUT US</div>
            </li>
            <li className="nav-item px-2">
                <div ref={caseStudy} className="nav-link" onClick={e=> navToPage("CaseStudy")}>CASE STUDY</div>
            </li>
            <li className="nav-item px-2" >
                <div ref={gallery} className="nav-link" onClick={e=> navToPage("Gallery")}>GALLERY</div>
            </li>
            <li className="nav-item px-2">
                <div ref={mediaRelation} className="nav-link" onClick={e=> navToPage("MediaRelation")}>MEDIA RELATIONS</div>
            </li>
            <li className="nav-item px-2">
                <div ref={contactUs} className="nav-link" onClick={e=> navToPage("ContactUs")}>CONTACT US</div>
            </li>
        </ul>
      </div>
    )
}