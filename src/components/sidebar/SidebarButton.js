import React from "react";
import { Link } from "react-router-dom";
import "./SidebarButton.css";

export default function SidebarButton(props) {
  console.log(props);
  return <Link to={props.path}>s</Link>;
}
