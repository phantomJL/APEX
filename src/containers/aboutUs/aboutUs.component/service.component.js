import React from "react"
function Service(props){
    return (
        <div className = "col-12 col-md-4" >
           <div className="article subtitle py-2">{props.data.title}</div>
           <div className="article paragraph py-2 justify-content-center" style={{height:"120px"}}>{props.data.intro}</div>
           <button type="button" class="btn btn-outline-dark font-weight-bold">LEARN MORE</button>
        </div>
    )
}
export default Service