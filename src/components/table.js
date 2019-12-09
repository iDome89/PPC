import React, { useState, useContext } from "react";
import {TableContext} from '../model/context';
import Settings from "./settings";
import Model from "../model/model"




const Table = () => {
    const [model, setModel] = useState (Model());
    const [columns, setColumns] = useContext(TableContext);
    const [popup, setPopup] = useState({isShown:false});
    const [tableValue, setTableValue] = useState({value:""});
    const [rowPointer, setRowPointer] = useState("");
    const [columnPointer, setColumnPointer] = useState("");

  
    function updateModel(index, key, value) {
        model[index][key] = value
      }
  
    
    const togglePopup = (e, index, key)=>{
      let chosenValue = e.target.innerText;
      setColumnPointer(key.name);
      setRowPointer(index);
      setPopup({...popup, isShown:!popup.isShown});
      setTableValue({value:chosenValue});
    }

    const handleChange = (ev)=>{
     setTableValue({...tableValue, value:ev.target.value})
}
    const handleUpdate = ()=>{
        updateModel(rowPointer, columnPointer,tableValue.value );
        setPopup({...popup, isShown:!popup.isShown});

    }

    return (
        <div>
            <table className="table">
                <tr>
                  {columns.map(column =>{
                   return column.checked ? <th>{column.name}</th> : null
                 })} 
                </tr>

                {model.map((data, index) => <tr>{columns.map(key => {return key.checked ? <td onClick={(e) => togglePopup(e, index, key)} className="table_data">{data[key.name]} </td> :null})}</tr>
                    
                )}
             </table>
             <Settings />
             {popup.isShown ? 
                <div className='popup'>
                <div className='popup_inner'>
                    <input className= "edit_input" onChange={handleChange} type="text" defaultValue={tableValue.value} />
                    <button onClick={handleUpdate} className= "edit_save" value="Save">Save</button>
                </div>
              </div>
        
          : null
        }
        </div>
    )
}

export default Table