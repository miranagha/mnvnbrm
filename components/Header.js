import React from "react";
import Link from 'next/link'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, Badge} from "reactstrap";
import { FaPhone, FaMobile } from "react-icons/lib/fa";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="text-right">
          <a className='phone' href="tel:01217692055"><FaPhone />01217692055</a>
        </div>
        <Navbar light expand="md">
          <Link href='/'>
            <a>
              <img
                src="/static/man and van 24.png"
                alt="man and van 24"
                className='logo'
              />
            </a>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navi" navbar>
              <NavItem>
                <Link href='/' passHref><a className='a-nav' >HOME</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/services' passHref><a className='a-nav'>SERVICES</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/removals' passHref><a className='a-nav'>REMOVALS</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/prices' passHref><a className='a-nav'>PRICES</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/get-a-quote' passHref><a className='a-nav'>GET A QUOTE <Badge style={{backgroundColor:'#f90'}} pill>Free</Badge></a></Link>
              </NavItem>
              {/* <NavItem>
                <Link href='/man-and-van' passHref><a className='a-nav'>CONTACT US</a></Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}