import { useEffect, useState } from 'react';
import parseFileInformation from '../utils/parseFileInformation';
const useParse = (file) => {
  const [previewUrl, setPreviewUr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!file) return;
    setLoading(() => true);

    parseFileInformation(file)
      .then((data) => {
        setError(null);
        setInfo(data);
        setPreviewUr(URL.createObjectURL(file));
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [file]);

  return {
    previewUrl,
    loading,
    error,
    info,
  };
};

export default useParse;
