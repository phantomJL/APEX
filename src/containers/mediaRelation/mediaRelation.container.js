import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import {news, magazine} from "../../data/mediaRelation"
import Magazine from "./mediaRelation.component/magazineCover.component"
import News from "./mediaRelation.component/news.component"
import New from "./mediaRelation.component/new.component"




function MediaRelation(props){
    const [page, setPage] = useState(0)
    const page_number = Math.ceil(news.length/6)
    const upitem = 0 + page*6
    const botitem = 6 + page*6
    const change_page=(page)=>{
        setPage(page)
    }
    return (

        <main className ="px-4">
            <div className ="avenir p-4">
                <div className="d-flex justify-content-between">
                <div className="py-4 subtitle font-weight-bold">NEWS</div>
                    <nav aria-label="...">
                    <ul className="pagination">
                        {[...Array(page_number).keys()].map((i)=>
                            <li class="page-item"><a className="page-link" onClick={()=>change_page(i)}>{i+1}</a></li>
                        )}
                       </ul> 
                    </nav>
                </div>
                {/* <div className ="d-flex" style={{maxHeight: "1000px", flexDirection:"column", flexWrap:"wrap"}}>
                    {page !== page_number ?
                    news.slice(upitem,botitem).map((value,index) => <News data={value}/>)
                    :
                    news.slice(upitem).map((value,index) => <News data={value}/>)
                }
                </div>   */}
                 <div className ="row" >
                    {page !== page_number ?
                    news.slice(upitem,botitem).map((value,index) => <New data={value}/>)
                    :
                    news.slice(upitem).map((value,index) => <New data={value}/>)
                }
                </div>  
            </div> 
            <div className ="avenir p-4">
                <div className ="py-4 subtitle font-weight-bold">MAGAZINE
                </div>
                <div className="row">
                    {magazine.map((value,index) => <Magazine data={value}/>)}
                </div>
            </div> 
        </main>
    )
}
export default withRouter(MediaRelation)