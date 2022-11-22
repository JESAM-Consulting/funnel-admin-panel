import React, { useEffect, useState, useCallback } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { ApiGet, ApiPost, ApiPut } from "../../../helpers/API/ApiData";
// import Slide from "@material-ui/core/Slide";
// import DeleteIcon from "@material-ui/icons/Delete";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, List } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";// const Transition = React.forwardRef(function Transition(props, ref) {
import TweetForms from "./TweetForms";
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import PostAddIcon from '@material-ui/icons/PostAdd';

//   return <Slide direction="up" ref={ref} {...props} />;
// });
const INITIAL_DATA = { index: 1, tweet: "", phrase: "", mood: "", category: "" }
const Tweetgenerat = () => {
    const [tweet, setTweet] = useState([]);
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [inputCount, setInputCount] = useState([INITIAL_DATA]);
    const [page, setPage] = useState(1);
    const [tweetshow, setTweetShow] = useState(false);
    const [erros, setErrors] = useState()
    const [filteredTweet, setFilteredTweet] = useState([]);
    // const [count, setCount] = useState(0);
    const [countPerPage, setCountPerPage] = useState(10);

    useEffect(() => {
        getNewsData();
    }, []);


    const validate = () => {
        const errors = {};
        let formIsvalidate = true
        for (let i in inputCount) {
            if (!inputCount[i]?.tweet.trim()) {
                formIsvalidate = false;
                errors["tweet" + i] = "Tweet is required !";
            }
            if (!inputCount[i]?.phrase.trim()) {
                errors["phrase" + i] = "Phrase is required !";
                formIsvalidate = false
            }
            if (!inputCount[i]?.category) {
                errors["category" + i] = "Category is required !";
                formIsvalidate = false
            }
            if (!inputCount[i]?.mood) {
                errors["mood" + i] = "Mood is required !";
                formIsvalidate = false
            }
        }
        setErrors(errors)
        return formIsvalidate;

    }
    const handleSearch = (e) => {
        //console.log("eeeee", e.target.value);
        var value = e.target.value.toLowerCase();
        let filterData = tweet.filter(
            (item) =>
                item?.vCategoryName.toLowerCase().includes(value) ||
                item?.vMood.toLowerCase().includes(value) ||
                item?.vPhrase.toLowerCase().includes(value) ||
                item?.vTweet.includes(value)
        )
        setFilteredTweet(filterData)
    };

    const getNewsData = async () => {
        setIsLoaderVisible(true);
        await ApiGet("generate-tweet/get-all-by-admin?page=1&limit=1000")
            .then((res) => {
                setTweet(res.data.data);
                setFilteredTweet(res.data.data);
                // console.log("abcd",res.data.data);
            })
            .catch((err) => {
                console.log("err", err);
            });

        setIsLoaderVisible(false);
    };
    const handleAddTweet = () => {
        // setInputCount((preValue) => ([...preValue, { ...INITIAL_DATA, index: preValue.length + 1 }]))
        setInputCount((prevState) => {
            const initialdata = {
                index: prevState.length + 1,
                tweet: "",
                phrase: "",
                mood: "",
                category: ""
            }
            return [...prevState, initialdata]
        })
        // eslint-disable-next-line 
    }
    const handelDelete = useCallback((id) => {
        // console.log("delete id", id, inputCount);
        let data = [...inputCount]
        const newcount = data.filter((i) => i.index !== id);
        // console.log("newcount", newcount);
        setInputCount(newcount)
    }, [inputCount])

    const handleMultipleData = useCallback((data, index) => {
        let value = data.target.value
        let name = data.target.name
        // console.log("==============", data, value, name, index)
        let initialValue = [...inputCount]
        initialValue[index][name] = value
        setInputCount(initialValue)
    }, [inputCount])

    // console.log("final data ==>", inputCount)

    const handleSubmitTweets = async () => {
        if (validate()) {
            await ApiPost('generate-tweet/generate-by-admin', inputCount).then((res) => {
                // console.log(res)
                handleCloseTweetShow(false);
                getNewsData();
                setInputCount((prevState) => {
                    const initialdata = {
                        index: 1,
                        tweet: "",
                        phrase: "",
                        mood: "",
                        category: ""
                    }
                    return [initialdata]
                })
                toast.success("Tweets Added successfully");

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message)
            })

        }
    }
    // console.log(erros);

    // const handleMenu = () => {
    //      setShow(true);
    // };

    const handleClose = () => {
        setShow(false);


    };

    const removeATweet = async (row) => {
        await ApiPut(`generate-tweet/delete?id=${row._id}`)
            .then((res) => {
                setShow(false);
                getNewsData();
                toast.success(`${res.data.data?.isActive ? "Tweet  active" : "Tweet  Deactivated"}`);
            })
            .catch((err) => {
                console.log("err");
            });
    };

    const handleMenuTweet = () => {
        setTweetShow(true);
    };
    const handleCloseTweetShow = () => {
      setErrors({})
        setTweetShow(false);
    };
    const columns = [
        {
            name: "SNo",
            cell: (row, index) => (page - 1) * countPerPage + (index + 1),
            width: "65px",
        },
        {
            name: "CategoryName",
            selector: "vCategoryName",
            sortable: true,
            width: "100px",
        },
        {
            name: "Mood",
            selector: "vMood",
            sortable: true,
            width: "100px",
        },

        {
            name: "Phrase",
            selector: "vPhrase",
            sortable: true,
            width: "100px",
        },
        {
            name: "Tweet",
            selector: "vTweet",
            sortable: true,
            width: "700px",
        },
        {
            name: "Status",
            cell: (row) => {
                return (
                    <>
                        <div className=" d-flex justify-content-center">
                            {row?.isActive ? "active" : "deactive"}
                        </div>
                    </>
                );
            },
            sortable: true,
            width: "100px",
        },
        {
            name: "Actions",
            cell: (row) => {
                return (
                    <>

                        <div className=" d-flex justify-content-center">
                            <div className="pl-3 cursor-pointer">
                                <button
                                    style={{ minWidth: "100px", maxWidth: "100px" }}
                                    className={`${row?.isActive ? "btn btn-danger" : "btn btn-success"}`}
                                    onClick={() => { removeATweet(row) }} >
                                    {row?.isActive ? "Deactive" : "Active"}
                                </button>
                            </div>
                        </div>

                        {/* <div className=" d-flex justify-content-center">
                                   <div
                                        className="pl-3 cursor-pointer"
                                        onClick={() => {
                                             handleMenu();
                                             setATweetId(row._id);
                                        }}
                                   >
                                        <DeleteIcon />
                                   </div>
                              </div> */}
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



    let count = inputCount.length
    // console.log("/*///*/*//*/*/*/*/*/*//",count)
    return (
        <>
            <div className="card p-1">
                <ToastContainer />
                <div className="p-2 mb-2">
                    <div className="row mb-4 pr-3">
                        <div className="col d-flex justify-content-between">
                            <h2 className="pl-3 pt-2">Admin Tweets</h2>
                        </div>
                        <div className="col">
                            <div>
                                <input
                                    type="text"
                                    className={`form-control form-control-lg form-control-solid `}
                                    name="title"
                                    placeholder="Search Tweet"
                                    onChange={(e) => handleSearch(e)}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary mr-2" style={{ backgroundColor: "#061E46" }} onClick={() => handleMenuTweet(true)}><PostAddIcon />{' '}Add tweet</button>
                    </div>

                    <DataTable
                        columns={columns}
                        data={filteredTweet}
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
                            Are you want to remove this tweet  ??
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                cancel
                            </Button>
                            <Button variant="danger" onClick={() => removeATweet()}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>



            <Dialog
                fullScreen
                open={tweetshow}
                onClose={() => handleCloseTweetShow(false)}
            // TransitionComponent={Donation}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseTweetShow}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>

                <List>
                    <div className="p-2 mb-2">
                        <div className="row mb-4 px-5">
                            <div className="col d-flex justify-content-between">
                                <h2 className="pl-3 pt-2">Add Tweets</h2>
                            </div>

                            <button className="btn mr-3 btn-success" onClick={() => handleAddTweet()} ><LibraryAddOutlinedIcon />{' '}Add tweet</button>
                            <button className="btn btn-dark px-4 mr-3" style={{ backgroundColor: "#061E46" }} onClick={() => handleSubmitTweets()} ><SaveOutlinedIcon />{' '}Save{' '}{count !== 1 && count !== 0 ? "All" : ""}</button>

                        </div>
                        <div class="card text-center mb-3">
                            {
                                inputCount?.map((item, index) => {
                                    return (
                                        <>
                                            <TweetForms
                                                erros={erros}
                                                index={index}
                                                allData={inputCount}
                                                setErrors={setErrors}
                                                dataIndex={item.index}
                                                handelDelete={handelDelete}
                                                handleMultipleData={handleMultipleData} />
                                        </>
                                    )
                                }
                                )}
                        </div>
                    </div>
                </List>
            </Dialog>
        </>
    );
};

export default Tweetgenerat;
