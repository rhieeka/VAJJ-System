import React from "react";
import { faDiagramProject, faFileSignature, faGears, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/dashboard">
            <FontAwesomeIcon className="icon" icon={faFileSignature} />
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/client-list">
            <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
            Client List
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/project-list">
          <FontAwesomeIcon className="icon" icon={faDiagramProject} />
            Project List
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user">
          <FontAwesomeIcon className="icon" icon={faUser} />User
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon className="icon" icon={faGears} />Maintenance
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item h5" href="/position">
                Position
              </a>
            </li>
            <li>
              <a className="dropdown-item h5" href="/project-division">
                Project Division
              </a>
            </li>
            <li>
              <a className="dropdown-item h5" href="/project-team">
                Project Team
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
