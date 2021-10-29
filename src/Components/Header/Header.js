import { CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const {user, logOut} = UseAuth()
    const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light fixed-top">
      <CContainer>
      <CNavbarBrand href="#">TravelistBD</CNavbarBrand>
        <CNavbarToggler
          className="ms-auto"
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
       
        <CCollapse className="navbar-collapse" visible={visible}>
          
          <CNavbarNav className="d-flex align-items-center ms-auto mb-2 mb-lg-0">
            <CNavItem>
              <Link className="btn" to="/home">
                Home
              </Link>
            </CNavItem>
            <CNavItem>
              <Link className="btn" to="/mybooking">My Bookings</Link>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                Manage All Bookings
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <Link className="btn" to="/addspot">
                Add a Spot
              </Link>
            </CNavItem>
            <span className="fs-5">{user.email && user.displayName}</span>
            {user.email? <CNavItem>
                <button onClick={logOut} className="ms-3 btn btn-danger">
                    Log out
                </button>
            </CNavItem> : <CNavItem>
                <Link className=" btn btn-primary" to="/login">
                    Login
                </Link>
            </CNavItem>}

          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)
};

export default Header;