import React from 'react';
import NavbarComp from './components/NavbarComp';
import BannerComp from './components/bannerComp/BannerComp';
import SectionOneComp from './components/sectionOneComp/SectionOneComp';

const App = () => {
  return (
    <div className='container-fluid p-0'>
      <NavbarComp />
      <BannerComp />
      <SectionOneComp />
    </div>
  );
}

export default App;
