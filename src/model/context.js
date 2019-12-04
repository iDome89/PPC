import React, { useState, createContext } from "react";

export const TableContext = createContext();
export const TableProvider = props => {
  const [columns, setColumns] = useState([
    "id",
    "name",
    "created_at",
    "updated_at",
    "items_count"
]);
  return (
    <TableContext.Provider value={[columns,setColumns]}>
      {props.children}
    </TableContext.Provider>
  );
};