
import { useState, useEffect } from 'react';

function useApi(url) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      async function getData() {
        try {
          setIsLoading(true);
          setIsError(false);
          const response = await fetch(url);
          const result = await response.json();
          //console.log('API response:', result); // Log the response to see its structure
          if (Array.isArray(result.data)) {
            setItems(result.data);
          } else {
            console.error('API response data is not an array:', result);
            setItems([]);
          }
        } catch (error) {
          console.error(error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
  
      getData();
    }, [url]);
  
    return { items, isLoading, isError };
  }
  
  

export default useApi;



