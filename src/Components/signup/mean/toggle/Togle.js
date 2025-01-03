import "./Togle.css";
import { useHistory } from 'react-router-dom'; 
const Toggle = () => {
  const history = useHistory();  // تهيئة useHistory بدلاً من useNavigate

  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel" id="toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of set features</p>
          <button
            className="hidden"
            id="login"
            onClick={() => history.push("/signin")}  // استخدام history.push بدلاً من navigate
          >
            Go To Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
