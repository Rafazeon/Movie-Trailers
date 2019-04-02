import React from 'react'
import { withStyles } from '@material-ui/core';
import YouTube from '@u-wave/react-youtube';
import Grid from '@material-ui/core/Grid';
import { isMobile } from 'react-device-detect';

const styles = theme => ({
    element: {
        position: 'relative',
        top: -15
    },

    overlay: {
        opacity: 0.8,
        background: 'black'
    }
  });

function Youtube(video) {
    return (
    <YouTube
        video={video}
        autoplay
        allowFullscreen={true}
        width="100%"
        height={isMobile ? 400 : 1200}
        showRelatedVideos={false}
      />
    )
}

function verifyVideo(props) {
    const { video, bg } = props
    if(video) {
        return Youtube(video)
    }else{
        return <img width='100%' height={isMobile ? 830 : 1200} src={bg} />
    }
    
}

function Home(props) {
    const { classes } = props
    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
            <div className={classes.element}>
                <div className={classes.overlay}>
                    <div style={{position: 'relative', bottom: !isMobile && 180, marginTop: 50}}>
                        {verifyVideo(props)}
                    </div>
                </div>
            </div>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Home)