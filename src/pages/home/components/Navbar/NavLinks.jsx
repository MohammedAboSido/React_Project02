import React from "react";
import { Links } from "./style";
// import { Link } from "./style";

export default function NavLinks({ navLink, navText, color }) {
  return (
    <Links style={{ color: color }} to={navLink}>
      {navText}
    </Links>
  );
}
