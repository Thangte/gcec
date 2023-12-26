import React from "react";
import Layout from "../../components/Layout/Layout";
import TeacherMenu from "../../components/Layout/TeacherMenu";
import { useAuth } from "../../context/auth";
import "../../styles/TeacherData.css";

const TeacherProfile = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - TeacherProfile"}>
      <div className="container-fluid m-10 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <TeacherMenu />
          </div>
          <div className="col-md-9 createStudent">
            <h1>{auth?.user?.name}'s Data</h1>

            <div className="ImageData">
              {/* Images */}
              <div className="TeacherImage">
                <div className="ImageBorder">
                  <img src={auth?.user?.image?.url} alt="" />
                </div>
              </div>

              {/* Data */}
              <div className="DataColumn">
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
                          value={auth?.user?.name}
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

                {/* Grade */}
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
                          grade
                        </span>
                        <input
                          type="text"
                          value={auth?.user?.grade?.name}
                          disabled
                          className="form-control"
                          placeholder="grade"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gender */}
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
                          gender
                        </span>
                        <input
                          type="text"
                          value={auth?.user?.gender?.name}
                          disabled
                          className="form-control"
                          placeholder="grade"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Religion */}
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
                          religion
                        </span>
                        <input
                          type="text"
                          value={auth?.user?.religion?.name}
                          disabled
                          className="form-control"
                          placeholder="grade"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* National */}
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
                          national
                        </span>
                        <input
                          type="text"
                          value={auth?.user?.national?.name}
                          disabled
                          className="form-control"
                          placeholder="grade"
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
                          value={auth?.user?.phone}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherProfile;
