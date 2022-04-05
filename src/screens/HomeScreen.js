import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCarousel} from '../redux/action/homeAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const carouselMovies = useSelector(state => state.home.carouselMovies);
  useEffect(() => {
    dispatch(getCarousel());
    // console.log(carouselMovies);
    // return () => {
    //   second
    // }
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
