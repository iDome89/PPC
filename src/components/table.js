import React, { useContext } from "react";
import Model from "../model/model";
import {TableContext} from '../model/context';
import Settings from "./settings";



const Table = () => {
    const model = Model();
    const [columns, setColumns] = useContext(TableContext);
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
        </div>
    )
}

export default Table