import React, { useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {

  const navigate = useNavigate();
const [username, setUsername] = useState(
  sessionStorage.getItem('loggedInUser')
);

function handleLogout() {
  sessionStorage.removeItem('loggedInUser');
  setUsername('');
  navigate('/loginpage');
}







  return (
   <AppBar
  position="sticky"
  elevation={0}
  sx={{
    top: 0,
    zIndex: 1100,
    bgcolor: '#20291b',
    borderBottom: '1px solid rgba(199, 243, 107, 0.2)',
  }}
>
  <Container maxWidth="xl">
    <Toolbar
      disableGutters
      sx={{
        minHeight: { xs: 68, md: 78 },
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FitnessCenterRoundedIcon sx={{ color: '#c7f36b', fontSize: 30 }} />

        <Typography variant="h5" fontWeight={800} sx={{ color: 'white' }}>
          fit
          <Box component="span" sx={{ color: '#c7f36b' }}>
            .
          </Box>
        </Typography>
      </Box>

      {/* Navigation buttons */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              px: 2.5,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': { bgcolor: '#34412c' },
            }}
          >
            Home
          </Button>
        </Link>

        <Link to="/all-workouts" style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              px: 2.5,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': { bgcolor: '#34412c' },
            }}
          >
            All Workouts
          </Button>
        </Link>

        <Link to="/all-downloads" style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              color: 'white',
              px: 2.5,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': { bgcolor: '#34412c' },
            }}
          >
            Downloads
          </Button>
        </Link>

        <Button
          sx={{
            color: 'white',
            px: 2.5,
            py: 1,
            borderRadius: 2,
            textTransform: 'none',
            '&:hover': { bgcolor: '#34412c' },
          }}
        >
          About
        </Button>
       {
  <>
   

    <Button onClick={handleLogout} sx={{ color: 'white' }}>
      Logout
    </Button>
  </>
}
      </Box>
    </Toolbar>
  </Container>
</AppBar>
  );
}

export default Header;