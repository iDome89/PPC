import React, { useContext } from "react";
import Model from "../model/model";
import {TableContext} from '../model/context'


const Table = () => {
    const model = Model();
    const [columns, setColumns] = useContext(TableContext);
    return (
        <div>
            <table className="table">
                <tr>
                  {columns.map(column =>
                  <th>{column}</th>
                  )} 
                </tr>

                {model.map(data => <tr>{columns.map(key => <td>{data[key]}</td>)}</tr>
                    
                )}
             </table>
        </div>
    )
}

export default Table