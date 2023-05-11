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
import "./Bcrechner.scss";
import InfoIcon from "@material-ui/icons/Info";

const Bcrechner = () => {
  const [Users, setUsers] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  //   const [eId, setEmailId] = useState();
  // const [count, setCount] = useState(0);
  const [setDelete, setShowDelete] = useState(false);
  const [count, setCount] = useState();

  const [countPerPage, setCountPerPage] = useState(10);

  useEffect(() => {
    getNewsData();
  }, [page, countPerPage]);

  const [solar, setSolar] = useState();

  console.log("Users", Users);

  const getNewsData = async () => {
    setIsLoaderVisible(true);
    await ApiGet(
      `qualified_contact?project=bc-rechner&page=${page}&limit=${countPerPage}`
    )
      .then((res) => {
        setUsers(res.data.data.reverse());
        setFilteredUser(res.data.data.reverse());
        console.log("res.data.", res.data.count);
        setCount(res?.data?.count);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setIsLoaderVisible(false);
  };
  const removeEmail = async (data) => {
    console.log("id", data?._id, data?.project);
    await ApiDelete(`delete_contact?project=${data?.project}&id=${data?._id}`)
      .then((res) => {
        setShowDelete(false);
        getNewsData();
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("err");
      });
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

  const columns = [
    {
      name: "SNo",
      cell: (row, index) => (page - 1) * countPerPage + (index + 1),
      width: "65px",
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      width: "250px",
    },
    {
      name: "interesse finanzierung",
      selector: "interesse_finanzierung",
      sortable: true,
      width: "250px",
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      width: "300px",
    },
    {
      name: "Dachform",
      selector: "dachform",
      sortable: true,
      width: "200px",
    },
    {
      name: "Art heizung",
      selector: "art_heizung",
      sortable: true,
      width: "200px",
    },
    {
      name: "Leadherkunft",
      selector: "leadherkunft",
      sortable: true,
      width: "200px",
    },
    {
      name: "Telefon",
      selector: "telefon",
      sortable: true,
      width: "200px",
    },
    {
      name: "PLZ",
      selector: "plz",
      sortable: true,
      width: "200px",
    },
    {
      name: "Stromverbrauch",
      selector: "stromverbrauch",
      sortable: true,
      width: "200px",
    },
    {
      name: "Bemerkungen",
      selector: "Bemerkungen",
      sortable: true,
      width: "200px",
    },
    {
      name: "Datum",
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
                  handleMenu("edit");
                  setSolar(row);
                }}
              >
                <InfoIcon />
              </div>
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
        item?.name.toLowerCase().includes(value) ||
        item?.email.toLowerCase().includes(value)
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
              <h2 className="pl-3 pt-2">bc-rechner</h2>
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
            paginationServer
            paginationTotalRows={count}
            paginationPerPage={countPerPage}
            paginationRowsPerPageOptions={[5, 10, 20, 25, 50, 100]}
            paginationDefaultPage={page}
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
                  <th>Name:</th>
                  <td>{solar?.name}</td>
                </tr>
                <tr>
                  <th>interesse finanzierung:</th>
                  <td>{solar?.interesse_finanzierung}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{solar?.email}</td>
                </tr>
                <tr>
                  <th>Dachform:</th>
                  <td>{solar?.dachform}</td>
                </tr>
                <tr>
                  <th>Art heizung:</th>
                  <td>{solar?.art_heizung}</td>
                </tr>
                <tr>
                  <th>Leadherkunft:</th>
                  <td>{solar?.leadherkunft}</td>
                </tr>
                <tr>
                  <th>Telefon:</th>
                  <td>{solar?.telefon}</td>
                </tr>
                <tr>
                  <th>PLZ:</th>
                  <td>{solar?.plz}</td>
                </tr>
                <tr>
                  <th>Stromverbrauch:</th>
                  <td>{solar?.stromverbrauch}</td>
                </tr>
                <tr>
                  <th>Bemerkungen:</th>
                  <td>{solar?.Bemerkungen}</td>
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

export default Bcrechner;
