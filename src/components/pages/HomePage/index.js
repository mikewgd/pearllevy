import React, { Fragment } from 'react';

import { Paragraph } from '../../styles';
import { Image } from './HomePage.css';

import EdwardSLevy from '../../../assets/images/edwardslevy.jpg';

export const HomePage = () => (
  <Fragment>
    <Image src={EdwardSLevy} alt="Edward S Levy" />
    <Paragraph>
      Edward S. Levy is a Magna Cum Laude graduate of Syracuse University Law School and
      has been practicing law since 1979. He specializes in residential and commercial
      real estate and has done over 3,500 closings. In addition to doing real estate,
      he also handles personal injury, worker&apos;s compensation, wills, Municipal Court
      matters and collections. Mr. Levy is extremely thorough and efficient and handles all
      matters in a professional manner.
    </Paragraph>
    <Paragraph>
      Frank Guagliardi, Esq. has joined the Law Office of Edward S. Levy, focusing
      his practice on residential real estate and land use matters.
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
      throughout New Jersey. Prior to entering private practice, Frank served as
      a judicial law clerk in the New Jersey Superior Court, Civil Division and
      Special Civil Part.
    </Paragraph>
    <Paragraph>
      Frank received his law degree, cum laude, from the Elisabeth Haub School
      of Law at Pace University.
    </Paragraph>
  </Fragment>
);
