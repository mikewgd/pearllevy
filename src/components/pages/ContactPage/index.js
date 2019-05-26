import React, { Fragment } from 'react';

import { Paragraph, H2 } from '../../styles';
import { MapContainer, MapCanvas, MapFrame } from './ContactPage.css';

export const ContactPage = () => (
  <Fragment>
    <H2>Contact Us</H2>
    <Paragraph
      margin="0 auto"
      textAlign="center"
      maxWidth="350px"
    >
      If you have any questions or wish to inquire about any of the services that
      Mr. Levy provides please feel free to contact us by phone, facsimile transmission, or e-mail.
    </Paragraph>

    <Paragraph
      margin="20px 0 0 0"
      textAlign="center"
    >
      Telephone:
      {' '}
      <a href="tel:9732268200">973-226-8200</a>
      <br />
      Facsimile: 973-226-2660
      <br />
      <a href="mailto:info@pearllevy.net">Email Us</a>
    </Paragraph>

    <MapContainer>
      <MapCanvas id="gmap_canvas">
        <MapFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.559024873927!2d-74.28822618484875!3d40.85960457931617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c300ebc890c33d%3A0x10c4f53c5ea43f08!2sEdward+S.+Levy!5e0!3m2!1sen!2sus!4v1556107894288!5m2!1sen!2sus"
          width="600"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          style={{ border: 0 }}
          allowfullscreen
          id="gmap_canvas"
        />
      </MapCanvas>
    </MapContainer>
  </Fragment>
);
