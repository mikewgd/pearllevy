import React, { Fragment } from 'react';

import { Paragraph } from '../../styles';
import { Image } from './HomePage.css';

import EdwardSLevy from '../../../assets/images/edwardslevy.jpg';

export const HomePage = () => (
  <Fragment>
    <Image src={EdwardSLevy} alt="Edward S Levy" />
    <Paragraph>
      Edward S. Levy is a Mangna Cum Laude graduate of Syracuse University Law School and
      has been practicing law since 1979. He specializes in residential and commercial
      real estate and has done over 3,000 closings. In additional to doing real estate,
      he also handles personal injury, worker&apos;s compensation, wills, Municipal Court
      matters and collections. Mr. Levy is extremely thorough and efficient and handles all
      matters in a professional manner.
    </Paragraph>
  </Fragment>
);
