import React, { useState } from "react";

function WalkerProfileContent() {
    const responseData = JSON.parse(localStorage.getItem("responseData"));

    return (
        <>
            <div
                style={{
                    backgroundColor: "#f8f8f8",
                }}
            >
                <div className="md:p-4 !py-[100px] md:!py-4 m-3 ">
                    <div className="p-4 max-w-[900px] mx-auto mb-10 flex gap-6 flex-col bg-white rounded-lg box-shadow">
                        <div className="">
                            <img
                                src={
                                    "https://bootdey.com/img/Content/avatar/avatar5.png"
                                }
                                alt="Admin"
                                className="p-1 -translate-y-1/2 rounded-circle "
                                width={130}
                            />

                            <h3 className="text-lg font-bold -mt-[40px]">
                                 {responseData.body[0].user_full_name.split(" ")
                                    .map(
                                        (name) =>
                                            name.charAt(0).toUpperCase() +
                                            name.slice(1)
                                    )
                                    .join(" ")}
                            </h3>

                            <p className="mt-2 text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Non nostrum odio cum repellat
                                veniam eligendi rem cumque magnam autem delectus
                                qui.
                            </p>

                            <hr className="my-6 opacity-40" />

                            {/* User info */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="text-2xl font-bold panel-title opacity-80">
                                        User info
                                    </h4>
                                </div>
                                <div className="panel-body">
                                    <table className="table profile__table">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <bold>Location</bold>
                                                </th>
                                                <td>United States</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <bold>Experience</bold>
                                                </th>
                                                <td>3 Years</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <bold>Rank</bold>
                                                </th>
                                                <td>Level 1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <hr className="my-6 opacity-40" />

                            {/* Community */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="text-2xl font-bold panel-title opacity-80">
                                        Community
                                    </h4>
                                </div>
                                <div className="panel-body">
                                    <table className="table profile__table">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <bold>Jobs</bold>
                                                </th>
                                                <td>84</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <bold>Member since</bold>
                                                </th>
                                                <td>Jan 01, 2016</td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <bold>Last login</bold>
                                                </th>
                                                <td>1 day ago</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <hr className="my-6 opacity-40" />

                            {/* Latest posts */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="text-2xl font-bold panel-title opacity-80">
                                        Reviews
                                    </h4>
                                </div>
                                <div className="panel-body">
                                    <div className="profile__comments">
                                        <div className="profile-comments__item">
                                            <div className="profile-comments__avatar">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="profile-comments__body">
                                                <h5 className="profile-comments__sender">
                                                    Richard Roe{" "}
                                                    <small>2 hours ago</small>
                                                </h5>
                                                <div className="profile-comments__content">
                                                    Good job done by James Smith{" "}
                                                    <br />
                                                    Recommended!
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw low"></i>{" "}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-comments__item">
                                            <div className="profile-comments__avatar">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="profile-comments__body">
                                                <h5 className="profile-comments__sender">
                                                    Saim Ayub{" "}
                                                    <small>3 days ago</small>
                                                </h5>
                                                <div className="profile-comments__content">
                                                    Not satisfied with his job{" "}
                                                    <br />
                                                    Not Recommended
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw low"></i>{" "}
                                                    <i class="fa-solid fa-paw low"></i>{" "}
                                                    <i class="fa-solid fa-paw low"></i>{" "}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-comments__item">
                                            <div className="profile-comments__avatar">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="profile-comments__body">
                                                <h5 className="profile-comments__sender">
                                                    Andreas Martinez{" "}
                                                    <small>5 day ago</small>
                                                </h5>
                                                <div className="profile-comments__content">
                                                    Completely satisfied with
                                                    his work. He did his job
                                                    very well. <br />
                                                    Recommended!
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                    <i class="fa-solid fa-paw"></i>{" "}
                                                </div>
                                            </div>
                                            <p
                                                class="mt-3"
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Show More
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 opacity-40" />

                            <div className="">
                                {/* Contact user */}
                                <div className="flex justify-center">
                                    <a
                                        href="#"
                                        className="profile__contact-btn btn btn-lg btn-info"
                                        data-toggle="modal"
                                        data-target="#profile__contact-form"
                                    >
                                        Contact User 
                                    </a>
                                </div>
                                <hr className="profile__contact-hr" />
                                {/* Contact info */}
                                <div className="profile__contact-info">
                                    <div className="profile__contact-info-item">
                                        <div className="profile__contact-info-icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="profile__contact-info-body">
                                            <h5 className="profile__contact-info-heading">
                                                Work number
                                            </h5>
                                            (000)987-65-43
                                        </div>
                                    </div>
                                    <div className="profile__contact-info-item">
                                        <div className="profile__contact-info-icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="profile__contact-info-body">
                                            <h5 className="profile__contact-info-heading">
                                                Mobile number
                                            </h5>
                                            (000)987-65-43
                                        </div>
                                    </div>
                                    <div className="profile__contact-info-item">
                                        <div className="profile__contact-info-icon">
                                            <i className="fa fa-envelope-square" />
                                        </div>
                                        <div className="profile__contact-info-body">
                                            <h5 className="profile__contact-info-heading">
                                                E-mail address
                                            </h5>
                                            <a href="mailto:admin@domain.com">
                                                admin@domain.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="profile__contact-info-item">
                                        <div className="profile__contact-info-icon">
                                            <i className="fa fa-map-marker" />
                                        </div>
                                        <div className="profile__contact-info-body">
                                            <h5 className="profile__contact-info-heading">
                                                Work address
                                            </h5>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WalkerProfileContent;
