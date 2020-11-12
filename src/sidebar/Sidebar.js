import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "../backendConnet/StateProvider";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import GroupIcon from "@material-ui/icons/Group";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import UpdateIcon from "@material-ui/icons/Update";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import OpacityIcon from "@material-ui/icons/Opacity";
import GradeIcon from "@material-ui/icons/Grade";
import WorkIcon from "@material-ui/icons/Work";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Sidebar() {
  const [{ user }] = useStateValue();
  const [click, setclick] = useState(false);

  return (
    <div className="sidebar">
      <SidebarRow src={user?.photoURL} title={user?.displayName} />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />

      {click ? (
        <>
          <SidebarRow Icon={GroupIcon} title="Group" />
          <SidebarRow Icon={EventAvailableIcon} title="EventAvailable" />
          <SidebarRow Icon={UpdateIcon} title="Update" />
          <SidebarRow Icon={TurnedInIcon} title="TurnedIn" />
          <SidebarRow Icon={OpacityIcon} title="Opacity" />
          <SidebarRow Icon={GradeIcon} title="Grade" />
          <SidebarRow Icon={WorkIcon} title="Work" />
        </>
      ) : (
        <></>
      )}
      <div onClick={() => setclick(!click)}>
        {click ? (
          <SidebarRow Icon={ExpandLessIcon} title="less" />
          ) : (
            <SidebarRow Icon={ExpandMoreIcon} title="More" />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
