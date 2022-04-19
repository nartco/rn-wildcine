import ImageColors from 'react-native-image-colors';
import Colors from '../constants/colors';

const fetchColors = async uri => {
  const resultColors = await ImageColors.getColors(uri, {
    fallback: Colors.primary,
    quality: 'low',
  });

  return resultColors;
};

export default fetchColors;
