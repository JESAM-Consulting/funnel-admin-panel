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

        <li
          className={`menu-item ${getMenuItemActive("/pink", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/pink">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Pink</span>
          </NavLink>
        </li>


        <li
          className={`menu-item ${getMenuItemActive("/fe-finance", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/fe-finance">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Fe-finance</span>
          </NavLink>
        </li>


        <li
          className={`menu-item ${getMenuItemActive("/fe-energy", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/fe-energy">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Fe-energy</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/kontakt", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/kontakt">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Siluna </span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/finanzenmitercan", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/finanzenmitercan">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">finanzenmitercan </span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/lbm", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/lbm">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">LBM </span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/mutualz", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/mutualz">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Mutualz </span>
          </NavLink>
        </li>


        <li
          className={`menu-item ${getMenuItemActive("/houselovelive", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/houselovelive">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Houselovelive</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/deniashome", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/deniashome">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Deniashome</span>
          </NavLink>
        </li>


        <li
          className={`menu-item ${getMenuItemActive("/zuhauseselig", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/zuhauseselig">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Zuhauseselig</span>
          </NavLink>
        </li>


        <li
          className={`menu-item ${getMenuItemActive("/energyfinance", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/energyfinance">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Energy and Finance</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/Jagras_home", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/Jagras_home">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">JagrasHome</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/envoltec", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/envoltec">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Envoltec</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/stahlbetonhaus", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/stahlbetonhaus">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Stahlbetonhaus</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/anniinteriorlove", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/anniinteriorlove">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Anniinteriorlove</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/energie-konzept", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/energie-konzept">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">EnergieKonzept</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/derbauleiter", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/derbauleiter">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">DerBauleiter</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/josefashome", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/josefashome">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Josefashome</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/willanr", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/willanr">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">WillaNr</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/vorteilsrechner-green", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/vorteilsrechner-green">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">VorteilsrechnerGreen</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/home-living-interior", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/home-living-interior">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Home living interior</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/interiorlacasa", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/interiorlacasa">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Interiorlacasa</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/sarahklefisch", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/sarahklefisch">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Sarahklefisch</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/jesamGroupSolutions", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/jesamGroupSolutions">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">JesamGroupSolutions</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/die-stadtvilla", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/die-stadtvilla">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Die Stadtvilla</span>
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
