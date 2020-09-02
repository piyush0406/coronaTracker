import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card, CardContent, Typography,Grid} from '@material-ui/core';



import styles from './Footer.module.css';

const Footer = () => {
  return(
      <div className={styles.container}>
        <div className={styles.footer}>
          &copy;Piyush-2020
          <div className={styles.socialIcons}>
              <a href="https://github.com/piyush0406" target="_blank"><FontAwesomeIcon icon={faGithub} color="white"/></a>
              <a href="https://github.com/https://piyush0406.github.io/" target="_blank"><FontAwesomeIcon icon={faConnectdevelop} color="white"/></a>
          </div>

        </div>

      </div>

  )
}

export default Footer
