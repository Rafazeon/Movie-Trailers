import React from 'react'
import { withStyles } from '@material-ui/core';
// Super Heroes
import Capitao from '../Assets/Capitao.jpg'
import Superman from '../Assets/Superman.jpg'
import Flash from '../Assets/Flash.jpg'
import Batman from '../Assets/Batman.jpg'

import bgAmerica from '../Assets/Capitao2.jpg'
import bgSuperman from '../Assets/Superman2.jpg'
import bgBatman from '../Assets/Batman2.jpg'
import bgFlash from '../Assets/Flash2.jpg'

// Comédia
import Adam from '../Assets/Adam.jpg';
import Pineapple from '../Assets/Pineapple.jpg';
import Terry from '../Assets/Terry.jpg';
import Johnny from '../Assets/Johnny.png';

import Grid from '@material-ui/core/Grid';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Fade from 'react-reveal/Fade';


const styles = theme => ({
    element: {
        marginLeft: '13%',
        marginTop: '13%',
        cursor: 'pointer',
    },

    elementMobile: {
        cursor: 'pointer',
        marginTop: 250
    },

    overlayMobile: {
        height: 115, 
        width: '100%', 
        background: 'black', 
        opacity: 0.9    ,
        color: '#fff',
        margin: '1em',
        display: 'flex'
    },

    overlay: {
        opacity: 0.8,
        display: 'flex',
        height: 300
    },
  });

function videoUrls(genre) {
    switch(genre) {
        case 1:
         return [
             {embed: '6jYae7Qlq98', bg: bgAmerica, src: Capitao, name: 'Capitão América'},
             {embed: 'bRqAUqAFhNw', bg: bgSuperman, src: Superman, name: 'Superman'},
             {embed: 'fTmicuHMG7M', bg: bgFlash, src: Flash, name: 'Flash'},
             {embed: 'INp0MlRIRoA', bg: bgBatman, src: Batman, name: 'Batman'}
            ]
        case 2:
         return [
            {embed: 'yvwdtgvd4iA', bg: Adam, src: Adam, name: 'Este é o meu garoto'},
            {embed: 'jfgYc1pkzoI', bg: Pineapple, src: Pineapple, name: 'Pineapple Express'},
            {embed: 'y5nr345eBQ0', bg: Terry, src: Terry, name: 'As Branquelas'},
            {embed: 'QUj30-SjyIk', bg: Johnny, src: Johnny, name: 'Johnny English 3'}
         ]
        case 3:
         return []
        case 4: 
         return []
        case 5: 
         return []
        default: 
         return []
    }    

}

function MoviesMobile(props) {
    const { classes, genre } = props
    return (
        <Grid style={{margin: '1em'}} container spacing={16}>
            {videoUrls(genre).map((item) =>
            <Grid className={classes.overlayMobile} item xs={12}>
                <Fade>
                    <img onClick={() => props.setVideo(item.embed)} width={95} height={95} src={item.src} />
                    <div style={{color: '#fff', padding: 32}}>{item.name}</div>
                </Fade>
            </Grid>
            )}
        </Grid>
    )
}

function MoviesWeb(props) {
    const { classes, genre } = props
    const hgWeb = 300
    return (
        <Grid container spacing={16}>
        <div className={classes.element}>
            <div className={classes.overlay}>
            {videoUrls(genre).map((item) => 
            <Grid item xs={3}>
                <Fade>
                    <img onClick={() => props.setVideo(item.embed)} onMouseOver={() => props.setBg(item.bg)} style={{marginRight: 30}} width='90%' height={hgWeb} src={item.src} />
                </Fade>
            </Grid>
            )}
            </div>
        </div>
        </Grid>
    )
}

function MoviesResponsive(props) {
    console.log(props)
    const { classes } = props
    if(isMobile) {
        return MoviesMobile(props)
    }else{
        return MoviesWeb(props)
    }
}

export default withStyles(styles)(MoviesResponsive);