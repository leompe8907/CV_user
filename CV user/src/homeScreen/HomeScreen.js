import React from 'react'
import Banner from '../componentes/Banner/Banner'
import Nav from '../componentes/Nav/Nav'
import Row from '../componentes/Row/Row'
import Pops from '../request/api'
import "./HomeScreen.css"

function HomeScreen() {
  return (
  <div className='homeScreen'>
    <Nav/>
    <Banner/>
    {Pops.map((movi)=>{
        return (
          <Row 
            key={movi.name}
            title={movi.title}
            path={movi.path}
          />
        );
      })}
  </div>
  );
}

export default HomeScreen