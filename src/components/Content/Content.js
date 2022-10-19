import { Box } from "@mui/system";
import React from "react";
import Interview from "../Interview/Interview";
import Sidebar from "../Sidebar/Sidebar";
import "./content.css";
import "./tasks.css";
import "./today.css";


const Content = () => {
  return (
    <div className="container">
      <Sidebar />

      {/* 1 */}
      <div>
        <div className="heading-container">
          <div className="heading">
            Akshay Sharma, Let’s have a great work day!
            <div>
              {" "}
              <img className="search" src="Search.svg" alt="" />
              <img className="bell" src="Bell.svg" alt="" />
            </div>
          </div>

          <div className="sub-heading">6th April, 2022</div>
        </div>
      </div>

      {/* 2 */}
      <div className="text-container">
        <div>
          <div className="text-container1">
            
            <img className="circle" src="Circle.svg" alt="" />
            Start typing or press ‘/’ for commands
          </div>
          <div className="text-container2">New Note N+Alt</div>
          <img className="max" src="maximize-2 1.svg" alt="" />
        </div>
        <div className="txt-div1">
          {" "}
          <div> 1 : 1</div>
        </div>
        <div className="txt-div2">
          {" "}
          <div> Meeting template</div>
        </div>
        <div className="txt-div3">
          {" "}
          <div> Interview</div>
        </div>
        <div className="txt-div4">
          {" "}
          <div> To-do-template</div>
        </div>
      </div>

      {/* Tasks */}

      <div className="tasks-header">Unscheduled tasks</div>

      <div className="task-container">
        <div className="task-container-div1">
          <div className="task-container1 td">
            Drag any task to the calendar to schedule it
            
          </div>
          <img className="drag-icon" src="Drag.svg" alt="" />
        </div>

        <div className="task-container-div2">
          {" "}
          <div className="task-container2 td">
            <img className="Designr" src="Designr.svg" alt="" />
            <img className="Designr2" src="Designr2.svg" alt="" />
            Wireframing for website homepage with responsive designs
            <img className="Designr3" src="Designr3.svg" alt="" />
            <img className="Designr4" src="Designr4.svg" alt="" />
          </div>
        </div>

        <div className="design">
          <div className="task-container-div3">
            {" "}
            <div className="task-container3 td">
            <img className="Designr" src="Designr1.svg" alt="" />
              <img className="Designr2" src="Designr2.svg" alt="" />
              Design review
              <img className="Designr3" src="Designr3.svg" alt="" />
              <img className="Designr4" src="Designr4.svg" alt="" />
            </div>
          </div>

          <div className="task-container-div4">
            {" "}
            <div className="task-container4 td">
            <img className="Designr" src="Designr1.svg" alt="" />
              <img className="Designr2" src="Designr2.svg" alt="" />
              Design review
              <img className="Designr3" src="Designr3.svg" alt="" />
              <img className="Designr4" src="Designr4.svg" alt="" />
            </div>
          </div>

          <div className="task-container-div5">
            {" "}
            <div className="task-container5 td">
              <img className="Designr" src="Designr1.svg" alt="" />
              <img className="Designr2" src="Designr2.svg" alt="" />
              Design review
              <img className="Designr3" src="Designr3.svg" alt="" />
              <img className="Designr4" src="Designr4.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="task-container-div6">
          <div className="task-container6 td">
          <img className="Designr" src="Designr.svg" alt="" />
            <img className="Designr2" src="Designr2.svg" alt="" />
            Wireframing for website homepage with responsive designs
            <img className="Designr3" src="Designr3.svg" alt="" />
            <img className="Designr4" src="Designr4.svg" alt="" />
          </div>
        </div>
      </div>

      {/* shedule */}

      <div className="shedule">Today's schedule</div>

      <div className="time1">10:30 - 11:30</div>
      <div className="internal1-div">
        <div className="internal1">Internal</div>
      </div>

      <div className="time2">10:30 - 11:30</div>
      <div className="internal2-div">
        {" "}
        <div className="internal2">Internal</div>{" "}
      </div>

      <div className="alex">
        <div className="time3">10:30 - 11:30</div>
        <div className="internal3-div">
          {" "}
          <div className="internal3">Internal</div>
        </div>
        <div className="text3">Alex / Growth Team Week...</div>
      </div>

      <div className="time4">10:30 - 11:30</div>

      <div className="time5">11:15 - 12:00</div>
      <div className="interval4-div">
        {" "}
        <div className="internal4">Internal</div>
      </div>

      <div className="join-meeting">Join Meeting</div>

      <div className="time6">10:30 - 11:30</div>
      <div className="time7">10:30 - 11:30</div>
      <div className="time8">10:30 - 11:30</div>
      <div className="time9">11:15 - 12:00</div>
      <div className="time10">11:15 - 12:00</div>

      <div className="text1">Weekly Sync</div>
      <div className="text2">Value Proposition Workshop</div>

      <div className="text4">Weekly Sync</div>
      <div className="text5">Weekly Sync</div>
      <div className="text6">Weekly Sync</div>
      <div className="text7">Weekly Sync</div>
      <div className="text8">Weekly Sync</div>
      <div className="text9">Weekly Sync</div>
      <div className="text10">Weekly Sync</div>

      <Interview />
    </div>
  );
};

export default Content;
