/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import Auth from "../../../../../helpers/Auth";
// import { getUserInfo } from "../../../../../utils/user.util";
// import { Link } from "react-router-dom";
export function UserProfileDropdown() {
    //  let userInfo = getUserInfo();
     const role = localStorage.getItem("role")

    
     const Logout = async () => {
          await Auth.deauthenticateLocalUser();
          window.location.reload();
     };
     // const profilePage = (e) => {
     //   e.preventDefault();
     //   history.push("/userprofile");
     // };

    //  console.log("userinfoo", userInfo);

     return (
          <Dropdown drop="down" alignRight>
               <Dropdown.Toggle
                    as={DropdownTopbarItemToggler}
                    id="dropdown-toggle-user-profile"
               >
                    <div
                         className={
                              "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                         }
                    >
                         <span className="text-muted font-weight-bold font-size-base d-md-inline mr-1">
                              Hi,
                         </span>{" "}
                         {role === "admin" ? (
                              <>
                                   <span className="text-dark-50 font-weight-bolder font-size-base d-md-inline mr-3">
                                        {role?.toUpperCase() + ". "}
                                   </span>
                                   <span className="symbol symbol-35 symbol-light-success">
                                        <span className="symbol-label font-size-h5 font-weight-bold">
                                             {role[0]?.toUpperCase() + ". "}
                                        </span>
                                   </span>
                              </>
                         ) : (
                              <>
                                   <span className="text-dark-50 font-weight-bolder font-size-base d-md-inline mr-3">
                                        {
                                             role?.toUpperCase() + " "
                                             // +
                                             // role?.roleName[0]?.toUpperCase()
                                        }
                                   </span>
                                   <span className="symbol symbol-35 symbol-light-success">
                                        <span className="symbol-label font-size-h5 font-weight-bold">
                                             {role?.toUpperCase() + ". "}
                                        </span>
                                   </span>{" "}
                              </>
                         )}
                    </div>
               </Dropdown.Toggle>
               <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-">
                    {/* <Link to="/profile">
                         <div className="navi navi-spacer-x-0 ">
                              <div className="navi-footer px-8 py-1">
                                   <div
                                        className="btn btn-light-primary font-weight-bold"
                                        style={{ minWidth: "120px", maxWidth: "120px" }}
                                   >
                                        Profile
                                   </div>
                              </div>
                         </div>
                    </Link> */}

                    <div className="navi navi-spacer-x-0 ">
                         <div className="navi-footer px-8 py-1">
                              <div
                                   onClick={Logout}
                                   className="btn btn-light-primary font-weight-bold"
                                //    style={{ minWidth: "120px", maxWidth: "120px" }}
                              >
                                   Sign Out
                              </div>
                         </div>
                    </div>
               </Dropdown.Menu>
          </Dropdown>
     );
}
