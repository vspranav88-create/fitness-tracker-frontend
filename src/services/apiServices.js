import axiosService from "../api/axiosServices";


export const addWorkoutDetailsAPI=async(WorkoutDetails)=>{

    return await axiosService('POST','/workout',WorkoutDetails)
}

//view API CALL
export const viewWorkoutAPI=async(id)=>{

    return await axiosService('GET',`/workout/${id}`,{})
}

//update API 
export const updatedWorkoutAPI=async(id,WorkoutDetails)=>{

    return await axiosService('PUT',`/workout/${id}`,WorkoutDetails)
}

//download resume - add details to the history server
export const addToHistoryWorkoutAPI=async(WorkoutDetails)=>{
     return await axiosService('POST',`/history`,WorkoutDetails)
}


////get all download resume from history server
export const getAllHistoryWorkoutAPI=async()=>{
     
     return await axiosService('GET',`/history`,{})
}



export const uploadToCloudinary = async (imgData) => {

  const formData = new FormData();

  formData.append("file", imgData);

  formData.append(
    "upload_preset",
    "Fitness_tracker"
  );

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/bfdqhpov/image/upload",
    {
      method: "POST",
      body: formData
    }
  );

  return response.json();
};




//get all workout details from server
export const getAllWorkoutAPI=async()=>{

    return await axiosService('GET',`/workout`,{})
}


//delete a resume from the server
export const deleteAllWorkoutsAPI= async(id)=>{

     return await axiosService('DELETE',`/workout/${id}`,{})
}


//delete a resume from the history
export const deleteDownloadWorkoutAPI= async(id)=>{

     return await axiosService('DELETE',`/history/${id}`)
}


 