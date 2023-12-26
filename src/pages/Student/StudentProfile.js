import React from "react";
import Layout from "../../components/Layout/Layout";
import StudentMenu from "../../components/Layout/StudentMenu";
import { useAuth } from "../../context/auth";
import "./Teacher.css";

const StudentProfile = () => {
  const [auth] = useAuth();
  console.log(auth);

  return (
    <Layout title={"Dashboard - StudentProfile"}>
      <div className="container-fluid m-10 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <StudentMenu />
          </div>
          <div className="col-md-9 createStudent">
            <h1>Profile</h1>

            {/* StudentId */}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      studentId
                    </span>
                    <input
                      type="number"
                      value={auth?.user?.studentId}
                      disabled
                      className="form-control"
                      placeholder="StudentId"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* engName */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      engName
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.engName}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* myanName */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      myanName
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.myanName}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* fatherName */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      father
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.fatherName}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* fatherNRC */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      fatherNRC
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.fatherNRC}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* motherName */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      motherName
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.motherName}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* motherNRC */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      motherNRC
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.motherNRC}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* contact */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      contact
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.contact}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* address */}
            <div
              className="container text-center"
              style={{ marginTop: "20px" }}
            >
              <div className="row align-items-start">
                <div className="col">
                  <div className="input-group flex-nowrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      style={{
                        width: "100px",
                        backgroundColor: "#70211b",
                        color: "white",
                      }}
                    >
                      address
                    </span>
                    <input
                      type="text"
                      value={auth?.user?.address}
                      disabled
                      className="form-control"
                      placeholder="engName"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Teachers */}
            <div className="teacherContainer">
              <div className="teacherImage">
                <img src={auth?.user?.teacher?.image?.url} alt="" />
              </div>

              <div className="teacherData">
                {/* Name */}
                <div
                  className="container text-center"
                  style={{ marginTop: "20px" }}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <div className="input-group flex-nowrap">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            width: "100px",
                            backgroundColor: "#70211b",
                            color: "white",
                          }}
                        >
                          name
                        </span>
                        <input
                          type="text"
                          value={auth?.user?.teacher?.name}
                          disabled
                          className="form-control"
                          placeholder="engName"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="container text-center"
                  style={{ marginTop: "20px" }}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <div className="input-group flex-nowrap">
                        <span
                          className="input-group-text"
                          id="addon-wrapping"
                          style={{
                            width: "100px",
                            backgroundColor: "#70211b",
                            color: "white",
                          }}
                        >
                          phone
                        </span>
                        <input
                          type="text"
                          value={auth?.user?.teacher?.phone}
                          disabled
                          className="form-control"
                          placeholder="phone"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;
