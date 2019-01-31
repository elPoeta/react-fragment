import React from "react";
import PrivateList from "./PrivateList";
import PublicList from "./PublicList";

const List = props => (
  <ul className="list-group">
    {props.permissions && <PrivateList />}
    <PublicList />
  </ul>
);

export default List;
