import ImageColors from 'react-native-image-colors';
import Colors from '../constants/colors';

const fetchColors = async (setTextColor, uri) => {
  const resultColors = await ImageColors.getColors(uri, {
    fallback: Colors.primary,
    quality: 'low',
  });
  console.log({uri});
  setTextColor(resultColors);
};

export default fetchColors;
