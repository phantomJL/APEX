import React from "react"
import {withRouter} from "react-router-dom"
import {caseStudy} from "../../data/caseStudy.data"
import Case from "./case.component/case.component"

function CaseStudy(props){
    return (
        <main style={{paddingLeft:"130px", paddingRight:"130px"}}>
            <section className = "p-4">
                <div className= "container">
                <div className ="row py-2">
                {caseStudy.map((value, index) => {
                    return <div className="col-4"><Case data={value} index={index}/></div>
                })}
                </div>
                </div>
            </section>
        
        </main>
    )
}
export default withRouter(CaseStudy)