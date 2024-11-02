import { useState } from "react"
import data from "./data"
function Accordion(){
    const [selected, setSelected] = useState(null)
    function handleSingleSelection(getCurrentID){
        setSelected(getCurrentID === selected ? null : getCurrentID)
    }

    return(
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item" key={dataItem}>
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ?
                            <div>{dataItem.answer}</div>
                            : null
                        }
                    </div> )
                    : ( <div>No data</div> )
                }
            </div>
        </div>
    )
}
export default Accordion