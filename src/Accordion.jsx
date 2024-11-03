import { useState } from "react"
import data from "./data"
function Accordion(){
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handleSingleSelection(getCurrentID){
        setSelected(getCurrentID === selected ? null : getCurrentID)
    }
    function handleMultipleSelection(getCurrentID){
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentID)

        if(findIndexOfCurrentID === -1){
            cpyMultiple.push(getCurrentID)
        } else {
            cpyMultiple.splice(findIndexOfCurrentID, 1)
            setMultiple(cpyMultiple)
        }
    }
    console.log(selected, multiple);
    return(
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => 
                        <div className="item" key={dataItem}>
                            <div onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id)  : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection 
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                 <div className="content">{dataItem.answer}</div>   
                                )
                                : selected === dataItem.id && (
                                    <div className="content">{dataItem.answer}</div>   
                                )
                            }
                        </div> )
                    : ( <div>No data</div> )
                }
            </div>
        </div>
    )
}
export default Accordion