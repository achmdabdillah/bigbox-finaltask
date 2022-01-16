import React from 'react';
// Components
import Nav from '../components/Structure/Nav';
import Section1 from '../components/Sections/Section1';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import Section4 from '../components/Sections/Section4';
import Section5 from '../components/Sections/Section5';
import Section6 from '../components/Sections/Section6';
import Section7 from '../components/Sections/Section7';
import Footer from '../components/Structure/Footer';

const Home = () => {
	return (
		<div className="font-[Montserrat]">
			<Nav />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Footer />
		</div>
	);
};

export default Home;
