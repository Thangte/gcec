import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import StudentMenu from "../../components/Layout/StudentMenu";
import { useAuth } from "../../context/auth";
import "../../styles/StudentData.css";

const StudentResult = () => {
  const [show, setShow] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    showGrade();
  }, []);

  const showGrade = () => {
    if (window.innerWidth <= 950) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  window.addEventListener("resize", showGrade);

  return (
    <Layout title={"Dashboard - Create Student"}>
      <div className="container-fluid m-10 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <StudentMenu />
          </div>
          <div className="col-md-9">
            <h1 style={{ marginTop: "20px" }}>
              {auth?.user?.engName}'s Exam Data
            </h1>
            {show ? (
              <>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h4 style={{ marginTop: "20px" }}>Exam Marks</h4>
                      <div>
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th>Months</th>
                              <th>Myanmar</th>
                              <th>English</th>
                              <th>Math</th>
                              <th>Geography</th>
                              <th>History</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">July</th>
                              <td>{auth?.user?.JMyan}</td>
                              <td>{auth?.user?.JEng}</td>
                              <td>{auth?.user?.JMath}</td>
                              <td>{auth?.user?.JGeo}</td>
                              <td>{auth?.user?.JHis}</td>
                              <td>{auth?.user?.JTotal}</td>
                            </tr>
                            <tr>
                              <th scope="row">October</th>
                              <td>{auth?.user?.OMyan}</td>
                              <td>{auth?.user?.OEng}</td>
                              <td>{auth?.user?.OMath}</td>
                              <td>{auth?.user?.OGeo}</td>
                              <td>{auth?.user?.OHis}</td>
                              <td>{auth?.user?.OTotal}</td>
                            </tr>
                            <tr>
                              <th scope="row">December</th>
                              <td>{auth?.user?.DMyan}</td>
                              <td>{auth?.user?.DEng}</td>
                              <td>{auth?.user?.DMath}</td>
                              <td>{auth?.user?.DGeo}</td>
                              <td>{auth?.user?.DHis}</td>
                              <td>{auth?.user?.DTotal}</td>
                            </tr>
                            <tr>
                              <th scope="row">February</th>
                              <td>{auth?.user?.FMyan}</td>
                              <td>{auth?.user?.FEng}</td>
                              <td>{auth?.user?.FMath}</td>
                              <td>{auth?.user?.FGeo}</td>
                              <td>{auth?.user?.FHis}</td>
                              <td>{auth?.user?.FTotal}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            {show ? (
              ""
            ) : (
              <div className="cardTable">
                <div className="row align-items-start cardContain">
                  {/* July Exam */}
                  <div className="myCard">
                    <div className="cardHeader">
                      <h4>July Exam</h4>
                    </div>
                    {/* Myanmar */}
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
                              Myanmar
                            </span>
                            <input
                              type="text"
                              value={auth?.user?.JMyan}
                              disabled
                              className="form-control"
                              placeholder="myanmar"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* English */}
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
                              English
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DEng}
                              disabled
                              className="form-control"
                              placeholder="english"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Math */}
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
                              Math
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DMath}
                              disabled
                              className="form-control"
                              placeholder="math"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Geo */}
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
                              Geography
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DGeo}
                              disabled
                              className="form-control"
                              placeholder="geography"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* History */}
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
                              History
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DHis}
                              disabled
                              className="form-control"
                              placeholder="history"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Science */}
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
                              Science
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DSci}
                              disabled
                              className="form-control"
                              placeholder="science"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
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
                              Total
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DTotal}
                              disabled
                              className="form-control"
                              placeholder="total"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* October Exam */}
                  <div className="myCard">
                    <div className="cardHeader">
                      <h4>October Exam</h4>
                    </div>
                    {/* Myanmar */}
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
                              Myanmar
                            </span>
                            <input
                              type="text"
                              value={auth?.user?.OMyan}
                              disabled
                              className="form-control"
                              placeholder="myanmar"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* English */}
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
                              English
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.OEng}
                              disabled
                              className="form-control"
                              placeholder="english"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Math */}
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
                              Math
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.OMath}
                              disabled
                              className="form-control"
                              placeholder="math"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Geo */}
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
                              Geography
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.OGeo}
                              disabled
                              className="form-control"
                              placeholder="geography"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* History */}
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
                              History
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.OHis}
                              disabled
                              className="form-control"
                              placeholder="history"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Science */}
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
                              Science
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.OSci}
                              disabled
                              className="form-control"
                              placeholder="science"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
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
                              Total
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.OTotal}
                              disabled
                              className="form-control"
                              placeholder="total"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* December Exam */}
                  <div className="myCard">
                    <div className="cardHeader">
                      <h4>December Exam</h4>
                    </div>
                    {/* Myanmar */}
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
                              Myanmar
                            </span>
                            <input
                              type="text"
                              value={auth?.user?.DMyan}
                              disabled
                              className="form-control"
                              placeholder="myanmar"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* English */}
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
                              English
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DEng}
                              disabled
                              className="form-control"
                              placeholder="english"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Math */}
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
                              Math
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DMath}
                              disabled
                              className="form-control"
                              placeholder="math"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Geo */}
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
                              Geography
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DGeo}
                              disabled
                              className="form-control"
                              placeholder="geography"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* History */}
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
                              History
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DHis}
                              disabled
                              className="form-control"
                              placeholder="history"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Science */}
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
                              Science
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DSci}
                              disabled
                              className="form-control"
                              placeholder="science"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
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
                              Total
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.DTotal}
                              disabled
                              className="form-control"
                              placeholder="total"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* February Exam */}
                  <div className="myCard">
                    <div className="cardHeader">
                      <h4>February Exam</h4>
                    </div>
                    {/* Myanmar */}
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
                              Myanmar
                            </span>
                            <input
                              type="text"
                              value={auth?.user?.FMyan}
                              disabled
                              className="form-control"
                              placeholder="myanmar"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* English */}
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
                              English
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.FEng}
                              disabled
                              className="form-control"
                              placeholder="english"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Math */}
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
                              Math
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.FMath}
                              disabled
                              className="form-control"
                              placeholder="math"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Geo */}
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
                              Geography
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.FGeo}
                              disabled
                              className="form-control"
                              placeholder="geography"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* History */}
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
                              History
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.FHis}
                              disabled
                              className="form-control"
                              placeholder="history"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Science */}
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
                              Science
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.FSci}
                              disabled
                              className="form-control"
                              placeholder="science"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
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
                              Total
                            </span>

                            <input
                              type="text"
                              value={auth?.user?.FTotal}
                              disabled
                              className="form-control"
                              placeholder="total"
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
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentResult;
