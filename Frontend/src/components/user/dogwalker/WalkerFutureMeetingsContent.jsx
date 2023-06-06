import User from "./images/kindpng_248729.png";
import { Link } from "react-router-dom";

function WalkerFutureMeetingsContent() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#f8f8f8",
                }}
            >
                <div className="md:p-4 !py-[100px] md:!py-4">
                    <div className="p-2 sm:p-4 max-w-[1024px] mx-auto mb-10 gap-6 rounded-lg">
                        <h2 className="">Future Meetings</h2>

                        <hr className="my-6 mt-3 opacity-40" />

                        <div className="flex flex-col gap-3">
                            {[1, 2, 3, 6, 1, 2, 3, 6]?.map((meeting, i) => (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a
                                    key={i}
                                    href="#"
                                    className="block p-3 bg-white rounded-lg box-shadow"
                                >
                                    <div className="flex flex-col gap-4 md:flex-row media">
                                        <div className="pull-left">
                                            <img
                                                className="rounded-lg w-28 h-28 img-circle"
                                                src={`https://bootdey.com/img/Content/avatar/avatar${meeting}.png`}
                                                alt="..."
                                            />
                                        </div>
                                        <div className="">
                                            <h4 className="media-heading">
                                                John Doe{" "}
                                                <small>at 12:00 AM</small>
                                            </h4>
                                            <div className="mt-2 media-content ">
                                                <i className="fa fa-map-marker line-clamp-1" />{" "}
                                                San Francisco, California,
                                                United States
                                                <ul className="list-unstyled">
                                                    <li className="mt-2">
                                                        <i className="fa fa-skype" />{" "}
                                                        jdoe.doe
                                                    </li>
                                                    <li className="flex flex-col mt-2 sm:gap-5 sm:items-center sm:flex-row md:gap-8">
                                                        <span className="flex items-center gap-2">
                                                            <i className="fa fa-mobile" />{" "}
                                                            +63 912 212 2451
                                                        </span>
                                                        <span className="flex items-center gap-2">
                                                            <i className="fa fa-envelope-o" />{" "}
                                                            joedoe@email.com
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WalkerFutureMeetingsContent;
