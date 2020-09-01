import React from 'react';
import {Card, CardContent, Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data : {confirmed, recovered, deaths, lastUpdate} }) => {
  if (!confirmed) {
    return 'Loading...';

  }


  return(
    <div className={styles.container}>
      <Grid container spacing ={3}  justify="center">

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected, styles.cardHead)}>
          <CardContent>
            <div className="cardHead">INFECTED</div>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={4} separator="," />
            </Typography>
            <Typography color="textSeconday">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered, styles.cardHead)}>
          <CardContent>
             <div className="cardHead">RECOVERED</div>
              <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={4} separator="," />
              </Typography>
          <Typography color="textSeconday">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths, styles.cardHead)}>
          <CardContent>
             <div className="cardHead">DEATHS</div>
              <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={4} separator="," />
              </Typography>
            <Typography color="textSeconday">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of deaths caused</Typography>
          </CardContent>
        </Grid>

      </Grid>


    </div>
  )
}

export default Cards;
