import React from 'react';
import ContactsUs from '../../AllRoutes/ContactsUs/ContactsUs';
import Bannar from '../Bannar/Bannar';
import Rewiew from '../../AllRoutes/Review/Rewiew';
import Services from '../Services/Services';
import Container from '../../AllRoutes/Container/Container';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Rewiew></Rewiew>
            <Container></Container>
            <ContactsUs></ContactsUs>
        </div>
    );
};

export default Home;