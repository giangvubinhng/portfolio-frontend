import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>TAKE A LOOK AT SOME OF MY PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/virtualsculpture.PNG'
              text='The Virtual Sculpture Garden will help keep people connected through the arts in a time of physical distancing by exhibiting 3D artwork from Virginia Tech and the surrounding community'
              label='VT Virtual Sculpture Garden'
              path='https://vr-garden.lib.vt.edu/'
              
              source={false}
            />
            <CardItem
              src='images/personalweb.PNG'
              text='This is my personal website, where you can find my resume, work, and learn about me!'
              label='Personal Website'
              source={true}
              path='/'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/worldowe.PNG'
              text=' Worldowe stands for "World Double We", the purpose of this forum is to connect the world together wherever and whenever!'
              label='Worldowe'
              path='http://www.worldowe.com/'
            />
            <CardItem
              src='images/firestar.PNG'
              text='A mouse clicking game that challenges the reflexes of its players by having players try and click on buttons that randomly spawn across the whole screen'
              label='FireStar'
              path='https://simmer.io/@ohwowow/firestar'
            />
            <CardItem
              src='images/penguiny.png'
              text='2D mobile game inspired by Flappy Bird. In this game, you will control a penguiny to dodge the obstacles that are coming at your way.'
              label='Penguiny'
              path='https://www.youtube.com/watch?v=WxoEH4LabGE'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;