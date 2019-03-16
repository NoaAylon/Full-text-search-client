import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from "react-router";
import { AdminContext } from '../context/adminContext';


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',


  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


function Navbar(props) {
  const { classes } = props;
  const { isLogin, setIsLogin } = useContext(AdminContext)

  const handleClick = () => {
    const { history } = props
    if (!isLogin) {
      history.push('/login');
    }
    setIsLogin(!isLogin);
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Search Engine App
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            {isLogin ? 'logout' : 'login'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(Navbar));
