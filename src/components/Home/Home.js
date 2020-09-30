import React from 'react';
import Header from './../Header/Header';
import './Home.css';

const Home = () => {
    document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./Rectangle.png') no-repeat";
    document.body.style.backgroundSize = "cover";
    return (
        <>
            <Header bg={true}></Header>
            <div className="home">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Cox's Bazar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis Aristidem non mortuum diligit? Rationis enim perfectio est virtus; Duo Reges: constructio interrete. Et quidem, Cato, hanc totam copiam iam Lucullo nostro notam esse oportebit; Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet? Et quidem saepe q</p>
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;