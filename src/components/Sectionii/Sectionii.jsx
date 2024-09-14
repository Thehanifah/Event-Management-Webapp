import React from 'react'
import './Sectionii.css'


function Sectionii() {
  return (
    <>
    <div className="background-container">
      <div className="content">
        <h1>Peak Planner: Your All-in-one Event Management Toolkit.</h1>
        <div className="sectionii-container">
          <div className="row">
            <div className="section-item">
              <h4>Pre-Event Networking</h4>
              <p>Create a buzz with attendees profile and spark connections before the big day.</p>
            </div>

            <div className="section-item">
              <h4>Hybrid/Virtual Management</h4>
              <p>Deliver a seamless experience for all attendees regardless of the location.</p>
            </div>
            <div className="section-item" >
              <h5>Post Event-Follow up</h5>
              <p> Keep attendees,share resources and gather valuable feedback.</p>
            </div>
          </div>

          <div className="row">
            <div className="section-item" >
              <h4>Engage Event Experience</h4>
              <p> Personalize Schedule,facilitate live interaction,and enhance attendee enjoyment.</p>
            </div>

            <div className="section-item" >
              <h4>Event Calender</h4>
              <p>Showcase upcoming events with an easy-to-use calender,allowing filtering 
                and search functionalities.</p>
            </div>
            <div className="section-item" >
              <h4>Comprehensive Dashboard</h4>
              <p>Monitor progress,track metrics and get real-time insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sectionii;
