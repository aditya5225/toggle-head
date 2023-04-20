import React from 'react';
import NavbarComp from './components/navbarComp/NavbarComp';
import BannerComp from './components/bannerComp/BannerComp';
import SectionOneComp from './components/sectionOneComp/SectionOneComp';
import SectionTwoComp from './components/SectionTwoComp';
import FAQComponent from './components/faqComponent/FAQComponent';
import FooterCmp from './components/FooterCmp';

const App = () => {
  return (
    <div className='container-fluid p-0'>
      <NavbarComp />
      <BannerComp />
      <SectionOneComp />
      <SectionTwoComp />
      <FAQComponent />
      <FooterCmp />
    </div>
  );
}

export default App;
