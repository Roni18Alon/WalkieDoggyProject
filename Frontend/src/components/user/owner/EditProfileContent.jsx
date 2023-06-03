import User from "./images/kindpng_248729.png";
import { Link } from "react-router-dom";

function EditProfileContent() {
    const handleEditProfile = () => {
        //***TO DO - POST **
    };
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f8f8f8",
                }}
            >
                <div className="md:p-4 !py-[100px] md:!py-4 m-3">
                    <div className="p-4 max-w-[900px] mx-auto_ mb-10 gap-6  bg-white rounded-lg box-shadow">
                        <div className="">
                            <img
                                src={User}
                                alt="Admin"
                                className="p-1 -translate-y-1/2 rounded-circle "
                                width={130}
                            />

                            <h3 className="text-lg font-bold -mt-[40px]">
                                James Maina
                            </h3>

                            <div className="flex gap-4 my-2">
                                <p className="mb-1">Dog Owner</p>-
                                <p className="flex items-center gap-2 text-muted font-size-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    John Doe
                                </p>
                            </div>
                        </div>

                        <hr className="my-6 opacity-40" />

                        <>
                            <div className="mb-3 ">
                                <div className="mb-2 opacity-75">
                                    <h6 className="mb-0">Full Name:</h6>
                                </div>
                                <div className="text-secondary">
                                    <input
                                        type="text"
                                        className="border form-control"
                                        defaultValue="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 ">
                                <div className="mb-2 opacity-75">
                                    <h6 className="mb-0">Email:</h6>
                                </div>
                                <div className="text-secondary">
                                    <input
                                        type="text"
                                        className="border form-control"
                                        defaultValue="john@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 "></div>
                            <div className="mb-3 ">
                                <div className="mb-2 opacity-75">
                                    <h6 className="mb-0">Mobile:</h6>
                                </div>
                                <div className="text-secondary">
                                    <input
                                        type="text"
                                        className="border form-control"
                                        defaultValue="(054) 123456789"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-2 opacity-75">
                                    <h6 className="mb-0">Address:</h6>
                                </div>
                                <div className="text-secondary">
                                    <input
                                        type="text"
                                        className="border form-control"
                                        defaultValue="Tel Aviv, Israel"
                                    />
                                </div>
                            </div>
                        </>

                        <Link
                            className="bg-[#03C9D7] mt-4 inline-block px-6 py-2 text-white rounded-md"
                            to="/Profile"
                            onClick={handleEditProfile()}
                        >
                            Save Changes
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfileContent;
