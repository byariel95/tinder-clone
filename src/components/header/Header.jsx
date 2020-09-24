import React from 'react'
import { Link ,useHistory} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css';

 const Header = ({backButtom}) => {

    const history = useHistory();

    const backToIndex = () => history.replace(backButtom);
    
    return (
        <div className='header'>

            {backButtom ? (
                <IconButton onClick={ backToIndex }>
                    <ArrowBackIcon className='header__icon' fontSize='large'/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large'/>
                </IconButton>
            )}
            
            <Link to='/'>
                <img className='header__logo' src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="logo"/>
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className='header__icon' fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
