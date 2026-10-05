import React from 'react'
import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div>
      <Box  sx={{ bgcolor: '#1d281b', color: 'white', p: { xs: 3, md: 5 }, mt: 4, }}>
  <Grid container spacing={4}>
    <Grid  xs={12} md={6}>
      <Typography variant="h6" gutterBottom fontWeight={700}>
        Fit Tracker
      </Typography>
      <Typography variant="body2" sx={{ color: '#c4cbbb', maxWidth: 480, lineHeight: 1.8 }}>
        Track your workouts, build healthy habits, and celebrate your progress.
        Fit Tracker helps you stay motivated and make every move count.
      </Typography>
    </Grid>

    <Grid  xs={12} md={6}>
      <Typography variant="h6" gutterBottom fontWeight={700}>
        Contact Us
      </Typography>

      <Box display="flex" aligns="center" mb={1}>
        <EmailIcon sx={{ mr: 1 }} />
        <Link href="mailto:hello@fittracker.com" color="inherit" underline="hover">
          hello@fittracker.com
        </Link>
      </Box>

      <Box display="flex" aligns="center" mb={2}>
        <PhoneIcon sx={{ mr: 1 }} />
        <Link href="tel:+18005550123" color="inherit" underline="hover">
          +1 (800) 555-0123
        </Link>
      </Box>

      <Typography variant="subtitle1" fontWeight={600}>
        Connect With Us
      </Typography>
      <Box>
        <IconButton aria-label="Instagram" href="#" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="Facebook" href="#" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="WhatsApp" href="#" color="inherit">
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Grid>
  </Grid>

  <Box mt={4} pt={2} sx={{ borderTop: '1px solid #3b4638' }}>
    <Typography variant="body2" sx={{ color: '#c4cbbb' }}>
      Designed and built with React · © {new Date().getFullYear()} Fit Tracker
    </Typography>
  </Box>
</Box>
    </div>
  )
}

export default Footer
