import "./Onboardingone.css";
import img from "../../assets/Onboardingone/image-onboarding-one.jpeg";
import Button from "./Button";
function Onboardingone() {
  return (
    <>
      <div className="onboarding-background text-start p-5">
        <div className="bg-white p-5">
          <p className="pb-3">Step 1 of 3: About you</p>
          <h5>Let's get to know you a bit!</h5>
          <p className="pb-3">
            Tell us what kind of events you want to host and leave the magic to
            us.
          </p>
          <p className="pb-3">
            <b>
              What kind of event do you want to host?
              <span style={{ color: "red" }}>*</span>
            </b>
          </p>
          <div className="button">
            <div className=" pb-5 button-grid container">
              <Button>Conference</Button>
              <Button>
                parties
              </Button>
              <Button>
                Webinars
              </Button>
              <Button>
                Stand ups
              </Button>
              <Button>
                Community
              </Button>
              <Button>
                Birthdays
              </Button>
              <Button>
                Others
              </Button>
            </div>
            <div>
              <a href="/Onboardingtwo">Continue</a>
            </div>
          </div>
        </div>
        <div className="img-size">
          <img src={img} alt="woman" className="img" />
        </div>
      </div>
    </>
  );
}

export default Onboardingone;
