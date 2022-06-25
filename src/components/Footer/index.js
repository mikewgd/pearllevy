import React from 'react';

import GoogleReviewBtn from '../../assets/images/google-button.svg';

import { Wrapper, OfficeAddress, EmailUs, ReviewBtn } from './Footer.css';

export const Footer = () => (
  <Wrapper>
    <ReviewBtn href="https://g.page/r/CQg_pF489cQQEAg/review" target="_blank" rel="noopener noreferrer">
      <img src={GoogleReviewBtn} alt="Edward S Levy" />
    </ReviewBtn>
    <EmailUs href="mailto:info@pearllevy.net">Email Us</EmailUs>
    <OfficeAddress>
      175 Fairfield Avenue, Suite 4B
      <br />
      West Caldwell, NJ 07006
    </OfficeAddress>
  </Wrapper>
);
