import React from "react";
import { useStateValue } from "../backendConnet/StateProvider";
import "./ExpanMore.css";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SidebarRow from "../sidebar/SidebarRow";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function ExpanMore() {
  const [{ user }] = useStateValue();

  return (
    <div className="expanMore">
      <SidebarRow src={user?.photoURL} title={user?.displayName} />
      <hr />
      <SidebarRow Icon={FeedbackIcon} title="Give Feedback" />
      <hr />
      <SidebarRow Icon={SettingsIcon} title="Setting & Privacy" />
      <SidebarRow Icon={HelpIcon} title="Help & Support" />
      <SidebarRow Icon={Brightness3Icon} title="Display Preferences" />
      <SidebarRow Icon={ExitToAppIcon} title="Log Out" />
    </div>
  );
}

export default ExpanMore;
