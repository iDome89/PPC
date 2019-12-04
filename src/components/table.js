import React from 'react'
import Model from "../model/model"

const Table = () => {
    const model = Model();
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
                {model.map(data =>(
                    <tr>
                        <td >{data.id}</td>
                        <td >{data.name}</td>
                        <td >{data.items_count}</td>
                        <td >{data.created_at}</td>
                        <td >{data.updated_at}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Table