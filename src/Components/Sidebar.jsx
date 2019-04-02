import React from 'react'
import { withStyles } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { isMobile, MobileView } from 'react-device-detect';

const styles = theme => ({
    bg: {
        background: 'black',
        position: 'absolute',
        width: 200,
        height: isMobile ? 900 : 1200,
        paddingBottom: 20,
        top: -5,
        zIndex: 100,
        marginTop: isMobile && 50
    },

    btnMovies: {
        color: '#fff', 
        cursor: 'pointer'
    },

    slide: {
        marginLeft: 10, 
        position: 'relative', 
        top: -8
    }
  });

function menuActive(genre, props) {
    const { setGenre, setVideo, setToggle } = props
    if(!isMobile) {
        return (setGenre(genre), setVideo(""), setToggle(false))
    }else{
        return (setGenre(genre), setVideo(""))
    }
}  

function Sidebar(props) {
    const { classes } = props
    const slideTrailer = "___________"
    const slide = "____"
    return (
    <Fade left>
        <aside className={classes.bg}>
            <ul style={{color: '#fff', marginTop: 50}}>
                <div style={{color: '#fff', fontSize: 30}}>Trailers</div>
                {slideTrailer}
                <div style={{marginLeft: 10, marginTop: 10}}>
                    <div className={classes.btnMovies} onClick={() => ( menuActive(1, props) )}>
                        <div>Super Heróis</div>
                        <div className={classes.slide}>{slide}</div>
                    </div>

                    <div className={classes.btnMovies} onClick={() => ( menuActive(2, props) )}>
                        <div>Comédia</div>
                        <div className={classes.slide}>{slide}</div>
                    </div> 

                    <div className={classes.btnMovies} onClick={() => ( menuActive(3, props) )}>
                        <div>Drama</div>
                        <div className={classes.slide}>{slide}</div>
                    </div> 

                    <div className={classes.btnMovies} onClick={() => ( menuActive(4, props) )}>
                        <div>Ação</div>
                        <div className={classes.slide}>{slide}</div>
                    </div> 

                    <div className={classes.btnMovies} onClick={() => ( menuActive(5, props) )}>
                        <div>Terror</div>
                        <div className={classes.slide}>{slide}</div>
                    </div> 
                </div>
            </ul>
        </aside>
    </Fade>
    )
}

export default withStyles(styles)(Sidebar);