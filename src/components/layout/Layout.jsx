import React, { Fragment, useContext } from 'react'
import {Link} from 'react-router-dom';
import { NewContext } from '../utils/Context';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';


const Layout = ({toggleMode}) => {
  const { state, dispatch } = useContext(NewContext);
  const navigate = useNavigate();

  return (
    <Fragment>
      <Box component="header" style={{ position: "static", display: "flex", justifyContent: "space-between" }}>
      
      <Box>
          <Tooltip title="Volver">
            <IconButton onClick={() => navigate(-1)}>
              <ReplyAllRoundedIcon size={30} />
            </IconButton>
          </Tooltip>
      </Box>      
      <Link to="/home">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/contacto">Contacto</Link>
      <Box>
          <Tooltip title="Change theme">
            <IconButton onClick={toggleMode}>
              <Brightness4RoundedIcon size={30} />
            </IconButton>
          </Tooltip>
        </Box>      
    
        
        <Typography variant="body2">{state.user}</Typography>
        <Box>
          <Tooltip title="Cerrar sesión">
            <IconButton onClick={() => dispatch({ type: "LOGOUT" })}>
              <ExitToAppRoundedIcon size={30} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Outlet />
    </Fragment>
  )
};

export default Layout;