import React, { useState } from 'react'
import {
  ArrowForwardRounded,
  FitnessCenterRounded,
  MailOutlineRounded,
  Password,
  PersonOutlineRounded,
  VisibilityOffOutlined,  VisibilityOutlined,} from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
     const [showPassword,setShowPassword]=useState('');

  
     //form validation
     const [name,setName]=useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')

     const navigate = useNavigate()

      function handleRegister(e) {
    e.preventDefault();

    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);

     if(name=="" || email=="" ||password==""){
        alert("please fill the form")
      }
      else
      {
       alert('Registration successful...')
       navigate('/loginpage')
      }

      }

    
     
     

  return (
    <div>
     <Box sx={{
        minHeight: '100vh',
        p: { xs: 2, md: 4 },
        display: 'grid',
        placeItems: 'center',
        bgcolor: '#f4f6f0',
      }} >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1060,
          minHeight: 680,
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
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 2,
                bgcolor: '#c7f36b',
              }}
            >
              <FitnessCenterRounded fontSize="small" />
            </Box>
            fit<span sx={{ color: '#88ae45' }}>.</span>
          </Link>

          <Box sx={{ mt: { xs: 5, md: 'auto' }, mb: 3 }}>
            <Typography variant="h4" fontWeight={800} color="#20291b" gutterBottom>
              Start your journey
            </Typography>
            <Typography color="#777e72">
              Create your account and make every move count.
            </Typography>
          </Box>

          <Stack
            component="form"
            spacing={2}
            onSubmit={handleRegister}
          >
            <TextField
            onChange={(e)=>setName(e.target.value)}
              label="Your name"
              placeholder="Enter your name"
              autoComplete="name"
              required
              fullWidth
              // Inputprops={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <PersonOutlineRounded />
              //     </InputAdornment>
              //   ),
              // }}
            />

            {/* email */}

            <TextField
            onChange={(e)=>setEmail(e.target.value)}
              label="Email address"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required
              fullWidth
              // Inputprops={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <MailOutlineRounded />
              //     </InputAdornment>
              //   ),
              // }}
            />

         {/* password */}

            <TextField
            onChange={(e)=>setPassword(e.target.value)}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              helperText="Use at least 8 characters"
              required
              fullWidth
              // Inputprops={{
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <IconButton
              //         aria-label={showPassword ? 'Hide password' : 'Show password'}
              //         onClick={() => setShowPassword((visible) => !visible)}
              //         edge="end"
              //       >
              //         {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
            />

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
              Create account
            </Button>

            <Typography variant="caption"  color="#858b80">
              By signing up, you agree to our{' '}
              <Link to="/terms">Terms of Service</Link> and{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            
            color="#777e72"
            sx={{ mt: 'auto', pt: 4 }}
          >
            Already have an account? <Link to="/loginpage">Log in</Link>
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
              A HEALTHIER ROUTINE STARTS HERE
            </Typography>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ mt: 1, mb: 2, lineHeight: 1.08 }}
            >
              Progress at your pace.
              <br />
              Strength for your life.
            </Typography>
            <Typography sx={{ color: '#d3dacb', lineHeight: 1.8 }}>
              Track your activity, stay consistent, and celebrate the small wins
              that add up to something big.
            </Typography>

            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
              <Box>
                <Typography variant="h5" fontWeight={800} color="#d5f58e">
                  12k+
                </Typography>
                <Typography variant="caption" color="#d3dacb">
                  active members
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={800} color="#d5f58e">
                  4.9/5
                </Typography>
                <Typography variant="caption" color="#d3dacb">
                  member rating
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
  )
}

export default RegisterPage
