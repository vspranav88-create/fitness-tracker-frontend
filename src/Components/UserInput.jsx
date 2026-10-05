import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import { useState } from 'react';
import WorkoutType from '../assets/WorkoutsType.json';
import BodyPart from '../assets/BodyPart.json';
import { addWorkoutDetailsAPI } from '../services/apiServices';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';





function UserInput({WorkoutDetails,setWorkoutDetails}) {
const pageRef = useRef(null);

  useGSAP(() => {
    gsap.from('.workout-header', {
      y: -30,
      opacity: 0,
      duration: 2.5,
      ease: 'power2.out',
    });

    gsap.from('.workout-form', {
      y: 35,
      opacity: 0,
      duration: 0.7,
      delay: 1,
      ease: 'power2.out',
    });

    gsap.from('.workout-field', {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      delay: 1.5,
      ease: 'power2.out',
    });
  }, { scope: pageRef });

  console.log(WorkoutDetails);

  const [workoutType, setWorkoutType] = useState('');

  const navigate = useNavigate()

  //API CALL happens here or save the data in server
  const handelSaveButton=async()=>{

        const {fullName,workoutType,date,duration,calories,sets,repetitions,bodyPart,notes} = WorkoutDetails

        if(fullName=="" || workoutType=="" || date=="" || duration=="" || calories=="" || sets=="" || repetitions=="" || bodyPart=="" || notes==""){
          
          alert('please fill the form')
        }
        else{

           try{

   const res = await addWorkoutDetailsAPI(WorkoutDetails)
   console.log(res);

   if(res.status==201){
    alert('Successfully saved')
   }

   const WorkoutID = res.data.id
   setTimeout(()=>{
  navigate(`/savedDetails/${WorkoutID}`)
   })
   
   
    }
    catch(err){
      console.log(err);
      
    }

        }




   
  }
  
  return (
    <Box ref={pageRef}
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f6f0',
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Card className="workout-header"
          elevation={0}
          sx={{
            mb: 4,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            color: 'white',
            background:
              'linear-gradient(135deg, #20291b 0%, #45593a 65%, #748d50 100%)',
          }}
        >
          <Stack direction="row" spacing={2} alignitems="center" sx={{ mb: 2 }}>
            <FitnessCenterRoundedIcon
              sx={{ color: '#c7f36b', fontSize: 34 }}
            />
            <Typography
              variant="overline"
              sx={{ color: '#c7f36b', letterSpacing: 2 }}
            >
              YOUR FITNESS JOURNAL
            </Typography>
          </Stack>

          <Typography variant="h3" fontWeight={800} sx={{ mb: 1 }}>
            Log a workout
          </Typography>

          <Typography sx={{ color: '#e1e7d9' }}>
            Record your effort and keep track of your progress.
          </Typography>
        </Card>

        <Card className="workout-form"
          elevation={0}
          sx={{
            border: '1px solid #e4e9de',
            borderRadius: 4,
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
              Workout details
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Enter the details of your training session.
            </Typography>

            <Box
              component="form"
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              <TextField className="workout-field"
           onChange={e=>setWorkoutDetails({...WorkoutDetails,fullName:e.target.value})}
                label="full name"
                type="text"
                slotProps={{ htmlInput: { min: 0 } }}
              />

              


    <TextField  className="workout-field"
    onChange={e=>setWorkoutDetails({...WorkoutDetails,workoutType:e.target.value})}
    select label="Workout type" defaultValue="">
     {
     WorkoutType.WorkoutType.map(item=>(
    <MenuItem value={item} key={item}>{item}</MenuItem>
            ))
          }
   </TextField>



              <TextField className="workout-field"
              onChange={e=>setWorkoutDetails({...WorkoutDetails,bodyPart:e.target.value})}
               select label="Body part" defaultValue="">
                  {
     BodyPart.BodyPart.map(item=>(
    <MenuItem value={item} key={item}>{item}</MenuItem>
            ))
          }
              </TextField>

              <TextField className="workout-field"
              onChange={e=>setWorkoutDetails({...WorkoutDetails,date:e.target.value})}
                label="Workout date"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
              />

              <TextField className="workout-field"
               onChange={e=>setWorkoutDetails({...WorkoutDetails,duration:e.target.value})}
                label="Duration (minutes)"
                type="number"
                slotProps={{ htmlInput: { min: 1 } }}
              />

              <TextField className="workout-field"
               onChange={e=>setWorkoutDetails({...WorkoutDetails,calories:e.target.value})}
                label="Calories burned"
                type="number"
                slotProps={{ htmlInput: { min: 0 } }}
              />

              <TextField className="workout-field"
              onChange={e=>setWorkoutDetails({...WorkoutDetails,sets:e.target.value})}
                label="Sets"
                type="number"
                slotProps={{ htmlInput: { min: 0 } }}
              />

              <TextField className="workout-field"
               onChange={e=>setWorkoutDetails({...WorkoutDetails,repetitions:e.target.value})}
                label="Repetitions"
                type="number"
                slotProps={{ htmlInput: { min: 0 } }}
              />

              <TextField className="workout-field"
              onChange={e=>setWorkoutDetails({...WorkoutDetails,notes:e.target.value})}
                label="Notes"
                placeholder="How did your workout go?"
                multiline
                minRows={3}
                sx={{ gridColumn: { sm: '1 / -1' } }}
              />

              <Button
              onClick={handelSaveButton}
                type="button"
                variant="contained"
                startIcon={<FitnessCenterRoundedIcon />}
                sx={{
                  gridColumn: { sm: '1 / -1' },
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: '#20291b',
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#45593a' },
                }}
              >
                Add workout
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default UserInput;