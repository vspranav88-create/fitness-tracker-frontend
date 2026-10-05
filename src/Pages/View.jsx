import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToHistoryWorkoutAPI, viewWorkoutAPI,uploadToCloudinary } from '../services/apiServices'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Divider, Stack, Typography } from '@mui/material';
import Edit from '../Components/Edit';
import html2canvas from 'html2canvas'
import jsPDF from "jspdf"



function View() {

  const [viewWorkoutDetails,setViewWorkoutDetails]=useState({})

  //GET ID FROM URL
  const {id} = useParams()
  console.log(id);

  //API CALL
  const viewWorkout=async(id)=>{
     try{
    const res = await viewWorkoutAPI(id)
    console.log(res);
    setViewWorkoutDetails(res.data)
    
     }
     catch(err){
      console.log(err);
      
     }
  }

  useEffect(()=>{
    viewWorkout(id)
  },[])
  

  //download pdf
  const handlePdfDownload=async()=>{

    //get the id of paper
    console.log(document.getElementById('result'));

    //screenshot taked
    const canvas = await html2canvas(document.getElementById('result'),{scale:3})
    console.log(canvas);

    //link generated
    const imgData= canvas.toDataURL("image/png")
    console.log(imgData);

    
    //pdf generation
    const pdf = new jsPDF("p","mm","a4")

    //define width and height
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth)/canvas.width;
    //add image to pdf
    pdf.addImage(imgData,'PNG',0,0,pdfWidth,pdfHeight);
    //save the pdf
    pdf.save('workout.pdf')


    //get current date and time
    const timezone = new Date()
    console.log(timezone);
    //formated date and time
    const formatedDate = `${timezone.toLocaleDateString()} ,  ${timezone.toLocaleTimeString()}`
    console.log(formatedDate);


     try{
      const cloudinaryResponse =
      await uploadToCloudinary(imgData);

    console.log("Cloudinary:", cloudinaryResponse);

     // Save only URL in JSON Server
    const response = await addToHistoryWorkoutAPI({
      ...viewWorkoutDetails,

      // new history id
      id: Date.now(),

      // original resume id
      resumeId: viewWorkoutDetails.id,

      formatedDate:
        `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,

      imageUrl: cloudinaryResponse.secure_url
    });

    console.log("History:", response);

   if(response.status==201){
    alert('successfull')
   }

  // const res = await addToHistoryWorkoutAPI(viewWorkoutDetails)
  // console.log(res);
  
    }
    catch(err)
    {
      console.log(err);
      alert('something went wrong')
      
    }








    console.log(viewWorkoutDetails);
    
  //  
  }
  return (
    <div>

   <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f6f0',
        display: 'grid',
        placeItems: 'center',
        p: 2,
      }}
    >
      <Paper
        id="result"
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 600,
          overflow: 'hidden',
          border: '1px solid #e4e9de',
          borderRadius: 4,
          bgcolor: 'white',
          boxShadow: '0 24px 70px rgba(35,49,28,0.1)',
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            color: 'white',
            background:
              'linear-gradient(135deg, #20291b 0%, #45593a 65%, #748d50 100%)',
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: '#c7f36b', letterSpacing: 2 }}
          >
            YOUR FITNESS JOURNAL
          </Typography>

          <Typography variant="h4" fontWeight={800} sx={{ mt: 1 }}>
            {viewWorkoutDetails?.fullName || 'Workout summary'}
          </Typography>

          
      <Typography sx={{ color: '#e1e7d9', mt: 1 }}>
       workoutType :  {viewWorkoutDetails?.workoutType || 'Your workout details'}
      </Typography>

        </Box>

        <Stack spacing={2} sx={{ p: { xs: 3, md: 4 } }}>
          <Divider>
            <Typography
              variant="overline"
              sx={{ color: '#71805f', letterSpacing: 1 }}
            >
              WORKOUT DETAILS
            </Typography>
          </Divider>

          
          <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
            <Typography color="text.secondary">Body part :</Typography>
        <Typography fontWeight={600}>
          {viewWorkoutDetails?.bodyPart || '—'}
        </Typography>
          </Stack>

          <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
            <Typography color="text.secondary">Date :</Typography>
        <Typography fontWeight={600}>
          {viewWorkoutDetails?.date}
        </Typography>
          </Stack>

          <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
           <Typography color="text.secondary">Duration :</Typography>
        <Typography fontWeight={600}>
          {viewWorkoutDetails?.duration
            ? `${viewWorkoutDetails.duration} minutes`
            : ''}
        </Typography>
          </Stack>

          <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
            <Typography color="text.secondary">Calories :</Typography>
        <Typography fontWeight={600}>
          {viewWorkoutDetails?.calories
            ? `${viewWorkoutDetails.calories} kcal`
            : '—'}
        </Typography>
          </Stack>

          <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
           <Typography color="text.secondary">Sets :</Typography>
        <Typography fontWeight={600}>
          {viewWorkoutDetails?.sets || '—'}
        </Typography>
          </Stack>

          <Stack sx={{gap:1}} direction="row" justifycontent="space-between">
            <Typography color="text.secondary">Repetitions :</Typography>
        <Typography fontWeight={600}>
          {viewWorkoutDetails?.repetitions || '—'}
        </Typography>
          </Stack>


          <Divider />

          <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#f4f6f0' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Notes
            </Typography>

            <Typography variant="body1">
              {viewWorkoutDetails?.notes || 'No notes added.'}
            </Typography>
          </Box>

         
        </Stack>
        
      </Paper>
       <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ pt: 1 }}
          >
          
            <Edit variant="outlined"   
              sx={{
                flex: 1,
                bgcolor: '#20291b',
                textTransform: 'none',
                '&:hover': { bgcolor: '#45593a' },
              }}
            viewWorkoutDetails={viewWorkoutDetails} setViewWorkoutDetails={setViewWorkoutDetails}/>

            <Button
            onClick={handlePdfDownload}
              variant="outlined"
              color="error"
             
              sx={{ flex: 1, textTransform: 'none' }}
            >
              Download
            </Button>

          </Stack>
    </Box>
    </div>
  )
}

export default View
