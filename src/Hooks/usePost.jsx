import { useState, useEffect } from 'react';
import axios from 'axios';

function usePost(url, data) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setsuccess] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
        if (Object.keys(data).length === 0) {
            // If data is empty, do nothing
            return;
        }
      setLoading(true);
      try {
        const res = await axios.post(url, data);
        console.log(res)
        if(res.status === 200){
            setsuccess(true)
            if(res?.data?.Designation === "student"){
              setMessage("CONGRATULATIONS 🎊 Get ready for a revolution! Lecture Podcast (LP)🎤 brings top educators to your fingertips📈. Thrilling, impactful learning awaits  stay tuned😊")
            }else{
              setMessage("Welcome, educators! Elevate📈 teaching with Lecture Podcast (LP)🎤. Engage, innovate, and inspire ♾️together as a community to make a lasting impact!😊")
            }
        }
        setResponse(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(error.response.data.error);
        setLoading(false);
      }
    };

    // if (data.length == 0) {
      fetchData();
    // }
  }, [url, data]);

  return { response, error, loading,success,message };
}

export default usePost;
