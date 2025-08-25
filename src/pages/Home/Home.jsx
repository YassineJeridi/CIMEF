import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import About from '../../components/home/About/About';
import Services from '../../components/home/Services/Services';
import Partners from '../../components/home/Partners/Partners';
import Istore from '../../components/home/Istore/Istore';
import Stats from '../../components/home/Stats/Stats';
import Testimonials from '../../components/home/Testimonials/Testimonials';
import styles from './Home.module.css';

const Home = () => (
    <div className={styles.home}>
        <Hero />
        <About />
        <Services />
        <Istore/>
        <Partners />
        <Stats />
        <Testimonials />
    </div>
);

export default Home;
