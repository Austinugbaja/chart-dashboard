import React from "react";
import "../../styles/TopBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/* <img src="./selfie.png" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
