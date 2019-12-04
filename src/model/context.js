import React, { useState, createContext } from "react";
/*import { useHistory } from "react-router";*/

export const TableContext = createContext();
export const TableProvider = props => {
  /*const history = useHistory();*/
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