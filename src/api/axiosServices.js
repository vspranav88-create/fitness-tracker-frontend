import axiosInstance from "./axiosInstance";

const axiosService=async(httpMethod,url,reqBody)=>{
 try{

    const res = await axiosInstance({
        method:httpMethod,
        url,
        data:reqBody
    })
     return res

 }
 catch(err){
    console.log(err,"error occured");
    throw err
    
 }
}

export default axiosService