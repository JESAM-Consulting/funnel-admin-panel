import React, { useEffect, useState } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { ApiGet, ApiPost, ApiPut } from "../../../helpers/API/ApiData";
// import Slide from "@material-ui/core/Slide";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostAddIcon from '@material-ui/icons/PostAdd';

// import Slide from "@material-ui/core/Slide";

// import Dialog from "@material-ui/core/Dialog";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import List from "@material-ui/core/List";

//import moment from "moment";
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const Category = () => {
     const [categorys, setCategory] = useState([]);

     const initialValue = { categoryName: "", description: "", sequenceNo: "" }
     const [addCategorys, setAddCategory] = useState(initialValue);
     const [isLoaderVisible, setIsLoaderVisible] = useState(false);
     const [show, setShow] = useState(false);
     const [openModel, setOpenModel] = useState(false);
     // const [open, setOpen] = useState(false);
     const [page, setPage] = useState(1);
     const [cId, setCatId] = useState();
     const [countPerPage, setCountPerPage] = useState(10);

     const [errors, setErrors] = useState({});
     const [check, setCheck] = useState(false);
     const [filteredCat, setFilteredCat] = useState([]);

     const handleSearch = (e) => {
          var value = e.target.value.toLowerCase();
          let filterData = categorys.filter(
               (item) =>
                    item?.categoryName.toLowerCase().includes(value) ||
                    item?.description.toLowerCase().includes(value)
          )
          setFilteredCat(filterData)
     };

     const columns = [
          {
               name: "SNo",
               cell: (row, index) => (page - 1) * countPerPage + (index + 1),
               width: "65px",
          },
          {
               name: "Category",
               selector: "categoryName",
               sortable: true,
               width: "200px",
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
                                             setCatId(row._id);
                                        }}
                                   >
                                        <DeleteIcon />
                                   </div>
                                   <div
                                        className="pl-3 cursor-pointer"
                                        onClick={() => {
                                             handleodelOpen();
                                             setCheck(true);
                                             setAddCategory(row)
                                             setCheck(true)
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
          await ApiGet("category/find?page=1&limit=100")
               .then((res) => {
                    setCategory(res.data.data);
                    setFilteredCat(res.data.data);
               })
               .catch((err) => {
                    console.log("err", err);
               });

          setIsLoaderVisible(false);
     };

     const removeCategory = async () => {
          await ApiPut(`category/delete?id=${cId}`)
               .then((res) => {
                    setShow(false);
                    getNewsData();
                    toast.success("Category removed successfully");
               })
               .catch((err) => {
                    console.log("err");
               });
     };

     const handleMenu = () => {
          setShow(true);
     };
     const handleClose = () => {
          setShow(false);
     };

     const handleodelOpen = () => {
          setOpenModel(true);
     };
     const handleCloseModel = () => {
          setOpenModel(false);
          setErrors({});
          setAddCategory(initialValue);
          setCheck(false);
     };

     const onInputChang = e => {
          const { name, value } = e.target;
          setAddCategory({ ...addCategorys, [name]: value })
          setErrors({ ...errors, [name]: "" });
     }

     const onsubmit = async (e) => {
          if (validationData()) {
               e.preventDefault()
               let data = {
                    categoryName: addCategorys?.categoryName,
                    description: addCategorys?.description,
                    sequenceNo: addCategorys?.sequenceNo,
               }
               await ApiPost('category/create', data)
               .then((res) => {
                    // console.log(res)
                    setErrors({});
                    setAddCategory(initialValue);
                    setOpenModel(false);
                    setCheck(false);
                    getNewsData();
                    toast.success("Category Added successfully");
               }).catch((err) => {
                    console.log(err);
                    toast.error(err.response.data.message)
               })
          }
     }

     const onsubmitedit = async (e) => {
          if (validationData()) {
               await ApiPut(`category/update?id=${addCategorys._id}`, addCategorys).then((res) => {
                    // console.log(res);
                    setOpenModel(false);
                    setCheck(false);
                    setErrors({});
                    setAddCategory(initialValue);
                    getNewsData();
                    toast.success("Category Edited successfully");
               }).catch((err) => {
                    console.log(err);
               })
          }
     }

     const validationData = () => {
          let formIsValid = true;
          let errors = {};
          if (addCategorys && !addCategorys.categoryName.trim()) {
               formIsValid = false;
               errors["categoryName"] = " * Category name is required"
          }
          if (addCategorys && !addCategorys.description.trim()) {
               formIsValid = false;
               errors["description"] = " * Description is required"
          }
          if (addCategorys && !addCategorys.sequenceNo) {
               formIsValid = false;
               errors["sequenceNo"] = " * SequenceNo is required"
          }
          setErrors(errors);
          return formIsValid;
     }

     const onAddData = (e) => {
          check ? onsubmitedit(e) : onsubmit(e)
     }


     return (
          <>
               <div className="card p-1">
                    <ToastContainer />
                    <div className="p-2 mb-2">
                         <div className="row mb-4 pr-3">
                              <div className="col d-flex justify-content-between">
                                   <h2 className="pl-3 pt-2">Category List</h2>
                              </div>
                              <div className="col">
                                   <div>
                                        <input
                                             type="text"
                                             className={`form-control form-control-lg form-control-solid `}
                                             name="title"
                                             placeholder="Search Category"
                                             onChange={(e) => handleSearch(e)}
                                        />
                                   </div>
                              </div>
                              <button className="btn btn-primary mr-2" style={{ backgroundColor: "#061E46" }} onClick={() => handleodelOpen()}><PostAddIcon/>{' '}Add Categorys</button>

                         </div>


                         <Modal show={openModel} onHide={handleCloseModel}>
                              <Modal.Header closeButton>
                                   <Modal.Title className={check ? "text-warning" : "text-primary"}>{check ? " Update" : "Add"} Category Here !</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>

                                   <div className="form-row">
                                        <div className="col-md-9 mb-1">
                                             <label >Category Name</label>
                                             <input type="text" className="form-control" defaultValue={addCategorys.categoryName} name="categoryName" onChange={e => onInputChang(e)} />
                                             <span style={{ color: "red" }} > {errors["categoryName"]}</span>
                                        </div>
                                   </div><br />
                                   <div className="form-row">
                                        <div className="col-md-9 mb-1">
                                             <label >Description</label>
                                             <input type="text" className="form-control" defaultValue={addCategorys.description} name="description" onChange={e => onInputChang(e)} />
                                             <span style={{ color: "red" }} > {errors["description"]}</span>


                                        </div>
                                   </div><br />
                                   <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                             <label >Sequence No</label>
                                             <input type="number" className="form-control" defaultValue={addCategorys.sequenceNo} name="sequenceNo" onChange={e => onInputChang(e)} />
                                             <span style={{ color: "red" }} > {errors["sequenceNo"]}</span>
                                        </div>
                                   </div>
                                   <br />
                                   <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseModel}>
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
                              data={filteredCat}
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
                              Are you want to remove this Category?
                              </Modal.Body>
                              <Modal.Footer>
                                   <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                   </Button>
                                   <Button variant="danger" onClick={() => removeCategory()}>
                                        Delete
                                   </Button>
                              </Modal.Footer>
                         </Modal>

                    </div>
               </div>
          </>
     );
};

export default Category;
