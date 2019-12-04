import React, {useContext} from 'react'
import {TableContext} from '../model/context'
import Model from "../model/model";
const Settings= ()=> {
    const [columns, setColumns] = useContext(TableContext);
    const model = Model();
    const allKeys = Object.keys(model[0]);
    return (
        <div>
            <form>
                {allKeys.map(key =>(
                <>    
                    <label for={key}>{key}</label>    
                    <input type="checkbox" value={key} name={key}/>
                </>
                ))}    
            </form>
        </div>
    )
}
export default Settings;