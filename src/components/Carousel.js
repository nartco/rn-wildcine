import {Dimensions} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');

const Carousel = ({data, navigation}) => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      renderAll={true}
      data={data}
      renderItem={({item}) => (
        <CarouselItem item={item} navigation={navigation} />
      )}
    />
  );
};

export default Carousel;
