import React from "react"
function Service(props){
    return (
        <div className = "col-12 col-md-4" >
            <div class="card h-100">
            <div class="card-body h-100">
           <div className="article subtitle card-title py-2">{props.data.title}</div>
           <div className="article paragraph card-text py-2 justify-content-center" >{props.data.intro}</div>
           </div>
           </div>
           <button type="button" class="btn btn-outline-dark font-weight-bold" >LEARN MORE</button>
        </div>
    )
}
export default Service