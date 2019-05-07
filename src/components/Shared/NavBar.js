import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar'

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
      flexGrow: 1,
  },
  grow: {
      flexGrow: 1,
      paddingLeft: 10,
      paddingRight: 10,

  },
  menuButton: {
      marginLeft: -12,
      marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" id="navbar">
        <Navbar.Brand href="/Home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
          <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Flights">Flights</Nav.Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Accommodation">Accommodation</Nav.Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Tours">Tours / Activities</Nav.Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Transport">Transport</Nav.Link>
            </Typography> 
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Areas">Explore Thailand</Nav.Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Offers">Offers</Nav.Link>
            </Typography>        
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/Information">Information</Nav.Link>
            </Typography>
            {/* <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/News">Blogs &amp; News</Nav.Link>
            </Typography>   */}
            {/* <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/SignUp">SignUp</Nav.Link>
            </Typography> */}
          </Nav>
        </Navbar.Collapse>

      </Navbar>


      {props.children}
    </div>

  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar)
// export default NavBar;