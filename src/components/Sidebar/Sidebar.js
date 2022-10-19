import React from "react";

import { Box } from "@mui/system";
import '../../overview.svg'
import "./sidebar.css";
import Interview from "../Interview/Interview";

const Sidebar = () => {



  const handler =() => {
    return (
     
      < Interview /> 
    )
  }
  return (
    <Box className="headerss">
  <div >

        <div className="overview">
    <br />
       <img src="Overview.svg" alt="" />
        
        Overview</div>

        <div className="Calender">
          <img onClick={handler} src="Calender.svg" alt="" />
        </div>
   
        <div className="Notes"><img src="Notes.svg" alt="" /></div>
        <div className="Tasks"><img src="Tasks.svg" alt="" /></div>
    
</div>
      <div>
        <div className="Invite">
        <br /> 
      <img src="Invite.svg" alt="" />
     
        Invite</div>
        <div className="Chat">
        <img src="Chat.svg" alt="" />
        Chat</div>
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
