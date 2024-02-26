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
      compname: "Navigation",
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
  ];
  const userLinks = [
    {
      name: "Dashboard",
      link: "/user/dashboard",
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
                : userLinks.map((u) => {
                    return (
                      <li
                        data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                        className="nav-item active"
                      >
                        <Link to={u.link} className="nav-link ">
                          <span className="pcoded-micon">
                            <i className="feather icon-home" />
                          </span>
                          <span className="pcoded-mtext">{u.name}</span>
                        </Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
