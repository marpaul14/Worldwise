import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <anv>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </anv>
  );
}

export default PageNav;
