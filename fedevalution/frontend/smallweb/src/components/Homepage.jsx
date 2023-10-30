

import { Outlet, Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

//export default {Homepage};