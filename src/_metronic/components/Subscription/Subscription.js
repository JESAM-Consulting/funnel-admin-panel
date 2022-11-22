import React, { useEffect, useState } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { ApiGet, ApiDelete, ApiPost, ApiPut } from "../../../helpers/API/ApiData";
// import Slide from "@material-ui/core/Slide";
// import DeleteIcon from "@material-ui/icons/Delete";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import EditIcon from "@material-ui/icons/Edit";
import "react-toastify/dist/ReactToastify.css";
import PostAddIcon from "@material-ui/icons/PostAdd";
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const Subscription = () => {
    const initialValue = {
        planType: "",
        totalCredits: "",
        currencyType: "",
        cost: "",
        accounts: "",
    };
    const [addSubscription, setAddSubscription] = useState(initialValue);
    // const [editSubscription, seteditSubscription] = useState(initialValue);

    const [subData, setSubData] = useState([]);
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    // const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    // const [eId, setEmailId] = useState();
    const [openModel, setOpenModel] = useState(false);
    const [error, setErrors] = useState({});
    const [showEdit, setShowedit] = useState(false);
    const [countPerPage, setCountPerPage] = useState(10);
    const [filteredSub, setFilteredSub] = useState([]);
    
    useEffect(() => {
        getNewsData();
    }, []);

    const handleSearch = (e) => {
        //console.log("eeeee", e.target.value);
        var value = e.target.value.toLowerCase();
        // console.log("value", value)
        let filterData = subData.filter(
            (item) => item?.planType.toLowerCase().includes(value),
            // item?.accounts.toLowerCase().includes(value)
            // item?.totalCredits.includes.toNumber(value) ||
            // item?.currencyType.includes(value) ||
            // item?.cost.includes(value) ||
        );
        setFilteredSub(filterData);
    };
    const getNewsData = async () => {
        setIsLoaderVisible(true);
        await ApiGet("subscription/viewsubscription")
            .then((res) => {
                setSubData(res.data.data);
                setFilteredSub(res.data.data);
            })
            .catch((err) => {
                console.log("err", err);
            });

        setIsLoaderVisible(false);
    };

    // console.log("first",subData)
    const onInputChang = (e) => {
        const { name, value } = e.target;
        setAddSubscription({ ...addSubscription, [name]: value });
        setErrors({ ...error, [name]: "" });
    };
    console.log("addSubscription", addSubscription);

    const submitData = async (e) => {
        if (validationData()) {
            e.preventDefault();
            let data = {
                planType: addSubscription?.planType,
                totalCredits: addSubscription?.totalCredits,
                currencyType: addSubscription?.currencyType,
                cost: addSubscription?.cost,
                accounts: addSubscription?.accounts,
            };
            await ApiPost("subscription/createsubscription", data)
                .then((res) => {
                    // console.log(res)
                    setOpenModel(false);
                    getNewsData();
                    setShowedit(false);
                    setErrors({});
                    setAddSubscription(initialValue);
                    toast.success(" Subscription Added successfully");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.response.data.message);
                });
        }
    };
    const validationData = () => {
        let formIsValid = true;
        let errors = {};

        // console.log("*********", addSubscription)
        if (addSubscription && !addSubscription.planType.trim()) {
            formIsValid = false;
            errors["planType"] = " * PlanType is required";
        }
        if (addSubscription && !addSubscription.totalCredits) {
            formIsValid = false;
            errors["totalCredits"] = " * Total credit is required";
        }
        if (addSubscription && !addSubscription.currencyType) {
            formIsValid = false;
            errors["currencyType"] = " * Currency type is required";
        }
        if (addSubscription && !addSubscription.cost) {
            formIsValid = false;
            errors["cost"] = " * Cost is required";
        }
        if (addSubscription && !addSubscription.accounts) {
            formIsValid = false;
            errors["accounts"] = " * Accounts is required";
        }

        setErrors(errors);
        return formIsValid;
    };
    // console.log("===", error)
    const onsubmitedit = async (e) => {
        if (validationData()) {
            let data = {
                planType: addSubscription?.planType,
                totalCredits: addSubscription?.totalCredits,
                currencyType: addSubscription?.currencyType,
                cost: addSubscription?.cost,
                accounts: addSubscription?.accounts,
            };
            console.log("data", data);
            console.log("addSub", addSubscription._id);
            await ApiPut(`subscription/updatesubscription?_id=${addSubscription._id}`, data)
                .then((res) => {
                    //w(res);
                    setOpenModel(false);
                    getNewsData();
                    setErrors({});
                    setShowedit(false);
                    setAddSubscription(initialValue);
                    toast.success("Subscription Edited successfully");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const onAddData = (e) => {
        showEdit ? onsubmitedit(e) : submitData(e);
    };

    const deactiveSubscription = async (row) => {
        await ApiDelete(`subscription/deletesubscription?id=${row._id}`)
            .then((res) => {
                // setShow(false);
                getNewsData();
                toast.success(`${row.bIsActive ? "Subscription  Deactivated successfully !" : "Subscription  active "}`);
            })
            .catch((err) => {
                console.log("err");
            });
    };
    const columns = [
        {
            name: "SNo",
            cell: (row, index) => (page - 1) * countPerPage + (index + 1),
            width: "65px",
        },
        {
            name: "Plan Type",
            selector: "planType",
            sortable: true,
            width: "200px",
        },
        {
            name: "Total Credits",
            selector: "totalCredits",
            sortable: true,
            width: "200px",
        },
        {
            name: "Currency Type",
            selector: "currencyType",
            sortable: true,
            width: "100px",
        },
        {
            name: "Cost",
            selector: "cost",
            sortable: true,
            width: "100px",
        },
        {
            name: "Accounts",
            selector: "accounts",
            sortable: true,
            width: "200px",
        },
        {
            name: "Status",
            cell: (row) => {
                return (
                    <>
                        <div className=" d-flex justify-content-center">{row?.bIsActive ? "Active" : "Deactive"}</div>
                    </>
                );
            },
            sortable: true,
            width: "200px",
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <div className=" d-flex justify-content-center">
                            <div className="pl-3 cursor-pointer">
                                <button
                                    style={{
                                        minWidth: "100px",
                                        maxWidth: "100px",
                                    }}
                                    className={`${row?.bIsActive ? "btn btn-danger" : "btn btn-success"}`}
                                    onClick={() => {
                                        deactiveSubscription(row);
                                    }}
                                >
                                    {row?.bIsActive ? "Deactive" : "Active"}
                                </button>
                            </div>
                        </div>
                    </>
                );
            },
            sortable: true,
            width: "150px",
        },
        {
            name: "Actions",
            cell: (row) => {
                return (
                    <>
                        <div className=" d-flex justify-content-center">
                            {/* <div
                                        className="pl-3 cursor-pointer"
                                        onClick={() => {
                                             handleMenu();
                                             setEmailId(row._id);
                                        }}
                                   >
                                        <DeleteIcon />
                                   </div> */}
                            <div
                                className="pl-3 cursor-pointer"
                                onClick={() => {
                                    handleOpenModel();
                                    setShowedit(true);
                                    setAddSubscription(row);
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
    const handleOpenModel = () => {
        setOpenModel(true);
    };

    const handleCloseModel = () => {
        setOpenModel(false);
        setErrors({});
        setShowedit(false);
        setAddSubscription(initialValue);
    };

    return (
        <>
            <div className="card p-1">
                <ToastContainer />
                <div className="p-2 mb-2">
                    <div className="row mb-4 pr-3">
                        <div className="col d-flex justify-content-between">
                            <h2 className="pl-3 pt-2">Subscription List</h2>
                        </div>
                        <div className="col">
                            <div>
                                <input type="text" className={`form-control form-control-lg form-control-solid `} name="title" placeholder="Search Subscription" onChange={(e) => handleSearch(e)} />
                            </div>
                        </div>
                        <button className="btn btn-primary mr-2" style={{ backgroundColor: "#061E46" }} onClick={() => handleOpenModel()}>
                            <PostAddIcon /> Add Subscription
                        </button>
                    </div>
                    <Modal show={openModel} onHide={handleCloseModel}>
                        <Modal.Header closeButton>
                            <Modal.Title className={showEdit ? "text-warning" : "text-primary"}>{showEdit ? "Update" : "Add"} Subscription !</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-row">
                                <div className="col-md-9 mb-1">
                                    <label for="validationCustom03">Plan Type</label>
                                    <input type="text" className="form-control" defaultValue={addSubscription.planType} name="planType" onChange={(e) => onInputChang(e)} />
                                    <span style={{ color: "red" }}> {error["planType"]}</span>
                                </div>
                            </div>
                            <br />
                            <div className="form-row">
                                <div className="col-md-9 mb-1">
                                    <label for="validationCustom03">Total Credits</label>
                                    <input type="number" className="form-control" defaultValue={addSubscription.totalCredits} name="totalCredits" onChange={(e) => onInputChang(e)} />
                                    <span style={{ color: "red" }}> {error["totalCredits"]}</span>
                                </div>
                            </div>
                            <br />
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom03">Currency Type</label>
                                    <br />
                                    <select
                                        name="currencyType"
                                        style={{
                                            display: "block",
                                            width: "100%",
                                            height: "calc(1.5em + 1.3rem + 2px)",
                                            padding: "0.65rem 1rem",
                                            fontSize: "1rem",
                                            fontWeight: "400",
                                            lineHeight: " 1.5",
                                            color: "#3F4254",
                                            backgroundColor: "#ffffff",
                                            backgrouClip: "padding-box",
                                            border: "1px solid #E4E6EF",
                                            borderRadius: "0.42rem",
                                            transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                                        }}
                                        defaultValue={addSubscription.currencyType}
                                        onChange={(e) => onInputChang(e)}
                                    >
                                        <option value="">select Currency</option>
                                        <option value="$">$ USD</option>
                                        <option value="₹">₹ INR</option>
                                        <option value="¥">¥ CNY</option>
                                        <option value="€">€ EUR</option>
                                        <option value="£">£ GBP</option>
                                    </select>

                                    {/* <input type="text" className="form-control" value={addSubscription.currencyType} name="currencyType" onChange={e => onInputChang(e)} /> */}
                                    <span style={{ color: "red" }}> {error["currencyType"]}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom03">cost</label>
                                    <input type="number" className="form-control" defaultValue={addSubscription.cost} name="cost" onChange={(e) => onInputChang(e)} />
                                    <span style={{ color: "red" }}> {error["cost"]}</span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-9 mb-1">
                                    <label for="validationCustom03">Accounts</label>
                                    <input type="number" className="form-control" name="accounts" defaultValue={addSubscription.accounts} onChange={(e) => onInputChang(e)} />
                                    <span style={{ color: "red" }}> {error["accounts"]}</span>
                                </div>
                            </div>

                            <br />
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModel}>
                                    Cancel
                                </Button>
                                <Button style={{ backgroundColor: "#061E46" }} type="submit" onClick={(e) => onAddData(e)}>
                                    {showEdit ? " Update" : "Add"}
                                </Button>
                            </Modal.Footer>
                        </Modal.Body>
                    </Modal>

                    <DataTable
                        columns={columns}
                        data={filteredSub}
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

export default Subscription;
