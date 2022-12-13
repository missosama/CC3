import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListUser from './ListeUser';
import ListePost from './ListePoste';
import DetailUser from './detailUser';
import './compenent.css';

export default function Accueil() {
  return (
    <div>
        <header>Gestion des postes</header>
        <Routes>
            <Route exact path='/' element={ListUser}/>
            <Route path='/DetailUser' element={DetailUser}/>
            <Route path='/ListePost' element={LisgtePost}/>
        </Routes>
    </div>
  )
}
