import React, { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import { deleteAllWorkoutsAPI, getAllWorkoutAPI } from '../services/apiServices';
import { Link } from 'react-router-dom';
import Edit from '../Components/Edit';




function Saved() {

    const [allWorkouts,setAllWorkouts]=useState([])

      //dummy data create
    const [dummyAllWorkouts,setDummyAllWorkouts]=useState([])


    //search
    const [searchKey,setSearchKey]=useState('')
    console.log(searchKey);

    //filter
    const [selectedWorkout, setSelectedWorkout] = useState('');
const [selectedBodyPart, setSelectedBodyPart] = useState('');
const [selectedDate, setSelectedDate] = useState('');


const filteredWorkouts = dummyAllWorkouts.filter((item) => {
  const matchesSearch = (item.workoutType || '').toLowerCase().includes(searchKey.toLowerCase());

  const matchesWorkout =
    selectedWorkout === '' || item.workoutType === selectedWorkout;

  const matchesBodyPart =
    selectedBodyPart === '' || item.bodyPart === selectedBodyPart;

  const matchesDate =
    selectedDate === '' || item.date === selectedDate;

  return matchesSearch && matchesWorkout && matchesBodyPart && matchesDate;
});
    

  


    const getallWorkout=async()=>{
    try{
   const res = await getAllWorkoutAPI()
   console.log(res);
   setAllWorkouts(res.data)
   //search
   setDummyAllWorkouts(res.data)
   
    }
    catch(err){
        console.log(err);
        
    }
    }

    useEffect(()=>{
   getallWorkout()
    },[])

    // //useMemo hook - search
    // const searchOut = useMemo(()=>{
    //   setAllWorkouts(dummyAllWorkouts.filter(item=>item.workoutType.toLowerCase().includes(searchKey.toLowerCase())))
    // },[searchKey])


    //delete function

    const deleteWorkouts=async(id)=>{
   
      const res = await deleteAllWorkoutsAPI(id)
  console.log(res);
  getallWorkout()
    }

    //CHARTS
    const chartData = allWorkouts.map((item) => ({
  name: item.workoutType,
  calories: Number(item.calories) || 0,
}));



  return (
    <div>
          <Box
  sx={{
    minHeight: '100vh',
    bgcolor: '#f4f6f0',
    py: { xs: 3, md: 6 },
    px: { xs: 2, md: 4 },
  }}
>
  <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
    {/* Page heading */}
    <Card
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
        <FitnessCenterRoundedIcon sx={{ color: '#c7f36b', fontSize: 34 }} />
        <Typography
          variant="overline"
          sx={{ color: '#c7f36b', letterSpacing: 2 }}
        >
          YOUR FITNESS JOURNAL
        </Typography>
      </Stack>

      <Typography variant="h3" fontWeight={800} sx={{ mb: 1 }}>
        Saved workouts
      </Typography>

      <Typography sx={{ color: '#e1e7d9' }}>
        Review your sessions and keep track of your progress.
      </Typography>
    </Card>

    {/* Summary cards */}
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
        gap: 2,
        mb: 4,
      }}
    >
      <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid #e4e9de' }}>
        <CardContent>
          <Typography color="text.secondary">Total sessions</Typography>
          <Typography variant="h4" fontWeight={800} sx={{ mt: 1, color: '#20291b' }}>
            {dummyAllWorkouts.length}
          </Typography>
        </CardContent>
      </Card>

     
      
    </Box>

    <Card
  elevation={0}
  sx={{
    mb: 4,
    borderRadius: 3,
    border: '1px solid #e4e9de',
  }}
>
  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
    <Typography variant="h5" fontWeight={800} color="#20291b">
      Calories by workout
    </Typography>

    <Typography color="text.secondary" sx={{ mb: 3 }}>
      Calories burned in your saved workouts.
    </Typography>

    <Box sx={{ width: '100%', height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" fill="#718d50" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </CardContent>
</Card>

    {/* Search */}
   <Card
  elevation={0}
  sx={{
    mb: 4,
    p: { xs: 2, sm: 2.5 },
    borderRadius: 3,
    border: '1px solid #e4e9de',
  }}
>
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '2fr 1fr 1fr 1fr' },
      gap: 2,
    }}
  >
    <TextField
      label="Search workouts"
      placeholder="Search by workout type"
      value={searchKey}
      onChange={(event) => setSearchKey(event.target.value)}
    />

    <TextField
      select
      label="Workout"
      value={selectedWorkout}
      onChange={(event) => setSelectedWorkout(event.target.value)}
    >
      <MenuItem value="">All workouts</MenuItem>
      <MenuItem value="Running">Running</MenuItem>
      <MenuItem value="Cycling">Cycling</MenuItem>
      <MenuItem value="Weight Training">Weight Training</MenuItem>
      <MenuItem value="Yoga">Yoga</MenuItem>
      <MenuItem value="Swimming">Swimming</MenuItem>
    </TextField>

    <TextField
      select
      label="Body part"
      value={selectedBodyPart}
      onChange={(event) => setSelectedBodyPart(event.target.value)}
    >
      <MenuItem value="">All body parts</MenuItem>
      <MenuItem value="Legs">Legs</MenuItem>
      <MenuItem value="Chest">Chest</MenuItem>
      <MenuItem value="Arms">Arms</MenuItem>
      <MenuItem value="Back">Back</MenuItem>
      <MenuItem value="Core">Core</MenuItem>
      <MenuItem value="Full body">Full body</MenuItem>
    </TextField>

    <TextField
      label="Date"
      type="date"
      value={selectedDate}
      onChange={(event) => setSelectedDate(event.target.value)}
      slotProps={{ inputLabel: { shrink: true } }}
    />
  </Box>
</Card>
    

    <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
      Workout history
    </Typography>

    <Stack spacing={2.5}>
      {filteredWorkouts.map((item) => (
        <Card 
          elevation={0}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '230px 1fr' },
            overflow: 'hidden',
            borderRadius: 4,
            border: '1px solid #e4e9de',
            bgcolor: 'white',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 14px 32px rgba(32, 41, 27, 0.1)',
            },
          }}
        >
          {/* Workout title panel */}
          <Box
            sx={{
              p: 3,
              color: 'white',
              background:
                'linear-gradient(145deg, #20291b 0%, #45593a 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifycontent: 'space-between',
              minHeight: 190,
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: '#c7f36b', letterSpacing: 1.5 }}
            >
              WORKOUT
            </Typography>

            <Box>
              <Typography variant="h5" fontWeight={800}>
                {item.fullName}
              </Typography>

              <Typography sx={{ mt: 1, color: '#e1e7d9' }}>
                {item.workoutType}
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: '#d3dacb' }}>
              {item.bodyPart}
            </Typography>
          </Box>

          {/* Workout details */}
          <CardContent
            sx={{
              p: { xs: 2.5, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              justifycontent: 'space-between',
            }}
          >
            <Stack direction="row" spacing={1} useFlexGap flexwrap="wrap">
              <Chip
                icon={<CalendarMonthRoundedIcon />}
                label={item.date}
                sx={{ bgcolor: '#f4f6f0' }}
              />

              <Chip
                icon={<LocalFireDepartmentRoundedIcon />}
                label={`${item.calories} kcal`}
                sx={{ bgcolor: '#f4f6f0' }}
              />

              <Chip
                label={`${item.duration} min`}
                sx={{ bgcolor: '#f4f6f0' }}
              />
            </Stack>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1.5fr' },
                gap: 2,
                my: 3,
                p: 2,
                borderRadius: 3,
                bgcolor: '#f7f8f4',
              }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Sets
                </Typography>
                <Typography fontWeight={700}>{item.sets}</Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  Repetitions
                </Typography>
                <Typography fontWeight={700}>{item.repetitions}</Typography>
              </Box>

              <Box sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' } }}>
                <Typography variant="body2" color="text.secondary">
                  Note
                </Typography>
                <Typography fontWeight={600}>{item.notes}</Typography>
              </Box>
            </Box>

            <Stack direction="row" justifycontent="flex-end" sx={{ mt: 1 }}>
              <Button
              onClick={()=>deleteWorkouts(item.id)}
                variant="outlined"
                color="error"
                sx={{
                  px: 3,
                  borderRadius: 2,
                  textTransform: 'none',
                }}
              >
                Delete
              </Button>

               
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
</Box>

    </div>
  )
}

export default Saved
