import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const proj = '<Project/>'
  return (
    <div className='cards'>
      <h1 className="project-title">{proj} <i className="fas fa-laptop-code"></i></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/virtualsculpture.PNG'
              text='The Virtual Sculpture Garden will help keep people connected through the arts in a time of physical distancing by exhibiting 3D artwork from Virginia Tech and the surrounding community'
              label='VT Virtual Sculpture Garden'
              path='https://vr-garden.lib.vt.edu/'
            />
            <CardItem
              src='images/MediCallAppDemo.gif'
              text='A 2022 Hackathon project made with friends. This is a mobile application that reminds user to drink medicine on time.'
              label='Medicall'
              path='https://github.com/giangvubinhng/medicall'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/worldowe.PNG'
              text=' Worldowe stands for "World Double We", the purpose of this forum is to connect the world together wherever and whenever!'
              label='Worldowe'
              path='https://www.worldowe.com/'
            />
            <CardItem
              src='images/firestar.PNG'
              text='A mouse clicking game that challenges the reflexes of its players by having players try and click on buttons that randomly spawn across the whole screen'
              label='FireStar'
              path='https://simmer.io/@ohwowow/firestar'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;