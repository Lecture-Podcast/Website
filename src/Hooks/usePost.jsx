import { useState, useEffect } from 'react';
import axios from 'axios';

function usePost(url, data) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setsuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        if (Object.keys(data).length === 0) {
            // If data is empty, do nothing
            return;
        }
      setLoading(true);
      try {
        const res = await axios.post(url, data);
        if(res.status === 200){
            setsuccess(true)
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

  return { response, error, loading,success };
}

export default usePost;
