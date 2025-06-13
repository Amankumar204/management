import React, { useState } from 'react';
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Box,
  Slide
} from '@mui/material';
import { FiLogOut, FiUser, FiSettings } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { currentRole, currentUser } = useSelector((state) => state.user);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleClick} size="small">
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#1a1a1a',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: '2px solid #fff',
            }}
          >
            {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
          </Avatar>
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Slide}
        PaperProps={{
          elevation: 6,
          sx: {
            mt: 1.5,
            px: 2,
            py: 1,
            minWidth: 180,
            borderRadius: 3,
            background: 'rgba(20, 20, 20, 0.85)',
            backdropFilter: 'blur(12px)',
            color: '#f2f2f2',
            '& .MuiMenuItem-root': {
              fontFamily: 'monospace',
              borderRadius: 2,
              my: 0.5,
              '&:hover': {
                backgroundColor: '#333333',
              },
            },
          },
        }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem component={Link} to={`/${currentRole}/profile`} onClick={handleClose}>
          <FiUser style={{ marginRight: 10 }} />
          <Typography fontSize="0.95rem">My Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FiSettings style={{ marginRight: 10 }} />
          <Typography fontSize="0.95rem">Preferences</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/logout" onClick={handleClose}>
          <FiLogOut style={{ marginRight: 10 }} />
          <Typography fontSize="0.95rem">Log Out</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
