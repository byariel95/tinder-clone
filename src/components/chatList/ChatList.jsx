import React from 'react';
import './ChatList.css'
import Chat from '../chat/Chat';


const ChatList = () => {
    return (
        <div className='chatlist'>
            <Chat
            name='Andry'
            message='hah nuuuu no puedo hoy :(' 
            timestamp='35 min ago'
            profilePic='https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/117444848_3207749179316343_2312175914363237521_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=7pxa-39va_IAX9zOqdi&_nc_ht=scontent.fgua3-2.fna&oh=83b561fbd4279d826e4d2d29a35b0c2d&oe=5F89E89B' 
            />
            <Chat
            name='Maribel'
            message='hey hey ..'
            timestamp='35 min ago'
            profilePic='https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/120855343_2412198599075838_2942187203163021595_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=0mhPcAPRmpcAX9GQFWk&_nc_ht=scontent.fgua3-2.fna&oh=073abe577206b09342c711667de417d5&oe=5FA2B25F' 
            />
            <Chat
            name='Myke'
            message='Hey que hay'
            timestamp='35 min ago'
            profilePic='https://scontent.fgua3-1.fna.fbcdn.net/v/t1.0-9/120195640_3355407844525042_5162112218104860211_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=aguchCMbt18AX9ZjNkN&_nc_ht=scontent.fgua3-1.fna&oh=b1b3befebf8a0b6076a73051a4ff64a2&oe=5FADD7F9' 
            />
            <Chat
            name='Dulce'
            message='holi!!!'
            timestamp='35 min ago'
            profilePic='https://scontent.fgua3-1.fna.fbcdn.net/v/t1.0-9/70898014_10157110544495091_5383848501761277952_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=gwxpyJeQdToAX_02lzS&_nc_ht=scontent.fgua3-1.fna&oh=89213457b28dab159d43fb66551903fe&oe=5FAC24DA' 
            />
        </div>
    )
}

export default ChatList
