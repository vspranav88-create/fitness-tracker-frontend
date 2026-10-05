import React from 'react'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import UserInput from '../Components/UserInput'
import Preview from '../Components/Preview'
import { Box, Card, Stack, Typography } from '@mui/material';

function Info() {

    const [WorkoutDetails,setWorkoutDetails]=React.useState({
     fullName:"",
      workoutType:"",
      date: "",
      duration: "",
      calories: "",
      sets: "",
      repetitions: "",
      bodyPart: "",
      notes: "",

  })
    
  return (
    <div>
     <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6f0', py: 5, px: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Card  elevation={0}
          sx={{
            mb: 4,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            color: 'white',
            background: 'linear-gradient(135deg, #20291b, #536b40)',
          }} >
          <Stack direction="row" spacing={2} alignitems="center">
            <FitnessCenterRoundedIcon sx={{ color: '#c7f36b', fontSize: 34 }} />
            <Box>
              <Typography variant="h4" fontWeight={800}>
                Workout tracker
              </Typography>
              <Typography sx={{ color: '#e1e7d9' }}>
                Add your workout and preview its details.
              </Typography>
            </Box>
          </Stack>
        </Card>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.5fr) minmax(280px, 0.8fr)' },
            gap: 3,
            alignitems: 'start',
          }} >
          <UserInput
            WorkoutDetails={WorkoutDetails}
            setWorkoutDetails={setWorkoutDetails}/>

          <Box sx={{mt:45}}>
            <Preview WorkoutDetails={WorkoutDetails} />
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
  )
}

export default Info
