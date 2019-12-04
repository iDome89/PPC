import React, { useContext } from "react";
import Model from "../model/model";
import {TableContext} from '../model/context'


const Table = () => {
    const model = Model();
    const [columns, setColumns] = useContext(TableContext)
    return (
        <div>
            <table className="table">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Items Count</th>
                  <th>Created</th>
                  <th>Last update</th>
                </tr>
    {model.map(data => <tr>{columns.map(key => <td>{data[key]}</td>)}</tr>
                    
                )}
             </table>
            <button>Settings</button>
        </div>
    )
}

export default Table