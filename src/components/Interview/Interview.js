import "./interview.css";

import React , {useState} from "react";

          

const Interview = () => {


  return (
    <div className="interview-box">

    <div className="int-icons1"><img src="Message.svg" alt="Message" />
<img className="ic1" src="Edit.svg" alt="Edit" />
<img className="ic1" src="Bin.svg" alt="Bin" />


<img

 className="ic1" src="Close.svg" alt="Close" /></div>


      <div className="anuj">
      <img className="Roll" src="Roll.svg" alt="" />
      
      Interview with Anuj Desai</div>

      <div className="sub-heading4"> 
      3:30 pm , <span className="inner-sub-heading">Thursday, 6th April, 2022</span> 
      </div>

      <div>
        {" "}
        <div className="insights">Insights</div>
        <div className="more">More details</div>
      </div>

{/* Past Mettings  */}

      <div>
        <div className="meet">
          <img className="Insigth-icon" src="Insights.svg" alt="meet-icon" ></img>
        </div>
        <div className="meet-div">
          <div className="meet-notes">Take meeting notes   </div>
          <img className="meet-icons" src="Meet.svg" alt="meet" />
       
        </div>
      </div>

      <div>
        <div className="Past-Meetings font1 ">Past Meetings (8)</div>
        <div className="Weekly-Sync1">Weekly Sync
             <img className="Meet-meet1" src="Meet1.svg" alt="meet" />
        </div>
   
        <div className="d1 date-font">Thursday, 6th April, 2022</div>
        <div className="Weekly-Sync2">
      
        Weekly Sync
        <img className="Meet-meet1" src="Meet1.svg" alt="meet" />
        </div>
        <div className="d2 date-font">Thursday, 6th April, 2022</div>
      </div>

{/* Related Notes */}

      <div>
        <div className="t3 font1">Related Notes (8)</div>
        <div className="lorem1"> <div className="t1"> Lorem ipsum dolor sit amet</div>
        <div className="d3 date-font">6th April, 2022</div></div>
       <div className="lorem2"> <div className="t2"> Lorem ipsum dolor sit amet</div>
        <div className="d4 date-font">6th April, 2022</div></div>
       
      </div>


{/* Pending Tasks  */}

      <div>
        <div className="t4 font1"> Pending Tasks (4)</div>

        <div className="wireframing-div1">
          {" "}
          <div className="t5">
          <img className="Wireframming" src="Wireframming.svg" alt="Wireframming" />
          Wireframing
          <img className="Wireframming2" src="Wireframming2.svg" alt="Wireframming2" />
          <img className="Wireframming4" src="Wireframming4.svg" alt="Wirframming4" />
          <img className="Wireframming3" src="Wireframming3.svg" alt="Wireframming3" />
          </div>
        </div>

        <div className="wireframing-div2">
          {" "}
          <div className="t6">
          <img className="Wireframming" src="Wireframming.svg" alt="Wireframming" />
          Wireframing
          <img className="Wireframming2" src="Wireframming2.svg" alt="Wireframming2" />
          <img className="Wireframming4" src="Wireframming4.svg" alt="Wirframming4" />
          <img className="Wireframming3" src="Wireframming3.svg" alt="Wireframming3" />
          </div>
        </div>
      </div>

      {/* Email References  */}

      <div>
        {" "}
        <div className="t7 font1">
        <img className="emailo" src="Email2.svg" alt="" />
        Email References</div>
        <div className="update1">  <div className="t8">Update : On the account</div>
        <div className="d7 date-font">6th April, 2022</div></div>
      <div className="update2"> <div className="t9">Update : On the account</div>
        <div className="d8 date-font">6th April, 2022</div></div>
       
      </div>

{/* Accept / Decline  */}

      <div>
        {" "}
        <div className="accept-btn">
          <div className="accept">Accept</div>
        </div>
        <div className="decline-btn">
          {" "}
          <div className="decline">Decline</div>
        </div>
      </div>

{/* Calender  */}
      
      <div>
        {" "}
        <div className="cal-btn"></div>
        <div className="cal">Go To Calender</div>
      </div>
    </div>
  );
};

export default Interview;
