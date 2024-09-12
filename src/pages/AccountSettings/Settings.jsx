import "./Settings.css";
import image from "../../assets/AccountSettings/Rectangle.png";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Input from "./Input";
import { MdDeveloperMode } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

function Settings() {
  return (
    <>
      {}

      <div className="container">
        <div className="acct">
          <h1>Account Settings</h1>
          <div className="acct-div-1">
            <div className="acct-div-1-child">
              <div className="child1">
                <div>Account</div>
                <MdOutlineAccountCircle />
              </div>
              <FaAngleUp />
            </div>
          </div>
          <div className="clear">
            <div className="love">
              <p>Contact Info</p>
              <p>Password</p>
              <p>Debit Card</p>
              <p>Email Preference</p>
              <p>Close Account</p>
              <p>Security and Privacy</p>
            </div>
          </div>

          <div className="dev">
            <div className="dev1">
              <div>Developer</div>
              <MdDeveloperMode />
            </div>
            <FaAngleUp />
          </div>
          <div className="last">
            <p>API Keys </p>
            <p>Webhooks</p>
          </div>
        </div>

        <div className="second  ">
          <h2 className="info">Account Information</h2>
          <div>
            <p>Profile Photo</p>
            <div>
              <img src={image} alt="" />
            </div>
            <div className="adjRmv">
              <div className="">
                <FaArrowRightArrowLeft />
                <div>Adjust</div>
              </div>
              <div>
                <MdOutlineDeleteOutline />
                <div>Remove</div>
              </div>
            </div>
          </div>
          <div className="input-div">
            <h3>Contact Information</h3>
            <form action="">
              <Input placeholder="Enter your full name" label="Full Name" />
              <Input placeholder="Enter your full name" label="Prefix" />
              <Input placeholder="Enter your full name" label="Phone number" />
              <Input placeholder="Enter address" label="Address" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
