import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {

    const [input, setinput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Andry',
            image: 'https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/117444848_3207749179316343_2312175914363237521_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=7pxa-39va_IAX9zOqdi&_nc_ht=scontent.fgua3-2.fna&oh=83b561fbd4279d826e4d2d29a35b0c2d&oe=5F89E89B',
            message: 'hey holi'
        },
        {
            name: 'Andry',
            image: 'https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/117444848_3207749179316343_2312175914363237521_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=7pxa-39va_IAX9zOqdi&_nc_ht=scontent.fgua3-2.fna&oh=83b561fbd4279d826e4d2d29a35b0c2d&oe=5F89E89B',
            message: 'heyyyyyyyyyyy'
        },
        
        {
            name: 'Andry',
            image: 'https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/117444848_3207749179316343_2312175914363237521_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=7pxa-39va_IAX9zOqdi&_nc_ht=scontent.fgua3-2.fna&oh=83b561fbd4279d826e4d2d29a35b0c2d&oe=5F89E89B',
            message: 'vamo a jugar amoung :v'
        },
        {
            message: 'ahah nuuuu no puedo hoy :('
        }

    ]);
    
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input}]);
        setinput("");
    } 

    return (
        <div className='chatscreen'>
            <p className='chatscreen__timestamp'>YOU MATCHED WITH ANDRY ON 05/05/20</p>
            {messages.map( (message) => (
                message.name ? (
                    <div className='chatscreen__message'>
                        <Avatar
                        className='chatscreen__image'
                        alt={message.name}
                        src={message.image}
                        />
                        <p className='chatscreen__text'>{message.message}</p>
                    </div>
                ) : (
                    <div className='chatscreen__message'>
                        <p className='chatscreen__textuser'>{message.message}</p>
                    </div>
                )
                
            ))}
         
                <form className='chatscreen__input'>
                    <input value={input} onChange={ e => setinput(e.target.value)} className='chatscreen__inputfield' placeholder='type your message...' type="text"/>
                    <button onClick={handleSend} type='submit' className='chatscreen__inputbuttom'> Send</button>
                </form>
        
        </div>
    );
}

export default ChatScreen
