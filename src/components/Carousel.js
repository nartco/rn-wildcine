import {Dimensions} from 'react-native';
import React from 'react';
import CarouselSnap from 'react-native-snap-carousel';

import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');

const Carousel = ({data, navigation, autoplay, loop, firstItem}) => {
  return (
    <CarouselSnap
      data={data}
      renderItem={({item}) => (
        <CarouselItem item={item} navigation={navigation} />
      )}
      sliderWidth={width}
      firstItem={firstItem}
      inactiveSlideOpacity={0.5}
      inactiveSlideScale={0.9}
      loop={loop}
      itemWidth={width / 1.6}
      autoplay={autoplay}
      removeClippedSubviews={false}
    />
  );
};

export default Carousel;
