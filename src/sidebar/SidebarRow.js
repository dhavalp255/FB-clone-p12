import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ title, Icon, src, descreption }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      <span>{Icon && <Icon />}</span>

      <div className="sidebarRow__info">
        <h4>{title}</h4>
        {descreption && <p>{descreption}</p>}
      </div>
    </div>
  );
}

export default SidebarRow;
