import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { BASELINE_URL , BACK_URL } from '../../index'
import logo from '../../assets/Logo.png';



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
  logoSize: {
      flexGrow: 1,
      width: 80,
      height: 80,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 5,
  },
};

function NavBar(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" id="navbar">
        <Navbar.Brand>
          <Link to="/Home" className="navBarCustom" id="navBarCustomHome">
          <img className={classes.logoSize} src={logo} alt="logo" />

          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
          <Typography variant="h6" color="inherit" className={classes.grow}>
             <Link to="/Flights" className="navBarCustom">Flights</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/Accommodation" className="navBarCustom">Accommodation</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/Tours" className="navBarCustom">Tours / Activities</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/Transport" className="navBarCustom">Transport</Link>
            </Typography> 
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/Areas" className="navBarCustom">Explore Thailand</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/Offers" className="navBarCustom">Offers</Link>
            </Typography>        
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/Information" className="navBarCustom">Information</Link>
            </Typography>
            {/* <Typography variant="h6" color="default" className={classes.grow}>
              <Link to="/Information" className="navBarCustom">Test 3</Link>
            </Typography>
            <Navbar.Brand href="/home">Home</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
          <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/flights">Flights</Nav.Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Nav.Link href="/accommodation">Accommodation</Nav.Link>
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
            <Typography variant="h6" color="default" className={classes.grow}>
              <Link to="/Information" className="navBarCustom">Test 3</Link>
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