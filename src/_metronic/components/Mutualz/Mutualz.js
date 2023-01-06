import React, { useEffect, useState } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { ApiDelete, ApiGet } from "../../../helpers/API/ApiData";
// import Slide from "@material-ui/core/Slide";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
import "./mutualz.scss";
import InfoIcon from "@material-ui/icons/Info";

const Mutualz = () => {
  const [Users, setUsers] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [eId, setEmailId] = useState();
  const [setDelete, setShowDelete] = useState(false);
  const [countPerPage, setCountPerPage] = useState(10);

  useEffect(() => {
    getNewsData();
  }, [page]);

  const [solar, setSolar] = useState();

  console.log("asssss", Users);

  const getNewsData = async () => {
    setIsLoaderVisible(true);
    await ApiGet(`get-mutualz?page=1&limit=10`)
      .then((res) => {
        setUsers(res.data.data);
        setFilteredUser(res.data.data);
        console.log("res.data.", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setIsLoaderVisible(false);
  };

  const handleMenu = (type) => {
    if (type === "edit") {
      setShow(true);
    } else if (type === "delete") {
      setShowDelete(true);
    }
  };

  const handleClose = (type) => {
    if (type === "edit") {
      setShow(false);
    } else if (type === "delete") {
      setShowDelete(false);
    }
  };

  const removeEmail = async (data) => {
    console.log("idaaa", data?._id);
    await ApiDelete(`delete-mutualz?mutualzId=${data?._id}`)
      .then((res) => {
        setShowDelete(false);
        getNewsData();
        toast.success("Mutualz erfolgreich gelöscht");
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
      name: "Name",
      cell: (row) => {
        return row?.firstName ? `${row?.firstName} ${row?.lastName}` : "- ";
      },
      selector: "fullName",
      sortable: true,
      width: "250px",
    },

    {
      name: "Email",
      cell: (row) => {
        return row?.email ?? "-";
      },
      selector: "email",
      sortable: true,
      width: "300px",
    },

    {
      name: "postalCode",

      selector: "postalCode",
      cell: (row) => {
        return <>{row?.postalCode ?? "-"}</>;
      },
      sortable: true,
      width: "300px",
    },

    {
      name: "Date",
      cell: (row) => {
        return <>{moment(row.createdAt).format("Do MMMM YYYY ")}</>;
      },

      selector: "createdAt",
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
                  handleMenu("delete");
                  setSolar(row);
                }}
              >
                <DeleteIcon />
              </div>
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
    let filterData = Users.filter(
      (item) =>
        item?.userName.toLowerCase().includes(value) ||
        item?.userEmail.toLowerCase().includes(value)
    );
    setFilteredUser(filterData);
  };
  return (
    <>
      <div className="card p-1">
        <ToastContainer />
        <div className="p-2 mb-2">
          <div className="row mb-4 pr-3">
            <div className="col d-flex justify-content-between">
              <h2 className="pl-3 pt-2">Mutualz</h2>
            </div>
            <div className="col">
              <div>
                {/* <input
                  type="text"
                  className={`form-control form-control-lg form-control-solid `}
                  name="title"
                  placeholder="Search user"
                  onChange={(e) => handleSearch(e)}
                /> */}
              </div>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={filteredUser}
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
          <Modal show={show} onHide={() => handleClose("edit")}>
            <Modal.Header closeButton>
              <Modal.Title className="text-danger">Benutzerdaten</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table class="table table-bordered">
                <tr>
                  <th>Salutation:</th>
                  <td>{solar?.salutation}</td>
                </tr>
                <tr>
                  <th>Name:</th>
                  <td>{solar?.fullName}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{solar?.email}</td>
                </tr>
                <tr>
                  <th>Field Name:</th>
                  <td>{solar?.fieldName}</td>
                </tr>
                <tr>
                  <th>postalCode:</th>
                  <td>{solar?.postalCode}</td>
                </tr>
                <tr>
                  <th>phone:</th>
                  <td>{solar?.phone}</td>
                </tr>
              </table>
            </Modal.Body>

            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                cancel
              </Button>
              <Button variant="danger" onClick={() => removeEmail(solar)}>
                Löschen
              </Button>
            </Modal.Footer> */}
          </Modal>
          <Modal show={setDelete} onHide={() => handleClose("delete")}>
            <Modal.Header closeButton>
              <Modal.Title className="text-danger">Alarm!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Möchten Sie entfernen {solar?.name}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose("delete")}>
                Abbrechen
              </Button>
              <Button variant="danger" onClick={() => removeEmail(solar)}>
                Löschen
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Mutualz;
