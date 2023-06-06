import User from "./images/kindpng_248729.png";
import { Link } from "react-router-dom";

function WalkerHistoryContent() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#f8f8f8",
                }}
            >
                <div className="md:p-4 !py-[100px] md:!py-4 m-3">
                    <div className="p-4 max-w-[900px] mx-auto mb-10 gap-6 rounded-lg">
                        <h2 className="">History</h2>

                        <hr className="my-6 mt-3 opacity-40" />

                        <div className="flex flex-col gap-3">
                            {[1, 2, 3, 6, 1, 2, 3, 6]?.map((history, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-4 p-3 bg-white rounded-lg box-shadow md:flex-row"
                                >
                                    <div className="col-md-2">
                                        <img
                                            src="https://bootdey.com/img/Content/user_3.jpg"
                                            className="media-object img-thumbnail"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <div className="">
                                                <span>
                                                    <strong>Order Name:</strong>
                                                </span>{" "}
                                                <span className="label label-info">
                                                    group name
                                                </span>
                                                <br />
                                                <span>
                                                    <strong>Status:</strong>
                                                </span>{" "}
                                                <span className="label label-info">
                                                    Completed
                                                </span>
                                                <br />
                                                <span>
                                                    <strong>cost:</strong>
                                                </span>{" "}
                                                <span className="label label-info">
                                                    $323.13
                                                </span>
                                                <br />
                                                <span>
                                                    <strong>order made on:</strong>
                                                </span>{" "}
                                                <span className="label label-info">
                                                    05/31/2014 by{" "}  <a href="#">Jane Doe </a>
                                                </span>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WalkerHistoryContent;
