import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../backendConnet/StateProvider";
import ExpanMore from "./ExpanMore";
import Create from "./Create";
import Messanger from "./Messanger";
import Notification from "./Notification";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const [account, setAccount] = useState(false);
  const [create, setCreate] = useState(false);
  const [messanger, setMessanger] = useState(false);
  const [notification, setNotification] = useState(false);

  const opneAccount = (e) => {
    setAccount(!account);
    if (create || messanger || notification) {
      setCreate(false);
      setMessanger(false);
      setNotification(false);
    }
  };

  const opneMessage = (e) => {
    setMessanger(!messanger);

    if (create || account || notification) {
      setCreate(false);
      setAccount(false);
      setNotification(false);
    }
  };

  const opneNotification = (e) => {
    setNotification(!notification);

    if (create || account || messanger) {
      setCreate(false);
      setAccount(false);
      setMessanger(false);
    }
  };

  const openCreate = (e) => {
    setCreate(!create);
    if (account || messanger || notification) {
      setAccount(false);
      setMessanger(false);
      setNotification(false);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_Logo_Mini.svg/120px-Facebook_Logo_Mini.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option  header__optionActive">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <Avatar src={user?.photoURL} />
        <h4>{user?.displayName}</h4>

        <IconButton className="header__rightButton" onClick={openCreate}>
          {create ? (
            <>
              <Create />
              <AddIcon />
            </>
          ) : (
            <AddIcon />
          )}
        </IconButton>

        <IconButton className="header__rightButton" onClick={opneMessage}>
          {messanger ? (
            <>
              <Messanger />
              <ForumIcon />
            </>
          ) : (
            <ForumIcon />
          )}
        </IconButton>

        <IconButton className="header__rightButton" onClick={opneNotification}>
          {notification ? (
            <>
              <Notification />
              <NotificationsActiveIcon />
            </>
          ) : (
            <NotificationsActiveIcon />
          )}
        </IconButton>

        <IconButton className="header__rightButton" onClick={opneAccount}>
          {account ? (
            <>
              <ExpanMore />
              <ExpandMoreIcon />
            </>
          ) : (
            <ExpandMoreIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
