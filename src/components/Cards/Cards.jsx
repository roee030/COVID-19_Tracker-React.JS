import React from 'react'
import { Card , CardContent , Typography, Grid } from '@material-ui/core';
import style from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classname';

const Cards = ({data : {confirmed , recovered , deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
      return (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5" >
                            <CountUp start={0} end={confirmed.value} duration={3} separator=","  />
                        </Typography>
                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography varaint="body2" >Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
                    <CardContent>
                    <Typography varaint="h5" >
                            <CountUp start={0} end={recovered.value} duration={3} separator=","  />
                        </Typography>
                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography color="textSecondary" >Real Date:</Typography>
                        <Typography varaint="body2" >Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
                    <CardContent>
                    <Typography varaint="h5" >
                            <CountUp start={0} end={deaths.value} duration={3} separator=","  />
                        </Typography>
                        <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography color="textSecondary" >Real Date:</Typography>
                        <Typography varaint="body2" >Number of deaths causes by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards

