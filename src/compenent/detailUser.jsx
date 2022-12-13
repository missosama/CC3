import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.users)
    const selectedUser = data.users.filter(users => users.id == id);
    return (
        <div>
            {
                selectedUser.map(item=> <div className='userName'>
                    <div className='UserNameId'>
                        key={item.id}
                    </div>
                    
                    <div className='img'>
                        <img src={item.image} alt="Profile Picture" />
                    </div>
                    <div className='FullName'>
                        <span>NomComplet</span>
                        {`${item.firstName} ${item.lastName}`}
                    </div>
                    <div className='age'>
                        <span>L'age</span>
                        {item.age}
                    </div>
                    <div className='email'>
                        <span>Email</span>
                        {item.email}
                    </div>
                    <div className='phone'>
                        <span>Phone</span>
                        {item.phone}
                    </div>
                    <div className='height'>
                        <span>height</span>
                        {item.height}
                    </div>
                    <div className='width'>
                        <span>Width</span>
                        {item.width}
                    </div>
                    <div className='Birthdate'>
                        <span>Birthdate</span>
                        {item.birthdate}
                    </div>
                    <div className='Blood'>
                        <span>BloodType</span>
                        {item.bloodGroup}
                    </div>
                    <div className='eye'>
                        <span>Eye Color</span>
                        {item.eyeColor}
                    </div>
                    
                    </div>
                    
                    )
            }
        </div>

    )

}
            
            
            
            