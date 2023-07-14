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
          className={`menu-item ${getMenuItemActive("/encrease", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/encrease">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Encrease</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/ckfunnel", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/ckfunnel">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Ck Funnel</span>
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

        <li
          className={`menu-item ${getMenuItemActive("/familie-nachhaltigkeit", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/familie-nachhaltigkeit">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Familie Nachhaltigkeit</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/familienglueck-trifft", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/familienglueck-trifft">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Familienglueck Trifft</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/gina-kaas", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/gina-kaas">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Gina Kaas</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/leys-home", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/leys-home">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Leys Home</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/my-nordic-home-am-see", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/my-nordic-home-am-see">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">My Nordic Home Am See</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/Oguzaksy", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/Oguzaksy">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Oguzaksy</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/eigenheimliebe", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/eigenheimliebe">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Eigenheimliebe</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/fly-kati", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/fly-kati">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">FlyKati</span>
          </NavLink>
        </li>


        <li
          className={`menu-item ${getMenuItemActive("/nordiccalm", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/nordiccalm">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Nordiccalm</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/neues-nest", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/neues-nest">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">NeuesNest</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/geliebtes-hus", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/geliebtes-hus">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Geliebtes Hus</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/reinblick", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/reinblick">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Reinblick32</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/its-vnssa", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/its-vnssa">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">its-vnssa</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/christelle", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/christelle">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Christelle</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/esrafet", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/esrafet">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Esrafet</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/derya-music", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/derya-music">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Derya Music</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/nordic-chic", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/nordic-chic">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Nordic Chic</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/nina-lessia", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/nina-lessia">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Nina Lessia</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/maryshionista", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/maryshionista">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Maryshionista</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/hilalekr", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/hilalekr">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Hilalekr</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/aysenurr", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/aysenurr">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Aysenurr</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/britta-brand", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/britta-brand">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Britta Brand</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/modernesholzhaus", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/modernesholzhaus">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Modernesholzhaus</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/laura-niemeyer", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/laura-niemeyer">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Laura Niemeyer</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/sarah-fbr", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/sarah-fbr">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Sarah Fbr</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/wohnsinnigewelt", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/wohnsinnigewelt">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Wohnsinnigewelt</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/nativita", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/nativita">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Nativita</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/house-family-life", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/house-family-life">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">House.family.life</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/info-solar-pvcheck", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/info-solar-pvcheck">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">InfoSolarPvcheck</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/premium-solar", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/premium-solar">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Premium Solar</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/bei-uns-doma", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/bei-uns-doma">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Bei Uns doma</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/valentinakarina", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/valentinakarina">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">valentinakarina</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/die-Marinaaa", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/die-Marinaaa">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Die Marinaaa</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/jea-reveur", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/jea-reveur">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Jea Reveur</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/vivien-rich", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/vivien-rich">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">vivien rich</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/carrykinkatty", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/carrykinkatty">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Carrykinkatty</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/aykanalessia", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/aykanalessia">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Aykanalessia</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/jessy-neumann", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/jessy-neumann">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Jessy Neumann</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/itsnadinesko", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/itsnadinesko">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Itsnadinesko</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/family-vanbuul-holz", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/family-vanbuul-holz">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Family Vanbuul Holz</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/wohn-kultur", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/wohn-kultur">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Wohn Kultur</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/mrslavieestbelle", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/mrslavieestbelle">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Mrslavieestbelle</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/vivilicous", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/vivilicous">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Vivilicous Official</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/itsonlylove", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/itsonlylove">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Itsonlylove</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/milo-my-hero", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/milo-my-hero">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Milo My Hero</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/Liisawood", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/Liisawood">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Liisawood</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/ro-mini", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/ro-mini">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">ro.mini</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/kathiwagener", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/kathiwagener">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Kathiwagener</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive("/allabout-katrin", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/allabout-katrin">
            <span className="svg-icon menu-icon">
              <img alt="" src="media/allIconsForTable/user.svg" />
            </span>
            <span className="menu-text">Allabout_katrin</span>
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
