import React from 'react';
import '../App.css'
import  Background  from '../components/Background'
import  Info  from '../components/Info'
import  Offer  from '../components/Offer'
import  Footer  from '../components/Footer'

const HomePage = () => {

    //TODO Maybe think and refactor amount of variable

    return (
        <div>
            <Background />
            <Info />
            <Offer />
            <Footer />
        </div>
    );
}


export default HomePage;