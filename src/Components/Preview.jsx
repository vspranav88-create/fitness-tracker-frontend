import React from 'react'
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'

function Preview({WorkoutDetails}) {
  console.log(WorkoutDetails);
  
  return (
    <div>
     <Paper
  elevation={0}
  sx={{
    width: '100%',
    maxWidth: 380,
    p: 3,
    borderRadius: 4,
    border: '1px solid #e2e8dc',
    bgcolor: 'white',
  }}
>
  <Stack spacing={2}>
    <Box>
      <Typography variant="overline" sx={{ color: '#71805f' }}>
        WORKOUT PREVIEW
      </Typography>

      <Typography variant="h5" fontWeight={700} sx={{ color: '#20291b' }}>
        {WorkoutDetails?.fullName || 'Your Name'}
      </Typography>
    </Box>

    <Divider />

    <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Workout type : </Typography>
      <Typography  fontWeight={600}>
        {WorkoutDetails?.workoutType}
      </Typography>
    </Stack>

    <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Body part :</Typography>
      <Typography fontWeight={600}>
        {WorkoutDetails?.bodyPart}
      </Typography>
    </Stack>

    <Stack  sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Date :</Typography>
      <Typography fontWeight={600}>
        {WorkoutDetails?.date}
      </Typography>
    </Stack>

    <Stack  sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Duration :</Typography>
      <Typography fontWeight={600}>
        {WorkoutDetails?.duration
          ? `${WorkoutDetails.duration} min `
          : ''}
        
      </Typography>
    </Stack>

    <Stack  sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Calories :</Typography>
      <Typography fontWeight={600}>
        {WorkoutDetails?.calories
          ? `${WorkoutDetails.calories} kcal`
          : ''}
      </Typography>
    </Stack>

    <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Sets :</Typography>
      <Typography fontWeight={600}>
        {WorkoutDetails?.sets}
      </Typography>
    </Stack>

    <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
      <Typography color="text.secondary">Repetitions :</Typography>
      <Typography fontWeight={600}>
        {WorkoutDetails?.repetitions}
      </Typography>
    </Stack>

    

    <Divider />

    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: '#f4f6f0',
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
        Notes
      </Typography>

      <Typography variant="body1">
        {WorkoutDetails?.notes || 'No notes added yet.'}
      </Typography>
    </Box>
  </Stack>
</Paper>
    </div>
  )
}

export default Preview
