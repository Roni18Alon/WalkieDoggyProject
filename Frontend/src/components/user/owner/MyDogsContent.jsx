import React from "react";
import dog1 from "./images/2.jfif";
import { useLocation } from "react-router-dom";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function ProfileContent() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const responseData = JSON.parse(localStorage.getItem("responseData"));
  const dogsArr = JSON.parse(JSON.stringify(responseData.body[0].dogs));
  console.log(dogsArr);

  const handleMoreDetails = () => {};
  return (
    <>
      <div
        className="col-12 col-md-9 col-md-9-profile p-0"
        style={{
          overflowY: "auto",
          position: "relative",
          overflowX: "hidden",
          height: "100vh",
          marginTop: "80px",
          backgroundColor: "#e2e8f0",
        }}
      >
        <TableContainer>
          <Table>
            <TableBody>
              {dogsArr.map((row) => (
                <TableCell key={row.id}>
                  <div className="container">
                    <div className="">
                      <div className="row">
                        {/* Single Advisor*/}
                        <div className="col-12 col-sm-8">
                          <div
                            className="single_advisor_profile wow fadeInUp"
                            data-wow-delay="0.5s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.5s",
                              animationName: "fadeInUp",
                            }}
                            onClick={handleMoreDetails}
                          >
                            {/* Team Thumb*/}
                            <div className="advisor_thumb">
                              <img src={dog1} alt="" />
                              {/* Social Info*/}
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                              <h6>{row.dog_name}</h6>
                              <p className="designation">{row.dog_gender}</p>
                              <p className="designation">{row.dog_age} old</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ProfileContent;
