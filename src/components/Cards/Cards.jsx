import React from 'react'
import { Card , CardContent , Typography, Grid } from '@material-ui/core';
import style from './Cards.module.css'
import CountUp from 'react-countup';

const Cards = ({data : {confirmed , recovered , deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
      return (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5" >
                            <CountUp start={0} end={confirmed.value} duration={3} separator=","  />
                        </Typography>
                        <Typography color="textSecondary" >Real Date:</Typography>
                        <Typography varaint="body2" >Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5" >Real Data</Typography>
                        <Typography color="textSecondary" >Real Date:</Typography>
                        <Typography varaint="body2" >Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5" >Real Data</Typography>
                        <Typography color="textSecondary" >Real Date:</Typography>
                        <Typography varaint="body2" >Number of deaths causes by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards

