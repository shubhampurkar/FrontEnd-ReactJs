import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import FlightIcon from "@material-ui/icons/Flight";
import { NavLink } from "react-router-dom";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:''
    }
  }
  home = () => {
    this.props.history.push("");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <NavLink className="nav-item active" to='/adminmain'>
                {" "}
                <Button color="inherit">
                  {" "}
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <HomeRoundedIcon />
                  </IconButton>
                </Button>
              </NavLink>
              <Typography variant="h6" className={classes.title}>
                <IconButton color="inherit" aria-label="FLightSystem">
                  <FlightIcon />
                </IconButton>
                <b>Flight Management System</b>
              </Typography>
              <NavLink className="nav-item active" to="/">
                <Button>
                  <IconButton aria-label="SignOut">
                    <ExitToAppTwoToneIcon />
                  </IconButton>
                </Button>
              </NavLink>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(Navbar);
