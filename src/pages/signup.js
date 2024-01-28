import React, {useState} from 'react';
import './signup.css';
import Layout from "./../components/Layout/Layout";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


function SignnUp() {

    // State for handling password visibility
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    
    // Navigation hook for redirecting after signup
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

  
    // =============================================================================================================
  
    // State variables for user information
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const result = await axios.post("http://localhost:7000/api/users/register", {
          name,
          email,
          phone,
          gender,
          district,
          state,
          password,
          password2,
        });
    
        console.log(result);
    
        if (result.data && result.data.error) {
          // Handle specific error cases
          if (result.data.error === "Email Already Exists") {
            alert("E-mail already registered! Please Login to proceed.");
            navigate('/signin');
          } else {
            alert(`Registration failed: ${result.data.error}`);
          }
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate('/signin');
        }
      } catch (error) {
        console.error(error);
        if (error.response && error.response.data) {
          // Display the specific error from the server
          alert(`Registration failed: ${error.response.data.Error || error.response.data.error}`);
        } else {
          alert("Registration failed. Please try again.");
        }
      }
    };
    


    return(
    <Layout>
      <div className="form">
          <div className="form-body">
            
            <h2 className="myHeading">
                A Guide to Ideal Schemes
              </h2>

                      
              <form onSubmit={handleSubmit}>
                
            
              <div className="username">
                  <label className="form__label" htmlFor="username">Enter Full Name </label>
                  <input
                   className="form__input userename-input" 
                   type="text" 
                   id="name" 
                   placeholder="Enter Your Name"
                   onChange={(event) => setName(event.target.value)}
                   value={name}
                   required
                   />
              </div>

          
              <div className="email">
                  <label className="form__label" for="email">Email or Phone </label>
                  <input
                   className="form__input email-input" 
                   type="text" 
                   id="email" 
                   placeholder="Enter Your email or phone here"
                   onChange={(event) => setEmail(event.target.value)}
                   value={email}
                   required
                   />
              </div>

             
              <div className="phone">
                  <label className="form__label" for="phone">Mobile Number </label>
                  <input
                   className="form__input phone-input" 
                   type="number" 
                   id="phone" 
                   placeholder="Enter Your Mobile Number"
                   onChange={(event) => setPhone(event.target.value)}
                   value={phone}
                   required
                   />
              </div>


           
              <div className="gender">
              <label className="form__label" for="gender">Gender</label>
              <select
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  name="gender"
                  id="gender"
                  style={{ marginLeft: "96px",  width: "210px", height: "25px" }}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
              </select>
              </div>


          
              <div className="state">
                <label htmlFor="form__label" for="state">State</label>
                <select
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  name="state"
                  id="state"
                  style={{ marginLeft: "113px",  width: "210px", height: "25px" }}
                  required
                >
                  <option value="">Select State</option>
                  <option value="Bihar">Bihar</option>
                  </select>
              </div>


              <div className="district">
                  <label className="form__label" for="district">District </label>
                  <input
                   className="form__input district-input" 
                   type="text" 
                   id="district" 
                   placeholder="Enter Your District"
                   onChange={(event) => setDistrict(event.target.value)}
                   value={district}
                   required
                   />
              </div>

          
              <div className="password">
              <label className="form__label" for="password">Password</label>
                <div className="password-input">
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type={!passShow ? "password" : "text"}
                    name="password"
                    // className="form__input password-input"
                    id="password1"
                    placeholder="Enter Your password"
                    required
                  />
                  <div
                    className="showpass1"
                    style={{ marginLeft: "140px",marginTop: "-18px" }}
                    onClick={() => setPassShow(!passShow)}
                  >
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>

           
              <div className="password2" style={{ marginTop: "1%"}}>
              <label className="password1" for="password">Confirm Password</label>
                <div className="two">
                  <input
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
                    type={!cpassShow ? "password" : "text"}
                    name="cpassword"
                    id="password"
                    placeholder="Confirm password"
                    required
                  />
                  <div
                    className="showpass1" 
                    style={{ marginLeft: "140px",marginTop: "-18px" }}
                    onClick={() => setCPassShow(!cpassShow)}
                  >
                    {!cpassShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>


      
               <Button
                type="submit"
                fullWidth
                // variant="contained"
                
                // onClick={handleSubmit}
                className="btn btn-primary w-100"
                style={{
                  marginLeft: "-19px",
                  display: 'flex',
                  marginTop: "40px",
                  padding: "3%",
                  fontWeight: "bold"
                  // height: "55%",
                  // width: "50%"
                }}
              >
                Submit
              </Button>

              <Link to="/signin"
              href="#" 
              variant="body2"
              >
                {"Already have an account? Sign In"}
              </Link>
          
          </form>
      
            <div className="content">
            <div
              style={{
                marginTop: "-70px", marginLeft: "690px", marginRight: "-500px"
              }}
            >
              <img
                style={{ marginTop: "1px", marginLeft: "37px" }}
                src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
                alt=""
              />
              <h5 style={{
                fontSize: "19px",
                marginLeft: "25px",
                fontWeight: "bold",
                marginTop: "7px"
                 }}>
                  On Register You can
                </h5>
                 
              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "2px" }}
                />
                <p
                  style={{
                    color: "#000000",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "1%",
                  }}
                >
                  Discover Your Ideal Government Scheme:
                  Tailor Your Profile and Uncover the Best Opportunities Suited for You

                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "15px" }}
                />
                <p
                  style={{
                    color: "#000000",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "7%",
                  }}
                >
                  Unlock Personalized Government Scheme Recommendations:
                   Get Relevant Opportunities Delivered Directly to You
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "1px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "15px" }}
                />
                <p
                  style={{
                    color: "#000000",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "7%",
                  }}
                >
                 Explore Employment Opportunities and Propel 
                 Your Career Growth: Leverage Government Schemes for Advancement
                </p>
              </div>
              </div>
            </div> 
      </div>
      </div>   
    </Layout> 
    )       
}
export default SignnUp;
