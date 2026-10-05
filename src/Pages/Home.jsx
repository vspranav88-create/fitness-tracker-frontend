import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import './Home.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, SplitText);
function Home() {


  const homeRef = useRef(null);

  //heading animation
   useGSAP(() => {
    SplitText.create('.hero-title', {
      type: 'chars',
      autoSplit: true,
      onSplit: (split) => {
        return gsap.from(split.chars, {
          y: 40,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
        });
      },
      
    });
  }, { scope: homeRef });



  return (
    <Box ref={homeRef}>

      <section id="bg">
        <div className="text">
          <h1 className="hero-title">
            Feel Good. Get Stronger.
            <br />
          Your Workouts, Your Goals,
            <br />
            Your Progress—All In One
          </h1>
        </div>

        <Link to="registerpage">
          <Button className="hero-button" variant="contained">Start tracking</Button>
        </Link>
      </section>

      {/* About the fitness tracker */}
      <Box id="about-us" className="intro-section">
        <Box className="section-heading">
          <h2>Build Healthy Habits</h2>
        </Box>

        <Box className="intro-row">
          <Box className="intro-content">
            <p>
              Track your workouts, activity, and goals in one simple place.
              See how far you've come and find the motivation to keep moving.
            </p>

            <p>
              Set a pace that works for you, celebrate small wins, and build a
              routine that fits your life.
            </p>
          </Box>

          <Box className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80"
              alt="Person working out"
            />
          </Box>
        </Box>
      </Box>

      {/* Background image section */}
      <section id="hero1" />

      {/* Testimonials */}
      <Box id="testimonials" className="intro-section">
        <Box className="section-heading">
          <h2>Real Progress, Real People</h2>
        </Box>

        <Box className="intro-row">
          <Box className="intro-content">
            <h2>Every move counts.</h2>

            <p>
              Whether you're starting a new routine or building on years of
              training, the tracker helps you stay focused on your own progress.
            </p>

            <p>
              Log your activity, reach your weekly goals, and keep showing up
              one workout at a time.
            </p>
          </Box>

          <Box className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
              alt="Athlete stretching after a workout"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;