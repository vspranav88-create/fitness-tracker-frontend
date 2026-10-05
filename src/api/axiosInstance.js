import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fitness-tracker-backend-nama.onrender.com/",
  timeout: 1000,
 
});



// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log("API response recevied...");
    
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if(error.response){
        const status = error.response.status

        if(status==401){
            console.log("Unauthorized error");
            
        }
        else if(status==404){
            console.log("API not found");
            
        }
        else if(status==500){
            console.log("something went erro");
            
        }
    }
    else if(error.request){
        console.log("no response from the server");
        
    }
    else{
        console.log("error" + error.message);
        
    }


    return Promise.reject(error);
  }
);

export default axiosInstance