/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";
 export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const role = localStorage.getItem("role")
   const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"
      } menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          <li
            className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/dashboard">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/dashboard.svg" />
              </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>

          {/* <li
            className={`menu-item ${getMenuItemActive("/Users", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/Users">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Users</span>
            </NavLink>
          </li> */}


          <li
            className={`menu-item ${getMenuItemActive("/bcrechner", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/bcrechner">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">bc-rechner</span>
            </NavLink>
          </li>
{/* 
          <li
            className={`menu-item ${getMenuItemActive("/subscription", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/subscription">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/banner.svg" />
              </span>
              <span className="menu-text">Subscriptions</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/category", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/category">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/description.svg" />
              </span>
              <span className="menu-text">Categories</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/mood", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/mood">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/description.svg" />
              </span>
              <span className="menu-text">Moods</span>
            </NavLink>
          </li>
         
          <li
            className={`menu-item ${getMenuItemActive("/tweetgenerat", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/tweetgenerat">
              <span className="svg-icon menu-icon">
                <img alt=""   src="media/allIconsForTable/banner.svg" />
              </span>
              <span className="menu-text">Generat Tweet</span>
            </NavLink>
          </li> */}


          {/* <li
            className={`menu-item ${getMenuItemActive("/newsletter", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/newsletter">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/feedback.svg" />
              </span>
              <span className="menu-text">New Page</span>
            </NavLink>
          </li> */}

        </ul>
     
    </>
  );
}
