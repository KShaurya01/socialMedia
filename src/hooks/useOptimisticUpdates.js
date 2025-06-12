import {useState} from 'react';

const useOptimisticUpdates = initialData => {
  const [data, setData] = useState(initialData);

  const updateData = (newData, rollback) => {
    const previousData = data;
    setData(newData);
    return () => setData(previousData);
  };

  return [data, updateData];
};

export default useOptimisticUpdates;
