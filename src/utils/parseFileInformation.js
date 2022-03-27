import Exifr from 'exifr';

const parseFileInformation = async (file) => {
  const rawData = await Exifr.parse(file, true);
  const data = [];
  Object.keys(rawData).forEach((key) => {
    data.push({ key, value: rawData[key]?.toString() });
  });
  return data;
};

export default parseFileInformation;
