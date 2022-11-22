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
          {/* <li
            className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/dashboard">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/dashboard.svg" />
              </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li> */}

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

          <li
            className={`menu-item ${getMenuItemActive("/keuters", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/keuters">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">keuters</span>
            </NavLink>
          </li>


          <li
            className={`menu-item ${getMenuItemActive("/pro", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/pro">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Pro</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/sayahi-scholz", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/sayahi-scholz">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Sayahi-scholz</span>
            </NavLink>
          </li>
          
          <li
            className={`menu-item ${getMenuItemActive("/selfmade-werkstatt", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/selfmade-werkstatt">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Selfmade-werkstatt</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/finance", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/finance">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Finance</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/immo-tommy", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/immo-tommy">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">immo-tommy</span>
            </NavLink>
          </li>


          
          <li
            className={`menu-item ${getMenuItemActive("/solar-pvcheck", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/solar-pvcheck">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Solar-Pvcheck</span>
            </NavLink>
          </li>


          <li
            className={`menu-item ${getMenuItemActive("/hv", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/hv">
              <span className="svg-icon menu-icon">
                <img alt="" src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Hv</span>
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
