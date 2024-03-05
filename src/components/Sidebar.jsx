import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const path = window.location.pathname;
  const serviceProviderLinks = [
    {
      name: "Dashboard",
      link: "/serviceprovider/dashboard",
      img: "feather icon-home",
      class: "nav-item pcoded-menu-caption",
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
      name: "Add Service Provider",
      link: "/serviceprovider/addserviceprovider",
      img: "feather icon-box",
    },
  ];
  const userLinks = [
    {
      name: "Dashboard",
      link: "/user/dashboard",
      img: "feather icon-home",
      class: "nav-item pcoded-menu-caption",
      compname: "User",
    },
    {
      name: "Add User",
      link: "/user/adduser",
      img: "feather icon-box",
    },
    {
      name: "User List",
      link: "/user/userlist",
      img: "feather icon-server",
    },
    {
      name: "All Services",
      link: "/user/allservices",
      img: "feather icon-server",
    },
  ];

  return (
    <div>
      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand header-logo">
            <Link href="index.html" className="b-brand">
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
              {path.includes("serviceprovider")
                ? serviceProviderLinks.map((servpro) => {
                    return (
                      <ul>
                        <li className={servpro.class}>
                          <label>{servpro.compname}</label>
                        </li>
                        <li
                          data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                          className="nav-item active"
                        >
                          <Link to={servpro.link} className="nav-link ">
                            <span className="pcoded-micon">
                              <i className={servpro.img} />
                            </span>
                            <span className="pcoded-mtext">{servpro.name}</span>
                          </Link>
                        </li>
                      </ul>
                    );
                  })
                : userLinks?.map((u) => {
                    return (
                      <ul>
                        <li className={u.class}>
                          <label>{u.compname}</label>
                        </li>
                        <li
                          data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                          className="nav-item active"
                        >
                          <Link to={u.link} className="nav-link ">
                            <span className="pcoded-micon">
                              <i className={u.img} />
                            </span>
                            <span className="pcoded-mtext">{u.name}</span>
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
