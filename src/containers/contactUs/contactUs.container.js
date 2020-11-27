import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import emailjs from 'emailjs-com';

function ContactUsContainer(props){
    const [purpose, setPurpose] = useState("Media Inquiry")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")


    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_fftillv', 'template_ltuptxd', e.target, 'user_J1pqQnb31sKRv1hA9F0QO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <main className="mx-auto" style={{width:"70%"}}>
            <h1 className="article text-uppercase text-center p-4">
                Let's work together
            </h1>
            <div className="d-flex justify-content-center p-4">
            <button className ={`article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ${purpose === "Media Inquiry" ? "active": ""}`} style={{width:"50%"}} onClick={()=>setPurpose("Media Inquiry")}>
                media inquiry
            </button> 
            <button className = {`article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ${purpose === "Media Inquiry" ? "": "active"}` }style={{width:"50%"}} onClick={()=>setPurpose("Reach Out")}>
                say hi to us
            </button>
            </div>
            <form className="contact-form p-4" onSubmit={sendEmail}>
            <div className="row article">
                 
      <div className= "col-sm-12 col-md-4" >
     <div> <label>Name</label>
     </div>
      <input className="short-input" type="text"  name="name"style={{width:"100%"}} />
</div>

<div className= "col-sm-12 col-md-4 " >
      <div>
      <label>Email</label>
      </div>
      <input className="short-input" type="email" name="email"  style={{width:"100%"}}/>
</div>
<div className= "col-sm-12 col-md-4 " > <div><label>Phone number</label> </div>
                <input className="short-input" type="text"  name="number" style={{width:"100%"}}/>
</div> 
              
</div>
      <div className = "py-4 article">
      <label>Message</label>
      </div>
      <div><textarea name="message"className="large-input"  style={{width:"100%", height:"250px"}}/>
      </div>
    <div className="py-4 my-2 d-flex justify-content-center">
      <button className="btn btn-outline-dark font-weight-bold" style={{width:"70%"}}  type="submit" value="Send" >Submit</button>
      </div>
    </form>
        </main>
    )
}
export default withRouter(ContactUsContainer)