import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Paper, Stack, Typography } from '@mui/material';
import { deleteDownloadWorkoutAPI, getAllHistoryWorkoutAPI } from '../services/apiServices';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function Download() {
  const [getDownloadData, setGetDownloadData] = useState([]);

  const chartData = getDownloadData.map((item) => ({
  date: item.workoutType,
  downloads: 1,
}));

  async function getAllDownloads() {
    try {
      const res = await getAllHistoryWorkoutAPI();

      console.log('History response:', res.data);
      setGetDownloadData(res.data);
    } catch (err) {
      console.log('Could not load screenshots:', err);
    }
  }

  useEffect(() => {
    getAllDownloads();
  }, []);

  const deleteWorkout=async(id)=>{
    try{
   const res = await deleteDownloadWorkoutAPI(id)
   console.log(res);
   getAllDownloads()

    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6f0', p: { xs: 2, md: 4 } }}>
     

      {/* //CHARTS */}
      <Card
  elevation={0}
  sx={{
    mb: 4,
    borderRadius: 3,
    border: '1px solid #e4e9de',
  }}
>
  <CardContent>
    <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>
      All downloads
    </Typography>

    <Typography color="text.secondary" sx={{ mb: 3 }}>
      Each bar represents one downloaded screenshot.
    </Typography>

    <Box sx={{ width: '100%', height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="downloads" fill="#718d50" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </CardContent>
</Card>
 <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
        Downloaded screenshots
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {getDownloadData.map((item, index) => (
          <Paper
  key={item.id || index}
  elevation={0}
  sx={{
    overflow: 'hidden',
    border: '1px solid #e1e7da',
    borderRadius: 3,
    bgcolor: 'white',
  }}
>
  <Box
    sx={{
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      bgcolor: '#f4f6f0',
      borderBottom: '1px solid #e1e7da',
    }}
  >
    <Box>
      <Typography fontWeight={700} color="#20291b">
        Workout report
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {item.formatedDate} · {item.formatedTime}
      </Typography>
    </Box>

    <IconButton
      aria-label="Delete workout screenshot"
      onClick={() => deleteWorkout(item.id)}
      color="error"
    >
      <DeleteOutlineRoundedIcon />
    </IconButton>
  </Box>

  {item.imageUrl || item.secure_url ? (
    <Box
      component="img"
      src={item.imageUrl || item.secure_url}
      alt="Downloaded workout screenshot"
      sx={{
        display: 'block',
        width: '100%',
        height: 360,
        objectFit: 'contain',
        bgcolor: '#eef1e9',
      }}
    />
  ) : (
    <Typography sx={{ p: 3 }} color="text.secondary">
      No screenshot URL found in this record.
    </Typography>
  )}
</Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Download;
