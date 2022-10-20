import React, { useState } from "react";

import { Box } from "@mui/system";
// import '../../overview.svg'
import "./sidebar.css";
import Interview from "../Interview/Interview";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <Box className="headerss">
      <nav>
        <div className="overview font-nav">
          <a href="javascript:location.reload(true)">
            <img src="Ov.svg" alt="" />
          </a>
          Overview
        </div>

        <div className="Calender">
          {show ? <Interview /> : null}

          <img onClick={() => setShow(true)} src="Calender.svg" alt="" />
        </div>

        <div className="Notes ">
          <img src="Notes.svg" alt="" />
        </div>
        <div className="Tasks ">
          <img src="Tasks.svg" alt="" />
        </div>
      </nav>
      <div>
        <div className="Invite">
          <br />
          <img src="Invite.svg" alt="" />
          Invite
        </div>
        <div className="Chat">
          <img src="Chat.svg" alt="" />
          Chat
        </div>
        <div className="">
          <img src="Arrow.svg" alt="" />
        </div>
        <div className="AP">
          <img src="Avatar.svg" alt="" />
        </div>
      </div>
    </Box>
  );
};

export default Sidebar;
