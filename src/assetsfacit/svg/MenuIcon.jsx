import React from "react";

const MenuIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="svg-icon--material svg-icon btn-icon"
    data-name="Material--Menu"
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export default MenuIcon;
