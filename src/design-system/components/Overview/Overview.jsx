import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Overview({ icon, title, children }) {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2>{title}</h2>
      <p>{children}</p>
    </>
  );
}
