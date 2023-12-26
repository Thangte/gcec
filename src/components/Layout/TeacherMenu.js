import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const TeacherMenu = () => {
  const [editBar, setEditBar] = useState(false);

  const teacherHandleBar = () => {
    setEditBar(true);
  };

  const handleShowBar = () => {
    setEditBar(false);
  };

  return (
    <>
      <div className="text-center" style={{ marginBottom: "30px" }}>
        <div className="list-group dashboard-menu">
          {editBar ? (
            <>
              <h4>Teacher Panel</h4>
              <FaChevronDown
                onClick={handleShowBar}
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </>
          ) : (
            <>
              <h4 onClick={teacherHandleBar}>Teacher Panel</h4>

              <NavLink
                to="/dashboard/teacher/profile"
                className="list-group-item list-group-item-action"
              >
                Profile
              </NavLink>

              <NavLink
                to="/dashboard/admin/getAll-teachers"
                className="list-group-item list-group-item-action"
              >
                Add Task
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherMenu;
