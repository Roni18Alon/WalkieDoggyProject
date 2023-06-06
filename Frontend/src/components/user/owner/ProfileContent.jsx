import User from "./images/roni.png";
import { Link } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useGetUserQuery } from "../../authApi";

function ProfileContent() {
    const { data } = useGetUserQuery();
    console.log(data);
    console.log(data);

    const handleDateSelection = (selectedDateTime) => {
        console.log("Selected date/time:", selectedDateTime);
        // Perform additional actions
    };

    return (
        <div
            style={{
                backgroundColor: "#f8f8f8",
            }}
        >
            <div className="md:p-4 !py-[100px] md:!py-4 m-3">
                <div className="p-4 max-w-[900px] mx-auto_ mb-10 flex gap-6 flex-col lg:flex-row bg-white rounded-lg box-shadow">
                    <div className="">
                        <img
                            src={User}
                            alt="Admin"
                            className="p-1 -translate-y-1/2 rounded-circle "
                            width={130}
                        />

                        <h3 className="text-lg font-bold -mt-[40px]">
                            {data &&
                            data.body[0].user_full_name.split(" ")
                                    .map(
                                        (name) =>
                                            name.charAt(0).toUpperCase() +
                                            name.slice(1)
                                    )
                                    .join(" ")}
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

                                { data.body[0].city.charAt(0).toUpperCase() +
        data.body[0].city.slice(1) +
        ", " +
        data.body[0].country.charAt(0).toUpperCase() +
        data.body[0].country.slice(1)}
                            </p>
                        </div>
                        <Link
                            className="bg-[#03C9D7] mt-4 inline-block px-6 py-2 text-white rounded-md"
                            to="/EditProfile"
                        >
                            Edit Profile
                        </Link>
                    </div>

                    <hr className="my-6 opacity-40" />

                    <div className="">
                        <div className="flex items-center gap-4 my-3">
                            <h6 className="mb-0 text-lg">Full Name</h6>
                            <div className="font-bold text-secondary text-md">
                            {data &&
                            data.body[0].user_full_name.split(" ")
                                    .map(
                                        (name) =>
                                            name.charAt(0).toUpperCase() +
                                            name.slice(1)
                                    )
                                    .join(" ")}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 my-3">
                            <h6 className="mb-0 text-lg">Email</h6>
                            <div className="font-bold text-secondary text-md">
                                {data.body[0].user_email}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 my-3">
                            <h6 className="mb-0 text-lg">Mobile</h6>
                            <div className="font-bold text-secondary text-md">
                                {data.body[0].phone_number}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 my-3">
                            <h6 className="mb-0 text-lg">Address</h6>
                            <div className="font-bold text-secondary text-md">
    {data.body[0].address.charAt(0).toUpperCase() +
        data.body[0].address.slice(1) +
        ", " +
        data.body[0].city.charAt(0).toUpperCase() +
        data.body[0].city.slice(1) +
        ", " +
        data.body[0].country.charAt(0).toUpperCase() +
        data.body[0].country.slice(1)}
</div>

                        </div>
                    </div>
                </div>

                <div className="my-4 row">
                    <div className="col-12">
                        <div className="overflow-hidden bg-white rounded-lg box-shadow">
                            <div className="card-body">
                                <div className="calendar-container">
                                    <Calendar
                                        onSelectDateTime={handleDateSelection}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileContent;
