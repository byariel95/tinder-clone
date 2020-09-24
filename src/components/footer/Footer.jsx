import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <IconButton className='footerButtom__repeat'>
                <ReplayIcon fontSize='large'/>
            </IconButton>

            <IconButton className='footerButtom__left'>
                <CloseIcon fontSize='large'/>   
            </IconButton>

            <IconButton className='footerButtom__star'>
                <StarRateIcon fontSize='large'/>   
            </IconButton>

            <IconButton className='footerButtom__right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>

            <IconButton className='footerButtom__lightning'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Footer
