import React from "react";
import { Link } from "./style";

export default function NavLinks({navLink,navText}) {
  return(
    <Link href={navLink}>{navText}</Link>
  );
}
