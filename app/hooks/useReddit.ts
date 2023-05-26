import axios from 'axios';
import {useEffect, useState} from 'react';

export const useReddit = () => {
  const [reddits, setReddits] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api.reddit.com/r/pics/hot.json')
      .then(response => setReddits(response.data))
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return {reddits: reddits?.data?.children, loading};
};
