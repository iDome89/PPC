import React, { useState, useContext } from "react";
import { TableContext } from '../model/context';
import Settings from "./settings";
import Model from "../model/model"



const Table = () => {
    const [model, setModel] = useState (Model());
    const [columns, setColumns] = useContext(TableContext);
    // CR: tady staci bohate useState(false)
    const [popup, setPopup] = useState(undefined);
    // CR: tady staci bohate useState('')
    const [tableValue, setTableValue] = useState({value:""});

    function updateModel(index, key, value) {
        model[index][key] = value
      }


    const togglePopup = (e, index, key)=>{
      let chosenValue = e.target.innerText;
      setColumnPointer(key.name);
      if (popup) {
        setPopup(undefined);
      } else {
        setPopup({ index, colmun: key.name});
      }
      setTableValue({value:chosenValue});
    }

    const handleChange = (ev)=>{
     setTableValue({...tableValue, value:ev.target.value})
}
    const handleUpdate = ()=>{
        updateModel(rowPointer, columnPointer,tableValue.value );
        setPopup({...popup, isShown:!popup.isShown});

    }
    const enabledColumns = columns.filter((key) => key.checked);

    return (
        <div>
            <table className="table">
                <tr>
                  {enabledColumns.map(column => <th>{column.name}</th>)}
                </tr>
                // CR: v tomhle zapisu by se prase vyznalo
                // nepouziti key={}
                // nereflektovani toho co se ma zobrazit (datum time ago)
                {model.map((data, index) =>
                  <tr key={data.id}>
                    {enabledColumns.map(column =>
                      <td key={column} onClick={(e) => togglePopup(e, index, column)} className="table_data">{data[column.name]} </td>
                      )
                    }
                  </tr>

                )}
             </table>
             <Settings />
             {popup.isShown &&
                <div className='popup'>
                  <div className='popup_inner'>
                      <input className="edit_input" onChange={handleChange} type="text" value={tableValue.value} />
                      <button onClick={handleChange({target: {value: ''}})}>X</button>
                      <button onClick={handleUpdate} className= "edit_save" value="Save">Save</button>
                  </div>
                </div>
              }
        </div>
    )
}

export default Table
