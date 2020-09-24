import React,  {useState,useEffect }from 'react';
import TinderCard from 'react-tinder-card';
import database from  '../../config/config';
import './Card.css';


 const Card = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database
        .collection('people')
        .onSnapshot( snapshot => 
            setPeople(snapshot.docs.map(doc => doc.data()))
        );

        return () => {
            unsubscribe();
        }
    }, [])



    //setPeople([...people,'Andry', 'Andrea'])
    return (
        <div className='card__container'>
            {people.map( person => ( 
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default Card
