import {useState, useEffect, useCallback} from 'react';

const useInfiniteScroll = fetchMoreData => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      return;
    }
    setIsFetching(true);
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchMoreData().finally(() => setIsFetching(false));
  }, [isFetching, fetchMoreData]);

  return [isFetching];
};

export default useInfiniteScroll;
