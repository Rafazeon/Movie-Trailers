import React from 'react'
import { withStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import HamburgerIcon from '../Assets/Hamburguer_icon.png';

const styles = theme => ({
    mobileMenu: {
        height: 50, 
        width: '100%', 
        background: 'black', 
        opacity: 0.5,
        position: 'relative',
        top: -10
    },

    menu: {
        color: '#fff', 
        position: 'relative',
        top: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },


    headerTop: {
        position: 'relative',
        bottom: 10
    }
  });

// require('../Assets/Caminho3.png') : require('../Assets/Caminho6.png')

function verifyMobile(props) {
    const { classes, video, setToggle, toggle } = props
    if(isMobile) {
        return <div className={classes.mobileMenu}>
                  <div className={classes.menu}>
                    <img onClick={() => setToggle(!toggle)} style={{position:'relative', bottom: 7}} width={30} height={30} src={HamburgerIcon} />
                    <div style={{marginRight: 120}}>TRAILERS ONLINE</div>
                  </div>
               </div>
    }else{
        return <img className={classes.headerTop} width="100%" src={video} />
    }
}

function Header(props) {
    return (
        <div>
            {verifyMobile({...props})}
        </div>
    )
}

export default withStyles(styles)(Header)
