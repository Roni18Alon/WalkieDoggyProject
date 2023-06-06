import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { IoPawSharp } from "react-icons/io5";
import Rating from "react-rating-stars-component";
import Button from "@mui/material/Button";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const ResultList = () => {
  console.log("in result list");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  const user = JSON.parse(JSON.stringify(responseData.body[0]));
  const userList = JSON.parse(localStorage.getItem("SearchResult"));
  const params = new URLSearchParams({
    user_mail: user.user_email,
  });

  //add whatsapp icon
  const handleLiveChat = async (e) => {
    console.log("in live chat" + e.target.value);
    e.preventDefault();

    //post-requset for new contact(whatapp)
    const urlConnect =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/connect";

    const requestData = {
      user_to_connect: e.target.value,
    };

    try {
      const response = await axios.post(
        `${urlConnect}?${params}`,
        JSON.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(requestData);
      console.log(response);
    } catch (error) {
      console.log("Error:", error.response);
    }

    console.log(requestData);
  };

  return (
    <>
      {/* Your existing code */}
      <div className="row">
        <div className="col-lg-12 card-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex align-items-center mb-4">
                    <h5 className="card-title">Results</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {userList.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell>
                                <div className="container bootdey">
                                  <div className="panel panel-default panel-order">
                                    <div className="panel-body">
                                      <div className="row">
                                        <div className="">
                                          <img
                                            src="https://bootdey.com/img/Content/user_3.jpg"
                                            className="media-object img-thumbnail"
                                          />
                                          {/*row.img*/}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                {" "}
                                <div className="">
                                  <div className="row">
                                    <div className="">
                                      <span>
                                        <strong>
                                          {" "}
                                          <a href="/WalkerProfileForUser">
                                            {/*localStorage.setItem("walkerProfile", JSON.stringify(row.user_email))*/}
                                            {row.name}
                                          </a>{" "}
                                          {/*add profile address */}
                                        </strong>
                                      </span>{" "}
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div style={{ pointerEvents: "none" }}>
                                  <span className="label label-info">
                                    <Rating
                                      id={row.name}
                                      count={5}
                                      size={25}
                                      filledIcon={
                                        <div className="custom-icon">
                                          <IoPawSharp />
                                        </div>
                                      }
                                      emptyIcon={
                                        <div className="custom-icon">
                                          <IoPawSharp />
                                        </div>
                                      }
                                      readOnly
                                      value={row.rating}
                                    />
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="col-md-12">
                                  ({row.rating_count})
                                </div>
                              </TableCell>

                              <TableCell>
                                <div className="col-md-12">
                                  distance: {row.distance}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="col-md-12">{row.price} </div>
                              </TableCell>
                              <TableCell>
                                <Button
                                  onClick={handleLiveChat}
                                  value={row.connected_user}
                                >
                                  place whatapp icon here
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResultList;
