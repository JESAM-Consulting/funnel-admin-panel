import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { ApiGet } from "../../../helpers/API/ApiData";
import //   MixedWidget1,
//  StatsWidget11,
//  StatsWidget12
"../widgets";
// import TextField from "@material-ui/core/TextField";
// import { Button } from "react-bootstrap";
// import { ApiPost } from "../../../helpers/API/ApiData";

export function Demo1Dashboard() {
  useEffect(() => {
    getNewsData();
  }, []);
  const [countdata, setCountData] = useState();

  const getNewsData = async () => {
    await ApiGet("get-solar-saving?search=")
      .then((res) => {
        setCountData( res.data.count);
        // console.log("resdata.", res.data.result.total);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card rounded-3 border-5 border-left-danger shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Total User</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    <CountUp end={countdata ? countdata : 0} />
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas  fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row align-items-center">
                    <div className="col-lg-4 col-xxl-4 mt-6">
                         <StatsWidget11
                              className="card-stretch card-stretch-half gutter-b"
                              symbolShape="circle"
                              baseColor="success"
                         />

                         <div className="mb-4"></div>
                    </div> */}

      {/* <div className="row" >
        <div className="col-lg-12 col-xxl-12 p-0">
          <MixedWidget1 className="card-stretch gutter-b" />
        </div>
      </div> */}
      {/* <div className="mt-5">
        <h1> Add new genre</h1>
      </div> */}

      {/* <div className="col-lg-4 col-xxl-4"> 
                         <StatsWidget12 className="card-stretch card-stretch-half gutter-b" />
                    </div> */}
      {/* <div className="col-lg-4 col-xxl-4">
                         <StatsWidget12 className="card-stretch card-stretch-half gutter-b" />
                    </div> */}
      {/* </div> */}
    </>
  );
}
