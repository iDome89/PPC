import React, {useContext, useState} from 'react'
import {TableContext} from '../model/context'
import Model from "../model/model";
const Settings= ()=> {
    const [columns, setColumns] = useContext(TableContext);
    const model = Model();
    let selections = columns;


    const handleSelect = (e)=>{
        selections.forEach(selection =>{
            if(selection.id === e.target.id){
                // CR: tohle neudela vubec zmenu stavu nebo cokoli jineho
                selection.checked = !selection.checked
            }
        })
        // CR: pouziti arrow funkce
        selections.sort((a, b) => {
            return a.id - b.id;
          });

    }
    const addColumn = (e)=>{
        e.preventDefault();
        setColumns([...selections]);
    }
    return (
        <div>
            <form onSubmit = {addColumn}>
                {columns.map(column =>
                // mapujes nad polem takze tady na tom fragmentu chybi key={}
                <>
                    // Aby to spravne fungovalo tak se misto for musi napsat htmlFor
                    <label for={column.name}>{column.name}</label>
                    // CR: na inputu se nepouziva click ale onChange
                    <input onClick={handleSelect} type="checkbox" value={column.name} name={column.name} id={column.id} defaultChecked={column.checked}/>
                </>
                 )}
                    <input type="submit" value="Save"/>
            </form>
        </div>
    )
                }
export default Settings;
