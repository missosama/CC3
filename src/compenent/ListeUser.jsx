import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import User from './User';
import Accueil from './Accueil';

export default function ListUser() {
    
    const navigate = useNavigate()
    const { data } = useSelector(state => state.users)
    
    
    return (
        <div className='ListeUsers'>
            {data.length != 0 && data.users.map(item => <User key={item.id} 
            image={item.image} nom={`${item.firstName} ${item.lastName}`} details={e => navigate(`/DetailUser/${item.id}`)} Posts={e => navigate(`/ListePoste/${item.id}`)} />)}
        </div>
    )
}
