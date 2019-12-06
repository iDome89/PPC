import React, { useState, useContext } from "react";
import {TableContext} from '../model/context';
import Settings from "./settings";
import Model from "../model/model"




const Table = () => {
    const [model, setModel] = useState (Model());
    const [columns, setColumns] = useContext(TableContext);
    const [popup, setPopup] = useState({isShown:false});
    const [tableData, setTableData] = useState({value:""});
    const togglePopup = (e)=>{
      setPopup({...popup, isShown:!popup.isShown});
      setTableData({value:e.target.innerText});
    }

    const handleChange = (ev)=>{
     setTableData({...tableData, value:ev.target.value})
}
    const handleUpdate = (e)=>{
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

                {model.map(data => <tr>{columns.map(key => {return key.checked ? <td onClick={togglePopup} className="table_data">{data[key.name]} </td> :null})}</tr>
                    
                )}
             </table>
             <Settings />
             {popup.isShown ? 
                <div className='popup'>
                <div className='popup_inner'>
                    <input className= "edit_input" onChange={handleChange} type="text" defaultValue={tableData.value} />
                    <button onClick={handleUpdate} className= "edit_save" value="Save">Save</button>
                </div>
              </div>
        
          : null
        }
        </div>
    )
}

export default Table