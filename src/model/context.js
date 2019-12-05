import React, { useState, createContext } from "react";
import uuid from "uuid";

export const TableContext = createContext();
export const TableProvider = props => {
  const [columns, setColumns] = useState([
    {name:"id", checked:true, id:uuid()},
    {name:"name", checked:true, id:uuid()},
    {name:"campaign_name", checked:false, id:uuid()},
    {name:"adgroup_name", checked:false, id:uuid()},
    {name:"created_at", checked:true, id:uuid()},
    {name:"updated_at", checked:true, id:uuid()},
    {name:"type", checked:false, id:uuid()},
    {name:"adwords_status", checked:false, id:uuid()},
    {name:"items_count", checked:false, id:uuid()}
]);
  return (
    <TableContext.Provider value={[columns,setColumns]}>
      {props.children}
    </TableContext.Provider>
  );
};