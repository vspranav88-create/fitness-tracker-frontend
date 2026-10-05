import React from 'react'
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import WorkoutsType from '../assets/WorkoutsType.json'
import BodyPart from '../assets/BodyPart.json'
import { updatedWorkoutAPI } from '../services/apiServices';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({viewWorkoutDetails,setViewWorkoutDetails}) {
    console.log(viewWorkoutDetails);
    

     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //handle updated here
  const handleUpdate=async()=>{
     const {fullName,workoutType,date,duration,calories,sets,repetitions,bodyPart,notes}=viewWorkoutDetails

     if(fullName==" " || workoutType=="" || date=="" || duration=="" || calories=="" || sets=="" || repetitions=="" || bodyPart=="" || notes==""){
      alert('please fill the form')
      
     }
     else{
 try{
  const res = await updatedWorkoutAPI(viewWorkoutDetails.id,viewWorkoutDetails)
  console.log(res);
  handleClose()
  

 }
 catch(err){
  console.log(err);
  
 }
     }
 
  }

  return (
    <div>
       <div>
      <Button onClick={handleOpen}
       variant="contained"
              
              sx={{
                flex: 1,
                bgcolor: '#20291b',
                textTransform: 'none',
                '&:hover': { bgcolor: '#45593a' },
              }}
      >EDIT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
        component="form"
       
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: 24,
          p: { xs: 2.5, sm: 4 },
        }}
      >
        <Typography id="edit-workout-title" variant="h5" fontWeight={700} mb={3}>
          Edit workout
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Full name"
            value={viewWorkoutDetails.fullName}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,fullName: e.target.value, }) }/>

          <TextField
            select
            label="Workout type"
             value={viewWorkoutDetails.workoutType}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,workoutType: e.target.value, }) }
            required
          >
            {
              WorkoutsType.WorkoutType.map(item=>(
              <MenuItem value={item} key={item}>{item}</MenuItem>
              ))
            }
            
           
          </TextField>

          <TextField
            select
            label="Body part"
            value={viewWorkoutDetails.bodyPart}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,bodyPart: e.target.value, }) }
            required
          >
            {
              BodyPart.BodyPart.map(item=>(
              <MenuItem value={item} key={item}>{item}</MenuItem>
              ))
            }
          
          </TextField>

          <TextField
            label="Workout date"
            type="date"
           value={viewWorkoutDetails.date}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,date: e.target.value, }) }
            slotProps={{ inputLabel: { shrink: true } }}
            required
          />

          <TextField
            label="Duration (minutes)"
            type="number"
           value={viewWorkoutDetails.duration}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,duration: e.target.value, }) }
            required
          />

          <TextField
            label="Calories burned"
            type="number"
            value={viewWorkoutDetails.calories}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,calories: e.target.value, }) }
            required
          />

          <TextField
            label="Sets"
            type="number"
             value={viewWorkoutDetails.sets}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,sets: e.target.value, }) }
           
          />

          <TextField
            label="Repetitions"
            type="number"
             value={viewWorkoutDetails.repetitions}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,repetitions: e.target.value, }) }

          />

          <TextField
            label="Notes"
             value={viewWorkoutDetails.notes}
            onChange={(e) => setViewWorkoutDetails({...viewWorkoutDetails,notes: e.target.value, }) }

            multiline
            minRows={3}
          />

          <Stack direction="row" spacing={2} justifycontent="flex-end">
            <Button type="button" onClick={handleClose} color="inherit">
              Cancel
            </Button>

            <Button 
            onClick={handleUpdate}
             variant="contained">
              Save changes
            </Button>
          </Stack>
        </Stack>
      </Box>
      </Modal>
    </div>
    </div>
  )
}

export default Edit
