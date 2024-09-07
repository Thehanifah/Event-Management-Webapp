import Button from "../Onboardingone/Button";
import img from "../../assets/Onboardingone/image-onboarding-two.jpeg";
function Onboardingtwo() {
  return (
    <>
      <div className="onboarding-background text-start p-5">
        <div className="bg-white p-5">
          <p className="pb-3">Step 2 of 3: About you</p>
          <h5>Let`s get to know you some more!</h5>
          <p className="pb-3">
            Peak Planner streamlines workflows, boost engagement, and delivers
            exceptional experiences.
          </p>

          <p>
            <b className="pb-3">
              What will you use peak planner for?
              <span style={{ color: "red" }}>*</span>
            </b>
          </p>
          <div className="button">
            <div className=" pb-5 button-grid">
              <Button>Event Calender</Button>
              <Button>Guest Followup</Button>
              <Button>Games</Button>
              <Button>Networking</Button>
              <Button>Event Reminder</Button>
              <Button>Post Events</Button>
              <Button>Analytics</Button>
              <Button>Ice Breakers</Button>
              <Button>Others</Button>
            </div>

            <div>
              <a href="/Onboardingtwo">Continue</a>
            </div>
          </div>
        </div>
        <div className="img-size">
          <img src={img} alt="woman" className="img img-size-2"/>
        </div>
      </div>
    </>
  );
}

export default Onboardingtwo;
