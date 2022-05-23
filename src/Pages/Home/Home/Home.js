import React from 'react';
import ContactsUs from '../AllRoutes/ContactsUs/ContactsUs';
import Bannar from '../Bannar/Bannar';
import Rewiew from '../Bannar/Review/Rewiew';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Rewiew></Rewiew>
            <ContactsUs></ContactsUs>
        </div>
    );
};

export default Home;