import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';
import Skills from './components/Skills';
import Other from './components/Other';
import Slideshow from './components/Slideshow';
import NavbarPage from './components/NavbarPage'

ReactDOM.render(
  <Layout>
    <NavbarPage />
    <Header />
    <Skills />
    <About />
    <Work />
    <Other />
    <Slideshow />
    <Footer />
  </Layout>,
  document.getElementById('root')
);
