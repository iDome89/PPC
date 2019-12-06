import React, { useState, useContext } from "react";
import {TableContext} from '../model/context';
import Settings from "./settings";
import Model from "../model/model"
import Edit from "./edit";




const Table = () => {
    const [model, setModel] = useState (Model());
    const [columns, setColumns] = useContext(TableContext);
    const [popup, setPopup] = useState({showPopup:false})

    const handlePopup = (e)=>{
      
    }

    return (
        <div>
            <table className="table">
                <tr>
                  {columns.map(column =>{
                   return column.checked ? <th>{column.name}</th> : null
                 })} 
                </tr>

                {model.map(data => <tr>{columns.map(key => {return key.checked ? <td className="table_data">{data[key.name]} </td> :null})}</tr>
                    
                )}
             </table>
             <Settings />
             {popup.showPopup ? 
              <Edit />
        
          : null
        }
        </div>
    )
}

export default Table