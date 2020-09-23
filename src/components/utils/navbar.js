import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function Navigation()
{
  const actStyle = {
    color: 'white',
    paddingTop: '7px',
    paddingRight: '5px',
    textDecoration: 'none'
  }
  const inactStyle={
    color: 'rgb(85, 85, 85);',
    paddingTop: '7px',
    paddingRight: '5px',
    textDecoration: 'none'
  }
    return (
  <Navbar bg="dark" variant='dark'expand="lg">
  <Navbar.Brand href="/">College of Winterhold</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to='/home' activeClassName='nav' activeStyle={actStyle} style={inactStyle} >Home</NavLink>
    {/* <Nav.Link href="#home">Home</Nav.Link> */}
    <NavLink to='/course' activeClassName='nav' activeStyle={actStyle} style={inactStyle}>Courses</NavLink>
    {/* <Nav.Link href="#courses">Courses</Nav.Link> */}
      <NavDropdown title="Schools" id="basic-nav-dropdown">
     <NavDropdown.Item href="/school/1">Alchemy</NavDropdown.Item>
     <NavDropdown.Item href="/school/2">Destruction</NavDropdown.Item>
     <NavDropdown.Item href="/school/3">Restoration</NavDropdown.Item>
        <NavDropdown.Divider />
         <NavDropdown.Item href="/school/4">Necromancy</NavDropdown.Item>
      </NavDropdown>
      <NavLink to='/faculty' activeClassName='nav' activeStyle={actStyle} style={inactStyle}>Faculty</NavLink>
      {/* <Nav.Link href="#faculty">Faculty</Nav.Link> */}
    </Nav>
    <Form inline> 
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}