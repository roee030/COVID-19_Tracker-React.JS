import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({data, data: { confirmed, recovered, deaths ,lastUpdate} }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  const renderTitle = (index) => {
    switch(index) {
      case 0:
        return 'Infected';
      case 1:
        return 'Recovered';
      case 2:
        return 'Deaths';
      default:
        return '';
    }
  }
  const renderBottomLine = (index ) => {
    switch(index) {
      case 0:
        return 'Number of active cases of COVID-19.';
      case 1:
        return 'Number of recoveries from COVID-19.';
      case 2:
        return 'Number of deaths caused by COVID-19.';
      default:
        return '';
    }
  }

  const renderStyle = ( index ) => {
    switch(index) {
      case 0:
        return cx(styles.card, styles.confirmed) ;
      case 1:
        return cx(styles.card, styles.recovered);
      case 2:
        return cx(styles.card, styles.deaths);
      default:
        return '';
    }
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
      {
        Object.keys(data).map(function(key, index) {
          if(index === 3 ) return ''
          else{
            return(
              <Grid key={key} item xs={12} md={3} component={Card} className={ renderStyle(index) }>
              <CardContent>
            <Typography color="textSecondary" gutterBottom>
              
                {renderTitle(index)}
              
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={data[key].value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              {renderBottomLine(index)}
            </Typography>
          </CardContent>
        </Grid>
            )
          }
    
        })
      }
      </Grid>
    </div>
  );
};
export default Info;