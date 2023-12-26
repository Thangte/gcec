import React from "react";
import { NavLink } from "react-router-dom";

const StudentMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Student Dashboard</h4>
          <NavLink
            to="/dashboard/student/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/student/result"
            className="list-group-item list-group-item-action"
          >
            Exam Result
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StudentMenu;
