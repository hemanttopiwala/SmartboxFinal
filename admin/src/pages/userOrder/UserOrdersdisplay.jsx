import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
const userOrdersdisplay = () => {
  return <FeaturedInfo />;
};

export default userOrdersdisplay;
