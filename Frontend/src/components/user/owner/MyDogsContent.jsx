import dog1 from "./images/2.jfif";
import { useLocation } from "react-router-dom";

function ProfileContent() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const responseData = JSON.parse(searchParams.get("data"));

    console.log(responseData);
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

                            {
                                // Change this array with the list from db/api
                                [1, 2, 3, 4,5,6,7]?.map((dog, i) => (
                                    <div key={i} className="">
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
                                                <img src={dog1} alt="" className="object-cover w-full h-full" />
                                                {/* Social Info*/}
                                            </div>
                                            {/* Team Details*/}
                                            <div className="p-2 ">
                                                <h6 className="mt-3 font-semibold text-black text-md">Dog Name</h6>
                                                <p className="mt-1 text-sm line-clamp-2 ">
                                                    Some Details Here
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileContent;
