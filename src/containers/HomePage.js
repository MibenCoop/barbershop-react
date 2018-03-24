import React from 'react';
import '../App.css'
import  Background  from '../components/Background'
import  Info  from '../components/Info'
import  Offer  from '../components/Offer'

const HomePage = () => {

    //TODO Maybe think and refactor amount of variable

    return (
        <div>
            <Background />
            <Info />
            <Offer />
        </div>
    );
}


export default HomePage;