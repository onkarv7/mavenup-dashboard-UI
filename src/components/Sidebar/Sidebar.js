import React, { useState } from "react";
import "./sidebar.css";
import Interview from "../Interview/Interview";


const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <nav>
        <div className="display1">
         
          <img src=" Logomark White 3.svg" alt="" />

        </div>
        <div className="display1 " style={{ color: "#2962FF" }}>
          <a href="javascript:location.reload(true)">
          <img src="over.svg" alt="" />
          </a>
          Overview
        </div>

        <div className="display1">
          {show ? <Interview /> : null }
          <img
            onClick={() => setShow(true)}
            src="Calender icon.svg"
            alt=""
            />
       
          Calender
        </div>

        <div className="display1 ">
          <img src="notes icon.svg" alt="" />
          Notes
        </div>
        <div className="display1 ">
          <img src="task icon.svg" alt="" />
          Tasks
        </div>
      </nav>
      <div>
        <div className="display1">
          <br />
          <img src="Invite.svg" alt="" />
          Invite
        </div>
        <div className="display1">
          <img src="Chat.svg" alt="" />
          Chat
        </div>
        <div className="display1 up-arrow">
          <img src="up.svg" alt="" />
        </div>
        <div>
          <img src="Avatar.svg" alt="" />
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
