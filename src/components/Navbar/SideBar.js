import React from "react";
import { NavItem, NavLink, Nav} from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import './../../App.css'



const SideBar = ({ isOpen, toggle, }) => (  
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">

      <h3>Financeer</h3>
    </div>
    <div className="">
      <Nav vertical>
        <NavItem>

          <NavLink tag={Link} to={"/"}>
            <div className='text'>
            Home Page
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/signup"}>
            <div className='text'>
            Signup
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/login"}>
            <div className='text'>
            Login
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/profile"}>
            <div className='text'>
            Profile
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/expenses"}>
            <div className='text'>
            Expenses
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/income"}>
            <div className='text'>
            Income
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/investments"}>
            <div className='text'>
            Investments
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/charts"}>
            <div className='text'>
            Charts
            </div>
          </NavLink>
        </NavItem>

      </Nav>
    </div>
  </div>
);



export default SideBar;