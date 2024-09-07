import "./Onboardingone.css";

function Button({ children }) {
  return (
    <div className="">
      <button type="button" className="btn">
        {children}
      </button>
    </div>
  );
}

export default Button;
