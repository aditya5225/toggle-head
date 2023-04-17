import React from 'react';
import NavbarComp from './components/NavbarComp';
import BannerComp from './components/bannerComp/BannerComp';
import SectionOneComp from './components/sectionOneComp/SectionOneComp';
import SectionTwoComp from './components/SectionTwoComp';
import FAQComponent from './components/faqComponent/FAQComponent';

const App = () => {
  return (
    <div className='container-fluid p-0'>
      <NavbarComp />
      <BannerComp />
      <SectionOneComp />
      <SectionTwoComp />
      <FAQComponent />
    </div>
  );
}

export default App;
