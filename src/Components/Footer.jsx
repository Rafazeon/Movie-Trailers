import React from 'react'
import { withStyles } from '@material-ui/core';
import { isMobile } from "react-device-detect";

const styles = theme => ({
    element: {
        position: 'absolute',
        right: 0,
        bottom: -20,
        left: 0,
        textAlign: 'center',
    }
  });

// require('../Assets/Caminho4.png') : require('../Assets/Caminho5.png')

function Footer(props) {
    const { classes, video } = props
    return (
        <div className={classes.element}>
            {!isMobile && <img width="100%" src={require('../Assets/Caminho7.png')} />} 
        </div>
    )
}

export default withStyles(styles)(Footer)
