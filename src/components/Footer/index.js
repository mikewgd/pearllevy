import React from 'react';

import { Wrapper, OfficeAddress, EmailUs } from './Footer.css';

export const Footer = () => (
  <Wrapper>
    <EmailUs href="mailto:info@pearllevy.net">Email Us</EmailUs>
    <OfficeAddress>
      175 Fairfield Avenue, Suite 4B
      <br />
      West Caldwell, NJ 07006
    </OfficeAddress>
  </Wrapper>
);
