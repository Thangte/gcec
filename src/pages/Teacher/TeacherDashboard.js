import React from "react";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout/Layout";
import TeacherMenu from "../../components/Layout/TeacherMenu";

const TeacherDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="hero-adminDashboard">
        <div className="container-fluid m-10 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <TeacherMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h4> Admin Name : {auth?.user?.name}</h4>
                <h4> Admin Contact : {auth?.user?.phone}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
