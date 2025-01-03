import "./Form.css"
import { useHistory } from "react-router-dom"; // استبدل useNavigate بـ useHistory

const Form = () => {
  const history = useHistory();  // تهيئة useHistory بدلاً من useNavigate
  
  return (
    <div className="form-container sign-up" id="sign-up">
      <img src="logoo.png" alt="Logo" />
      <form action="">
        <h1>Sign In!</h1>
        <div className="social_icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="hidden" id="register"onClick={() => history.push("/")} > Sign in</button>
    
      </form>
    </div>
  );
}

export default Form;
