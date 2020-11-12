import React from "react";
import "./Create.css";
import SidebarRow from "../sidebar/SidebarRow";

import CreateIcon from "@material-ui/icons/Create";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import StarsIcon from "@material-ui/icons/Stars";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import LabelIcon from "@material-ui/icons/Label";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Create() {
  return (
    <div className="create">
        <h4>Create</h4>
      <div className="creat__Icon">
        <SidebarRow Icon={CreateIcon} title="Post" descreption='Share a post on News Feed.' />
       
      </div>
      <div className="creat__Icon">
        <SidebarRow Icon={MenuBookIcon} title="Story" descreption='Share a photo or write someting.' />
       
      </div>
      <div className="creat__Icon">
        <SidebarRow Icon={StarsIcon} title="Life Event" descreption='Add a life event to your profile.' />
       
      </div>
      <hr />
      <div className="creat__Icon">
        <SidebarRow Icon={FindInPageIcon} title="Page" descreption='Connet and share with customers of fans.' />
       
      </div>
      <div className="creat__Icon">
        <SidebarRow Icon={LabelIcon} title="ad" descreption='Advertise our business, brand or organization.'/>
       
      </div>
      <div className="creat__Icon">
        <SidebarRow Icon={GroupWorkIcon} title="Group" descreption='Connent with poeple wh share your interests.' />
       
      </div>
      <div className="creat__Icon">
        <SidebarRow Icon={EventAvailableIcon} title="Event" descreption='Bring people together with a public or private event.' />
        
      </div>
      <div className="creat__Icon">
        <SidebarRow Icon={ShoppingBasketIcon} title="Marketplace Listing" descreption='Sell items to people in your communtiy.' />
      </div>
    </div>
  );
}

export default Create;
