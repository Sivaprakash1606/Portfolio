import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ link, className, onClick }) => {
  return (
    <li className={className}>
      <Link to={link} smooth duration={300} onClick={onClick}>
        {link}
      </Link>
    </li>
  );
};

export default NavLinks;