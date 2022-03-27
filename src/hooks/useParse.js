import { useEffect, useState } from 'react';
import parseFileInformation from '../utils/parseFileInformation';
const useParse = (file) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!file) return;
    setLoading(() => true);

    parseFileInformation(file)
      .then((data) => setInfo(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [file]);

  return {
    loading,
    error,
    info,
  };
};

export default useParse;
