import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../Auth/Login.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [chooseType, setChooseType] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [phone, setPhone] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleTeacher = () => {
    setChooseType(true);
  };

  const handleStudent = () => {
    setChooseType(false);
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://gcec-server.onrender.com/api/v1/teacher/login",
        {
          phone,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleSubmitStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://gcec-server.onrender.com/api/v1/student/login",
        {
          studentId,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login">
      <div className="hero-container ">
        {chooseType ? (
          <>
            <form onSubmit={handleSubmit}>
              {chooseType ? (
                <h4 className="title">Login Teacher</h4>
              ) : (
                <h4 className="title">Login Student</h4>
              )}

              <div className="mb-3">
                <input
                  type="number"
                  autoFocus
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Name "
                  required
                />
              </div>

              <div className="login">
                <button type="submit" className="btn btn-primary">
                  LOGIN
                </button>
              </div>

              <div className="chooseAuth">
                {chooseType ? (
                  <p onClick={handleStudent}>I'm a student?</p>
                ) : (
                  <p onClick={handleTeacher}>I'm a teacher?</p>
                )}
              </div>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmitStudent}>
              {chooseType ? (
                <h4 className="title">Login Teacher</h4>
              ) : (
                <h4 className="title">Login Student</h4>
              )}

              <div className="mb-3">
                <input
                  type="number"
                  autoFocus
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Name "
                  required
                />
              </div>

              <div className="login">
                <button type="submit" className="btn btn-primary">
                  LOGIN
                </button>
              </div>

              <div className="chooseAuth">
                {chooseType ? (
                  <p onClick={handleStudent}>I'm a student?</p>
                ) : (
                  <p onClick={handleTeacher}>I'm a teacher?</p>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Login;
