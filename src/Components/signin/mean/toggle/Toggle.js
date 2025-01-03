import "./Toggle.css";
import { useHistory } from "react-router-dom";  // استخدم useHistory بدلاً من useNavigate

const Toggle = () => {
  const history = useHistory();  // تهيئة useHistory
  
  return(
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel" id="toggle-left">
        <h1>Hello Friend!</h1>
          <p>Register with your personal details to use all of the set features</p>
          <button className="hidden" id="register"onClick={() => history.push("/signup")} >Go To Sign Up</button>
        
        </div>
      </div>
    </div>
  );
}

export default Toggle;
