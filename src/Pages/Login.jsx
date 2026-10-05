import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowForwardRounded, FitnessCenterRounded, LockOutlined, MailOutlineRounded, VisibilityOffOutlined, VisibilityOutlined,} from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';



function Login() {
  const [showPassword, setShowPassword] = useState('');

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate= useNavigate()



 function handleLogin(e) {
  e.preventDefault();

   const savedEmail = localStorage.getItem('registeredEmail');
  const savedPassword = localStorage.getItem('registeredPassword');

  if(email=="" || password=="")
  {
    alert('please fill the form')
  }
  else if (email === savedEmail && password === savedPassword) {
   
    if (savedEmail && savedPassword) {
  sessionStorage.setItem('loggedInUser', email);
  
}
    alert('Login successful!');
    navigate('/workout-details');
  } 
  else
     {
    alert('Email or password is incorrect.');
  }
}
  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: { xs: 2, md: 4 },
        display: 'grid',
        placeItems: 'center',
        bgcolor: '#f4f6f0',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1060,
          minHeight: 650,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 0.88fr' },
          overflow: 'hidden',
          border: '1px solid #e8ece3',
          borderRadius: 4,
          bgcolor: 'white',
          boxShadow: '0 24px 70px rgba(35,49,28,0.1)',
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 7 },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Link
            to="/"
            sx={{
              width: 'fit-content',
              display: 'flex',
              alignitems: 'center',
              gap: 8,
              color: '#20291b',
              fontSize: 25,
              fontWeight: 800,
              textDecoration: 'none',
            }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 2,
                bgcolor: '#c7f36b',
              }}>
              <FitnessCenterRounded fontSize="small" />
            </Box>
            fit<span sx={{ color: '#88ae45' }}>.</span>
          </Link>

          <Box sx={{ mt: { xs: 5, md: 'auto' }, mb: 3 }}>
            <Typography variant="h4" fontWeight={800} color="#20291b" gutterBottom>
              Welcome back
            </Typography>
            <Typography color="#777e72">
              Log in to continue your fitness journey.
            </Typography>
          </Box>

          <Stack
            component="form"
            spacing={2}
            onSubmit={handleLogin}>
            <TextField
            onChange={(e)=>setEmail(e.target.value)}
              label="Email address"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required
              fullWidth/>

            <TextField
            onChange={(e)=>setPassword(e.target.value)}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              fullWidth/>

            <Stack
              direction="row"
              justifycontent="space-between"
              alignitems="center"
              sx={{ mt: -1 }}
            >
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography variant="body2" color="#777e72">
                    Remember me
                  </Typography>
                }
              />
              <Link
                to="/forgot-password"
                sx={{ color: '#536f31', fontSize: 13, fontWeight: 700 }}
              >
                Forgot password?
              </Link>
            </Stack>

            
            <Button
           
              type="submit"
              variant="contained"
              endIcon={<ArrowForwardRounded />}
              sx={{
                minHeight: 50,
                mt: 1,
                borderRadius: 2,
                bgcolor: '#20291b',
                textTransform: 'none',
                fontWeight: 700,
                '&:hover': { bgcolor: '#34412c' },
              }}
            >
              Log in
            </Button>
           
          </Stack>

          <Typography
            variant="body2"
            textalign="center"
            color="#777e72"
            sx={{ mt: 'auto', pt: 4 }}
          >
            New to Fit? <Link to="/registerpage">Create an account</Link>
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: { xs: 340, md: '100%' },
            p: { xs: 4, md: 7 },
            display: 'flex',
            alignitems: 'flex-end',
            position: 'relative',
            overflow: 'hidden',
            color: 'white',
            background:
              'radial-gradient(ellipse at 70% 20%, #839b5a 0%, #45593a 36%, #20291b 80%)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 480,
              height: 480,
              top: -170,
              right: -140,
              border: '1px solid rgba(213,245,142,0.24)',
              borderRadius: '50%',
            }}
          />

          <Box sx={{ position: 'relative', maxWidth: 410 }}>
            <Typography
              variant="overline"
              sx={{ color: '#c7f36b', fontWeight: 800, letterSpacing: 1.5 }}
            >
              YOUR NEXT WORKOUT IS WAITING
            </Typography>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ mt: 1, mb: 2, lineHeight: 1.08 }}
            >
              Pick up where
              <br />
              you left off.
            </Typography>
            <Typography sx={{ color: '#d3dacb', lineHeight: 1.8 }}>
              Your goals, workouts, and progress are right where you left them.
              Keep building a routine that feels good to you.
            </Typography>

            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
              <Box>
                <Typography variant="h5" fontWeight={800} color="#d5f58e">
                  One step
                </Typography>
                <Typography variant="caption" color="#d3dacb">
                  at a time
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={800} color="#d5f58e">
                  Your pace
                </Typography>
                <Typography variant="caption" color="#d3dacb">
                  your progress
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;