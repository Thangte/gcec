import React from "react";
import Layout from "../../components/Layout/Layout";
import StudentMenu from "../../components/Layout/StudentMenu";
import { useAuth } from "../../context/auth";

const StudentDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard"}>
      <div className="container-flui m-10 p-3">
        <div className="row">
          <div className="col-md-3">
            <StudentMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h4> studentId : {auth?.user?.studentId}</h4>
              <h4> engName: {auth?.user?.engName}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
