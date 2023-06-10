import dog1 from "./images/2.jfif";
import { useGetUserInfoQuery } from "../../tokenApi";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function MyDogsContent() {
  const { data } = useGetUserInfoQuery;
  console.log(data.body[0]);

  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "#f8f8f8",
          minHeight: "100vh",
        }}
      >
        <div className="container p-0 md:p-4 !py-[100px] md:!py-4">
          <div className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Single Advisor*/}
              <TableContainer>
                <Table>
                  <TableBody>
                    {(data.body[0].dogs|| []).map((dog, i) => (
                      <TableRow key={dog.id}>
                        <TableCell>
                          <div
                            className="transition border border-opacity-25 rounded-lg cursor-pointer box-shadow_ wow fadeInUp hover:shadow hover:scale-105 group"
                            data-wow-delay="0.5s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.5s",
                              animationName: "fadeInUp",
                            }}
                          >
                            {/* Team Thumb*/}
                            <div className="advisor_thumb h-[220px] rounded-t-lg overflow-hidden">
                              <img
                                src={dog1}
                                alt=""
                                className="object-cover w-full h-full"
                              />
                              {/* Social Info*/}
                            </div>
                            {/* Team Details*/}
                            <div className="p-2 ">
                              <h6 className="mt-3 font-semibold text-black text-md">
                                {dog.dog_name}
                              </h6>
                              <p className="mt-1 text-sm line-clamp-2">
                                Age: {dog.dog_age}
                              </p>
                            </div>
                          </div>
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
    </>
  );
}

export default MyDogsContent;
