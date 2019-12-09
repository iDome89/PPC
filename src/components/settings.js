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
                selection.checked = !selection.checked
            }
        })
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
                <>    
                    <label for={column.name}>{column.name}</label>    
                    <input onClick={handleSelect} type="checkbox" value={column.name} name={column.name} id={column.id} defaultChecked={column.checked}/>
                </>
                 )}
                    <input type="submit" value="Save"/>     
            </form>
        </div>
    )
                }
export default Settings;