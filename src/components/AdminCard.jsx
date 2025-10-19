import React from "react";
import { useNavigate } from "react-router-dom";

const AdminCard = ({
  icon,
  iconColor,
  title,
  description,
  buttonColor,
  linkTo,
}) => {
  const navigate = useNavigate();

  return (
    <div className="col s12 m6 l4">
      <div className="card center-align">
        <div className="card-content">
          <i className={`material-icons large ${iconColor}`}>{icon}</i>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button
            className={`btn ${buttonColor}`}
            onClick={() => navigate(linkTo)}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
