import React from 'react';
import styled from 'styled-components';
import {
  faFacebook, faTwitter, faInstagram, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterWrap = styled.div`
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  height: 300px;
  margin-top: 3rem;
  background-color: #38120C;
  color: #7CA8AE;
  line-height: 1.9;
  .fonts {
    svg {
      margin-right: 1.5rem;
     }
  }
  ul {
    list-style: none;
    li {
      color: #7CA8AE;
    }
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <div>
        <h1>
          ES
        </h1>
        <p>
          Follow Us On Social Media For Updates!
        </p>
        <div className="fonts">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <p>
          Contact Us EntertainmentBase@gmail.com
        </p>
        <p>
          © Entertainment Base,
          {' '}
          {new Date().getFullYear()}
        </p>
      </div>
      <div>
        <h1>Explore EB</h1>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Shows</li>
          <li>Login</li>      
        </ul>
      </div>
      <div>
        <h1>About EB</h1>
        <ul>
          <li>Terms & Conditions</li>
          <li>About Us</li>
          <li>About EB</li>
          <li>Partner With Us</li>
        </ul>
      </div>
    </FooterWrap>
  );
}

export default Footer;
