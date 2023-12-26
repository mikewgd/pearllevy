import React, { Fragment } from 'react';

import { Paragraph } from '../../styles';
import { Image } from './HomePage.css';

import EdwardSLevy from '../../../assets/images/IMG_2324.jpg';

export const HomePage = () => (
  <Fragment>
    <Image src={EdwardSLevy} alt="Edward S Levy & Frank Guagliardi" />
    <Paragraph>
      Edward S. Levy is a Magna Cum Laude graduate of Syracuse University Law School and
      has been practicing law since 1979. He specializes in residential and commercial
      real estate and has done over 4,00 closings. In addition to doing real estate,
      he also handles wills, Municipal Court
      matters and collections. Mr. Levy is extremely thorough and efficient and handles all
      matters in a professional manner.
    </Paragraph>
    <Paragraph>
      Frank Guagliardi, Esq. joined the firm in 2022, focusing
      his practice on residential real estate and land use matters. Mr. Guagliardi became
      a partner in April, 2023.
    </Paragraph>
    <Paragraph>
      Frank works closely with clients through all stages of both residential and
      commercial real estate closings. Frank also works with clients, architects,
      engineers, and planners throughout the land use process, from advising on
      issues related to zoning in connection with property acquisitions to
      appearing before local land use boards and other governmental bodies in
      connection with development approvals and permits.
    </Paragraph>
    <Paragraph>
      Prior to joining the firm, Frank worked as an associate in a New Jersey-based
      law firm, gaining invaluable experience representing a wide range of clients,
      from private developers to municipal councils and redevelopment agencies
      throughout New Jersey.
    </Paragraph>
    <Paragraph>
      Frank received his law degree, cum laude, from the Elisabeth Haub School
      of Law at Pace University.
    </Paragraph>
  </Fragment>
);
