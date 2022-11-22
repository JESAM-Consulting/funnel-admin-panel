import React from "react";
// import DataTable, { defaultThemes } from "react-data-table-component";
// import { ApiGet, ApiDelete } from "../../../helpers/API/ApiData";
// // import Slide from "@material-ui/core/Slide";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import moment from "moment";
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const Profile = () => {
     // const [emails, setEmails] = useState([]);
     // const [isLoaderVisible, setIsLoaderVisible] = useState(false);
     // const [show, setShow] = useState(false);
     // const [page, setPage] = useState(1);
     // // const [eId, setEmailId] = useState();
     // // const [count, setCount] = useState(0);
     // // const [countPerPage, setCountPerPage] = useState(10);

     // useEffect(() => {
     //     getNewsData();
     // }, []);

     // const getNewsData = async () => {
     //     setIsLoaderVisible(true);
     //     await ApiGet("newsletter/find-all")
     //         .then((res) => {
     //             setEmails(res.data.newsletter);
     //         })
     //         .catch((err) => {
     //             console.log("err", err);
     //         });

     //     setIsLoaderVisible(false);
     // };

     // // const handleMenu = () => {
     // //     setShow(true);
     // // };

     // const handleClose = () => {
     //     setShow(false);
     // };

     // const removeEmail = async () => {
     //     await ApiDelete(`newsletter/remove/${eId}`)
     //         .then((res) => {
     //             setShow(false);
     //             getNewsData();
     //             toast.success("Email Removed");
     //         })
     //         .catch((err) => {
     //             console.log("err");
     //         });
     // };

     // const columns = [
     //     {
     //         name: "SNo",
     //         cell: (row, index) => (page - 1) *  countPerPage + (index + 1),
     //         width: "65px",
     //     },
     //     {
     //         name: "Date",
     //         cell: (row) => {
     //             return <>{moment(row.createdAt).format("Do MMMM YYYY ")}</>;
     //         },
     //         selector: "projectName",
     //         sortable: true,
     //         width: "200px",
     //     },
     //     {
     //         name: "Emails",
     //         cell: (row) => {
     //             return <>{row.email ? row.email : "-"}</>;
     //         },
     //         selector: "projectName",
     //         sortable: true,
     //     },

     //     {
     //         name: "Actions",
     //         cell: (row) => {
     //             return (
     //                 <>
     //                     <div className=" d-flex justify-content-center">
     //                         <div
     //                             className="pl-3 cursor-pointer"
     //                             onClick={() => {
     //                                 handleMenu();
     //                                 setEmailId(row._id);
     //                             }}
     //                         >
     //                             <DeleteIcon />
     //                         </div>
     //                     </div>
     //                 </>
     //             );
     //         },
     //         selector: "website",
     //         sortable: true,
     //         width: "150px",
     //     },
     // ];
     // // * Table Style
     // const customStyles = {
     //     header: {
     //         style: {
     //             minHeight: "56px",
     //         },
     //     },
     //     headRow: {
     //         style: {
     //             borderTopStyle: "solid",
     //             borderTopWidth: "1px",
     //             borderTopColor: defaultThemes.default.divider.default,
     //         },
     //     },
     //     headCells: {
     //         style: {
     //             "&:not(:last-of-type)": {
     //                 borderRightStyle: "solid",
     //                 borderRightWidth: "1px",
     //                 borderRightColor: defaultThemes.default.divider.default,
     //             },
     //         },
     //     },
     //     cells: {
     //         style: {
     //             "&:not(:last-of-type)": {
     //                 borderRightStyle: "solid",
     //                 borderRightWidth: "1px",
     //                 borderRightColor: defaultThemes.default.divider.default,
     //             },
     //         },
     //     },
     // };



     return (
          <>
               <div className="card p-1">
                    <ToastContainer />
                    <div className="p-2 mb-2">
                         <div className="row mb-4 pr-3">
                              <div className="col d-flex justify-content-between">
                                   <h2 className="pl-3 pt-2">Profile Settings</h2>

                              </div>
                         </div>

                         <div class="container rounded bg-white mt-5 mb-5">
                              <div class="row">
                                   <div class="col-md-3 border-right">
                                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" height="150px" alt="profile " src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">admin@gmail.com</span><span> </span></div>
                                   </div>
                                   <div class="col-md-5 border-right">
                                        <div class="p-3 py-5">
                                             <div class="d-flex justify-content-between align-items-center mb-3">
                                                  {/* <h4 class="text-right"></h4> */}
                                             </div>
                                             <div class="row mt-2">
                                                  <div class="col-md-6"><label class="labels">Name</label>
                                                       <input type="text" class="form-control" placeholder="first name"  /></div>
                                                  <div class="col-md-6"><label class="labels">Surname</label>
                                                       <input type="text" class="form-control"  placeholder="surname" /></div>
                                             </div>
                                             <div class="row mt-3">
                                                  <div class="col-md-12"><label class="labels">Mobile Number</label>
                                                       <input type="text" class="form-control" placeholder="enter phone number"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">Address Line 1</label>
                                                       <input type="text" class="form-control" placeholder="enter address line 1"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">Address Line 2</label>
                                                       <input type="text" class="form-control" placeholder="enter address line 2"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">Postcode</label>
                                                       <input type="text" class="form-control" placeholder="enter address line 2"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">State</label>
                                                       <input type="text" class="form-control" placeholder="enter address line 2"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">Area</label>
                                                       <input type="text" class="form-control" placeholder="enter address line 2"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">Email ID</label>
                                                       <input type="text" class="form-control" placeholder="enter email id"  />
                                                       </div>
                                                  <div class="col-md-12"><label class="labels">Education</label>
                                                       <input type="text" class="form-control" placeholder="education"  />
                                                       </div>
                                             </div>
                                             <div class="row mt-3">
                                                  <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country"  /></div>
                                                  <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control"  placeholder="state" /></div>
                                             </div>

                                        </div>
                                   </div>
                                   <div class="col-md-4">
                                        <div class="p-3 py-5">
                                             <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                                             <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience"  /></div> <br />
                                             <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details"  /></div><br />
                                             <div class="mt-5 text-center"><button class="btn btn-primary btn-block profile-button" type="button">Save Profile</button></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* <DataTable
                        columns={columns}
                        data={emails}
                        customStyles={customStyles}
                        style={{
                            marginTop: "-3rem",
                        }}
                        progressPending={isLoaderVisible}
                        highlightOnHover
                        pagination
                        onChangePage={(page) => {
                            setPage(page);
                        }}
                        onChangeRowsPerPage={(rowPerPage) => {
                            setCountPerPage(rowPerPage);
                        }}
                    /> */}
                         {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-danger">Alert!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you want to remove this email from newsletter ??
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                cancel
                            </Button>
                            <Button variant="danger" onClick={() => removeEmail()}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                    </div>
               </div>
          </>
     );
};

export default Profile;
