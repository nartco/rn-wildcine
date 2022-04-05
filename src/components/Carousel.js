import {
  Dimensions,
} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');

const Carousel = ({data}) => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={2}
      renderAll={true}
      data={data}
      renderItem={({item}) => <CarouselItem item={item} />}
    />
  );
};

export default Carousel;
