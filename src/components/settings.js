import React, {useContext, useState} from 'react'
import {TableContext} from '../model/context'
import Model from "../model/model";
const Settings= ()=> {
    const [columns, setColumns] = useContext(TableContext);
    const model = Model();
    const [selections, setSelections] = useState([]);
    const allKeys = Object.keys(model[0]);

    const handleSelect = (e)=>{
        if(!columns.includes(e.target.value)){
        setSelections([...selections, e.target.value])
    }}
    const addColumn = (e)=>{
        e.preventDefault();
        setColumns([...columns, ...selections])
    }
    return (
        <div>
            <form onSubmit = {addColumn}>
                {allKeys.map(key =>(
                <>    
                    <label for={key}>{key}</label>    
                    <input onChange={handleSelect} type="checkbox" value={key} name={key}/>
                </>
                ))}
                    <input type="submit" value="Save"/>     
            </form>
        </div>
    )
}
export default Settings;