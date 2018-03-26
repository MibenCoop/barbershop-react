import React from 'react';
import  Background  from '../components/Background'
import  Info  from '../components/Info'
import  Offer  from '../components/Offer'
import "../styles/App.css"
const HomePage = () => {
    return (
        <div>
            <Background />
            <Info />
            <Offer />
        </div>
    );
}


export default HomePage;