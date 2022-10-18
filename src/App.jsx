import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from "@mui/icons-material";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <div className="sidebar_container">
        <div className="sidebar">
          <div className="menu_icon">
            <TocRounded />
          </div>
          {/* profile */}
          <div className="profile">
            <img
              src="https://ik.imagekit.io/ankitimages/Ankit_NcEL5UkVR.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1666079387643"
              alt="profile_image"
            />
          </div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <h3>ANALYTICS</h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Performance" />
            </div>
            {/* group 2 */}
            <div className="group">
              <h3>Content</h3>
              <Item icon={<AttachMoneyRounded />} name="Sales" />
              <Item
                icon={<AssignmentTurnedInRounded />}
                name="Checklist"
              />{" "}
              <Item icon={<AccountCircleRounded />} name="Customers" />
            </div>
            {/* group 3 */}
            <div className="group">
              <h3>CUSTOMIZATION</h3>
              <Item icon={<SettingsRemoteRounded />} name="Segments" />
              <Item icon={<ColorLensRounded />} name="Themems" />
            </div>
          </div>
        </div>
      </div>

      <div className="body_container">
        {/* {" "}
        <hr /> I am Body
        <hr /> I am Body
        <hr /> I am Body
        <hr /> I am Body
        <hr /> I am Body
        <hr /> I am Body
        <hr /> I am Body
        <hr /> I am Body */}
      </div>
    </div>
  );
}

export default App;
