import React, { useEffect, useState } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { ApiGet } from "../../../helpers/API/ApiData";
// import Slide from "@material-ui/core/Slide";
// import DeleteIcon from "@material-ui/icons/Delete";
import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import moment from "moment";
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
import "./Users.scss";
import InfoIcon from "@material-ui/icons/Info";

const News = () => {
  const [Users, setUsers] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  //   const [eId, setEmailId] = useState();
  // const [count, setCount] = useState(0);
  const [countPerPage, setCountPerPage] = useState(10);

  useEffect(() => {
    getNewsData();
  }, []);

  const [solar, setSolar] = useState();

  const getNewsData = async () => {
    setIsLoaderVisible(true);
    await ApiGet("get-solar-saving")
      .then((res) => {
        setUsers( res.data.data.reverse());
        setFilteredUser( res.data.data.reverse())
        console.log("res.data.", res.data.count);
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
  };

  //   const removeEmail = async () => {
  //     await ApiDelete(`newsletter/remove/`)
  //       .then((res) => {
  //         setShow(false);
  //         getNewsData();
  //         toast.success("Email Removed");
  //       })
  //       .catch((err) => {
  //         console.log("err");
  //       });
  //   };

  const columns = [
    {
      name: "SNo",
      cell: (row, index) => (page - 1) * countPerPage + (index + 1),
      width: "65px",
    },
    {
      name: "UserName",
      selector: "userName",
      sortable: true,
      width: "250px",
    },
    {
      name: "Email",
      selector: "userEmail",
      sortable: true,
      width: "300px",
    },
    {
      name: "contactNo",
      selector: "contactNo",
      sortable: true,
      width: "200px",
    },
    {
      name: "User Available tme",
      selector: "userAvailableTime",
      sortable: true,
      width: "200px",
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
                  setSolar(row);
                }}
              >
                <InfoIcon />
              </div>
              {/* <div
                className="pl-3 cursor-pointer"
                onClick={() => {
                  handleMenu();
                  setEmailId(row._id);
                }}
              >
                <DeleteIcon />
              </div> */}
            </div>
          </>
        );
      },
      selector: "website",
      sortable: true,
      width: "200px",
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
  const [filteredUser, setFilteredUser] = useState([]);
  const handleSearch = (e) => {
    var value = e.target.value.toLowerCase();
    let filterData = Users.filter((item) => item?.userName.toLowerCase().includes(value) || item?.userEmail.toLowerCase().includes(value));
    setFilteredUser(filterData);
  };
  return (
    <>
      <div className="card p-1">
        <ToastContainer />
        <div className="p-2 mb-2">
          <div className="row mb-4 pr-3">
            <div className="col d-flex justify-content-between">
              <h2 className="pl-3 pt-2">New Page</h2>
            </div>
            <div className="col">
              <div>
                <input
                  type="text"
                  className={`form-control form-control-lg form-control-solid `}
                  name="title"
                  placeholder="Search user"
                  onChange={(e) => handleSearch(e)}
                />
              </div>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={filteredUser.reverse()}
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
              <Modal.Title className="text-danger">User data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table class="table table-bordered">
                <tr>
                  <th>TotalPeople:</th>
                  <td>{solar?.totalPeople}</td>
                </tr>
                <tr>
                  <th>Electricity requirement:</th>
                  <td>{solar?.electricityRequirement}</td>
                </tr>
                <tr>
                  <th>Electricity price:</th>
                  <td>{solar?.electricityPrice}</td>
                </tr>
                <tr>
                  <th>Monthly Fee:</th>
                  <td>{solar?.MonthlyFee}</td>
                </tr>
                <tr>
                  <th>Location:</th>
                  <td>{solar?.location}</td>
                </tr>
                <tr>
                  <th>Roof length:</th>
                  <td>{solar?.roofLength}</td>
                </tr>
                <tr>
                  <th>Roof width:</th>
                  <td>{solar?.roofWidth}</td>
                </tr>
                <tr>
                  <th>Roof type:</th>
                  <td>{solar?.roofType}</td>
                </tr>
                <tr>
                  <th>Roof orientation:</th>
                  <td>{solar?.roofOrientation}</td>
                </tr>
                <tr>
                  <th>Roof area:</th>
                  <td>{solar?.roofArea}</td>
                </tr>
                <tr>
                  <th>E-Mobility km:</th>
                  <td>{solar?.eMobilityMessage}</td>
                </tr>
                <tr>
                  <th>message:</th>
                  <td>{solar?.message}</td>
                </tr>
                <tr>
                  <th>Total saveing:</th>
                  <td>{solar?.total20yearSavings}€</td>
                </tr>
              </table>
            </Modal.Body>

            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                cancel
              </Button>
              <Button variant="danger" onClick={() => removeEmail()}>
                Delete
              </Button>
            </Modal.Footer> */}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default News;
