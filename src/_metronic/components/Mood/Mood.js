import React, { useEffect, useState } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { ApiDelete, ApiGet, ApiPost, ApiPut } from "../../../helpers/API/ApiData";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostAddIcon from '@material-ui/icons/PostAdd';



const AppMood = () => {
     const [moods, setMoods] = useState([]);

     const initialValue = { moodName: "", description: "", sequenceNo: "" }
     const [addMoods, setAddMood] = useState(initialValue);
     const [isLoaderVisible, setIsLoaderVisible] = useState(false);
     const [show, setShow] = useState(false);
     const [openModel, setOpenModel] = useState(false);
     const [page, setPage] = useState(1);
     const [eId, setEmailId] = useState();
     const [countPerPage, setCountPerPage] = useState(10);
     const [errors, setErrors] = useState({});
     const [check, setCheck] = useState(false);
     const [filteredMood, setFilteredMood] = useState([]);
     const columns = [
          {
               name: "SNo",
               cell: (row, index) => (page - 1) * countPerPage + (index + 1),
               width: "65px",
          },
          {
               name: "moodName",
               selector: "moodName",
               sortable: true,
               width: "300px",
          },
          {
               name: "Description",
               selector: "description",
               sortable: true,
          },

          {
               name: "Actions",
               cell: (row) => {
                    return (
                         <>
                              <div className=" d-flex justify-content-center">
                                   <div
                                        className="pl-3 cursor-pointer"
                                        onClick={() => {
                                             handleMenu();
                                             setEmailId(row._id);
                                        }}
                                   >
                                        <DeleteIcon />
                                   </div>
                                   <div
                                        className="pl-3 cursor-pointer"
                                        onClick={() => {
                                             handleodelOpen();
                                             setCheck(true);
                                             setAddMood(row)
                                        }}
                                   >
                                        <EditIcon />
                                   </div>
                              </div>
                         </>
                    );
               },
               selector: "website",
               sortable: true,
               width: "150px",
          },
     ];
     // * Table Style
     const customStyles = {
          header: {
               style: {
                    minHeight: "56px",
               },
          },
          headRow: {
               style: {
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderTopColor: defaultThemes.default.divider.default,
               },
          },
          headCells: {
               style: {
                    "&:not(:last-of-type)": {
                         borderRightStyle: "solid",
                         borderRightWidth: "1px",
                         borderRightColor: defaultThemes.default.divider.default,
                    },
               },
          },
          cells: {
               style: {
                    "&:not(:last-of-type)": {
                         borderRightStyle: "solid",
                         borderRightWidth: "1px",
                         borderRightColor: defaultThemes.default.divider.default,
                    },
               },
          },
     };

     useEffect(() => {
          getNewsData();
     }, []);

     const getNewsData = async () => {
          setIsLoaderVisible(true);
          await ApiGet("mood/find?page=1&limit=100")
               .then((res) => {
                    setMoods(res.data.data);
                    setFilteredMood(res.data.data)
                    //console.log(res.data);
               })
               .catch((err) => {
                    console.log("err", err);
               });

          setIsLoaderVisible(false);
     };


     const handleMenu = () => {
          setShow(true);
     };
     const handleClose = () => {
          setShow(false);
          setErrors({});
     };
     const handleodelOpen = () => {
          setOpenModel(true);
     };
     const handleCloseedit = () => {
          setOpenModel(false);
          setCheck(false);
          setErrors({});
          setAddMood(initialValue);
     };

     const removeMood = async () => {
          await ApiDelete(`mood/delete?id=${eId}`)
               .then((res) => {
                    setShow(false);
                    getNewsData();
                    toast.success("Mood removed successfully ");
               })
               .catch((err) => {
                    console.log("err");
               });
     };

     const onInputChang = e => {
          const { name, value } = e.target;
          setAddMood({ ...addMoods, [name]: value })
          setErrors({ ...errors, [name]: "" });


     }

     const onsubmit = async (e) => {
          if (validationData()) {
               e.preventDefault()
               let data = {
                    moodName: addMoods?.moodName.trim(),
                    description: addMoods?.description.trim(),
                    sequenceNo: addMoods?.sequenceNo.trim(),
                    
               }
               await ApiPost('mood/create', data).then((res) => {
                    // console.log(res)
                    handleCloseedit(false);
                    setCheck(false);
                    setErrors({});
                    setAddMood(initialValue);
                    getNewsData();
                    toast.success("Mood Added successfully");
               }).catch((err) => {
                    console.log(err);
                    toast.error(err.response.data.message)
               })
          }
     }
    
     const onsubmitedit = async (e) => {
          if (validationData()) {
               await ApiPut(`mood/update?id=${addMoods._id}`, addMoods).then((res) => {
                    // console.log(res);
                    handleCloseedit(false);
                    setCheck(false);
                    setErrors({});
                    setAddMood(initialValue);
                    getNewsData();
                    toast.success("Mood Edited successfully");
               }).catch((err) => {
                    console.log(err);
               })
          }
     }

     const validationData = () => {
          let formIsValid = true;
          let errors = {};
          if (addMoods && !addMoods.moodName.trim()) {
               formIsValid = false;
               errors["moodName"] = " * Mood name is required"
          }
          if (addMoods && !addMoods.description.trim()) {
               formIsValid = false;
               errors["description"] = " * Description is required"
          }
          if (addMoods && !addMoods.sequenceNo) {
               formIsValid = false;
               errors["sequenceNo"] = " * Sequence No is required"
          }
          setErrors(errors);
          return formIsValid;
     }

     const onAddData = (e) => {
          check ? onsubmitedit(e) : onsubmit(e)
     }
     const handleSearch = (e) => {
          var value = e.target.value.toLowerCase();
          let filterData = moods.filter(
               (item) =>
                    item?.moodName.toLowerCase().includes(value) ||
                    item?.description.toLowerCase().includes(value)
          )
          setFilteredMood(filterData)
     };

     return (
          <>
               <div className="card p-1">
                    <ToastContainer />
                    <div className="p-2 mb-2">
                         <div className="row mb-4 pr-3">
                              <div className="col d-flex justify-content-between">
                                   <h2 className="pl-3 pt-2">Mood List</h2>
                              </div>
                              <div className="col">
                                   <div>
                                        <input
                                             type="text"
                                             className={`form-control form-control-lg form-control-solid `}
                                             name="title"
                                             placeholder="Search Mood"
                                             onChange={(e) => handleSearch(e)}
                                        />
                                   </div>
                              </div>
                                   <button className="btn btn-primary mr-2" style={{ backgroundColor: "#061E46" }} onClick={() => handleodelOpen()}> <PostAddIcon/>{' '}Add Moods</button>
                         </div>


                         <Modal show={openModel} onHide={handleCloseedit}>
                              <Modal.Header closeButton>
                                   <Modal.Title className={check ? "text-warning" : "text-primary"}>{check ? " Update" : "Add"}   Mood Here!</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>

                                   <div className="form-row">
                                        <div className="col-md-9 mb-1">
                                             <label for="validationCustom03">Mood Name</label>
                                             <input type="text" className="form-control" defaultValue={addMoods.moodName} name="moodName" onChange={e => onInputChang(e)} />
                                             <span style={{ color: "red" }} > {errors["moodName"]}</span>
                                        </div>
                                   </div><br />
                                   <div className="form-row">
                                        <div className="col-md-9 mb-1">
                                             <label for="validationCustom03">Description</label>
                                             <input type="text" className="form-control" defaultValue={addMoods.description} name="description" onChange={e => onInputChang(e)} />
                                             <span style={{ color: "red" }} > {errors["description"]}</span>


                                        </div>
                                   </div><br />
                                   <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                             <label for="validationCustom03">Sequence No</label>
                                             <input type="number" className="form-control" defaultValue={addMoods.sequenceNo} name="sequenceNo" onChange={e => onInputChang(e)} />
                                             <span style={{ color: "red" }} > {errors["sequenceNo"]}</span>
                                        </div>
                                   </div>
                                   <br />
                                   <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseedit}>
                                             Cancel
                                        </Button>
                                        <Button style={{ backgroundColor: "#061E46" }} type="submit" onClick={(e) => onAddData(e)} >
                                        {check ? " Update" : "Add"}

                                        </Button>
                                   </Modal.Footer>



                              </Modal.Body>

                         </Modal>


                         <DataTable
                              columns={columns}
                              data={filteredMood}
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
                         />
                         <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                   <Modal.Title className="text-danger">Alert!</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              Are you want to remove this mood?
                              </Modal.Body>
                              <Modal.Footer>
                                   <Button variant="secondary" onClick={handleClose}>
                                        cancel
                                   </Button>
                                   <Button variant="danger" onClick={() => removeMood()}>
                                        Delete
                                   </Button>
                              </Modal.Footer>
                         </Modal>

                    </div>
               </div>
               {/* <Dialog
                 fullScreen
                open={open}
                onClose={() => setOpen(false)}
            // TransitionComponent={Donation}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose1}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>

                <List>
                    <div className="form ml-30 ">
                        <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 col-form-label">
                                Form title
                            </label>
                            <div className="col-lg-9 col-xl-6">
                                <div>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg form-control-solid `}
                                        name="title"
                                        value={formData.title && formData.title}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <span
                                    style={{
                                        color: "red",
                                        top: "5px",
                                        fontSize: "12px",
                                    }}
                                >
                                    <h6>{errors.title}</h6>
                                </span>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 col-form-label">
                                Form URL
                            </label>
                            <div className="col-lg-9 col-xl-6">
                                <div>
                                    <input
                                        type="url"
                                        className={`form-control form-control-lg form-control-solid `}
                                        name="URL"
                                        value={formData.URL && formData.URL}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>
                                <span
                                    style={{
                                        color: "red",
                                        top: "5px",
                                        fontSize: "12px",
                                    }}
                                >
                                    <h6>{errors.link}</h6>
                                </span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-secondary mr-2">
                                <span>Update Form</span>
                            </button>
                            <button className="btn btn-success mr-2">
                                <span>Add Form</span>
                            </button>

                        </div>
                    </div>
                </List>
            </Dialog> */}
          </>
     );
};

export default AppMood;
