
import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link, NavLink } from 'react-router-dom';

import './NavigationBar.css'

import logo from '../logo.svg';
const NavigationBar = () => {
    return (

        // <Navbar>
        //     <Nav variant="pills" defaultActiveKey="/home">
        //     <Nav.Item>
        //         <Nav.Link href="/home">Home</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="disabled" disabled>
        //             Disabled
        //         </Nav.Link>
        //     </Nav.Item>
        // </Nav>
        // </Navbar>

        // <Container>
        //     <Navbar bg="light" variant="light" expand="lg">
        //         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav
        //                 className="mr-auto my-2 my-lg-0"
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <NavLink to='/home' activeClassName='selected' activeStyle={{
        //                     fontWeight: "bold",
        //                     color: "green"
        //                 }}>Home</NavLink>
        //                 {/* <Nav.Link href="#action1">Home</Nav.Link> */}
        //                 <Nav.Link href="#action2">Link</Nav.Link>
        //                 <NavDropdown title="Link" id="navbarScrollingDropdown">
        //                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#" disabled>
        //                     Link
        //                 </Nav.Link>
        //             </Nav>
        //             <Form className="d-flex">
        //                 <FormControl
        //                     type="search"
        //                     placeholder="Search"
        //                     className="mr-2"
        //                     aria-label="Search"
        //                 />
        //                 <Button variant="outline-success">Search</Button>
        //             </Form>
        //         </Navbar.Collapse>
        //     </Navbar>

        // </Container>

        //         <Navbar bg="dark" variant="dark" expand="md">
        //             <NavbarToggle aria-controls='navbarScroll'>
        //                 <Navbar.Collapse id='navbarScroll'>

        //                 <Nav className="justify-content-center" activeKey="/home">
        //     <Nav.Item>
        //       <Nav.Link href="/home">Active</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //       <Nav.Link eventKey="link-1">Link</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //       <Nav.Link eventKey="link-2">Link</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //       <Nav.Link eventKey="disabled" disabled>
        //         Disabled
        //       </Nav.Link>
        //     </Nav.Item>
        //   </Nav>

        //                 </Navbar.Collapse>

        //             </NavbarToggle>

        //         </Navbar>

        <Navbar bg='dark' variant='dark' sticky='top'>
            <Container>
                <Navbar.Brand>
                    <img src={logo} width='30' height='30' className='d-inline-block align-top' alt="I don't know" />
                </Navbar.Brand>
                {/* <Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className ='me-auto'>
                            <Nav.Link href='home'>
                                
                                Home
                            </Nav.Link>
                            <Nav.Link href='about'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar.Toggle> */}

                <Nav className='mx-auto '>
                    {/* <Nav.Link href='home'>Home</Nav.Link> */}
                    <NavLink className='navigation-link' to='/home'>Home</NavLink>
                    <NavLink className='navigation-link' to='/about'>About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;