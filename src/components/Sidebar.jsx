import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "./Loader";

export const Sidebar = () => {
  const location = useLocation();
  const [isLoading, setisLoading] = useState(false);
  const path = location.pathname;

  const serviceProviderLinks = [
    {
      name: "ServiceProvider Dashboard",
      link: "/serviceprovider/dashboard",
      img: "feather icon-home",
      compname: "Service Provider",
    },
    {
      name: "Add Service",
      link: "/serviceprovider/addservice",
      img: "feather icon-box",
    },
    {
      name: "Service List",
      link: "/serviceprovider/servicelist",
      img: "feather icon-server",
    },
    {
      name: "Profile",
      link: "/serviceprovider/profile",
      img: "feather icon-server",
    },
  ];

  const adminLinks = [
    {
      name: "Admin Dashboard",
      link: "/admin/dashboard",
      img: "feather icon-home",
      compname: "Admin",
    },

    {
      name: "Manage Service",
      link: "/admin/manageservice",
      img: "feather icon-server",
    },
    {
      name: "Manage ServiceProvider",
      link: "/admin/manageserviceprovider",
      img: "feather icon-server",
    },
    {
      name: "Manage User",
      link: "/admin/manageuser",
      img: "feather icon-server",
    },
    {
      name: "Bookings",
      link: "/admin/adminbookedservice",
      img: "feather icon-server",
    },
    {
      name: "Profile",
      link: "/admin/profile",
      img: "feather icon-server",
    },
  ];

  const userLinks = [
    {
      name: "User Dashboard",
      link: "/user/dashboard",
      img: "feather icon-home",
      compname: "User",
    },
    {
      name: "All Services",
      link: "/user/allservices",
      img: "feather icon-server",
    },
    {
      name: "Profile",
      link: "/user/profile",
      img: "feather icon-server",
    },
  ];

  const getSidebarLinks = () => {
    // setisLoading(true);
    if (path.includes("admin")) {
      return adminLinks;
    } else if (path.includes("serviceprovider")) {
      return serviceProviderLinks;
    } else {
      return userLinks;
    }
    // setisLoading(false);
  };

  return (
    <div>
      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand header-logo">
            <Link to="/" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Local Service</span>
            </Link>

            <a className="mobile-menu" id="mobile-collapse" href="javascript:">
              <span />
            </a>
          </div>

          <div className="navbar-content scroll-div">
            <ul className="nav pcoded-inner-navbar">
              {getSidebarLinks().map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="nav-link">
                    <span className="pcoded-micon">
                      <i className={link.img} />
                    </span>
                    <span className="pcoded-mtext">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
