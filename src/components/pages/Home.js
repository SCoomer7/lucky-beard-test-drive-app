import React from "react";
import HeaderSection from "./HeaderSection";
import SearchCarSection from "./SearchCarSection";
import PeopleSection from "./PeopleSection";
import FooterBanner from "./FooterBanner";
import Section from "./Section";


const Home = ({scrollToSection}) => {
  return (
  <React.StrictMode>
    <HeaderSection scrollToSection={scrollToSection}/>
        <Section className="centered-container-blue">
          <SearchCarSection/>
          <PeopleSection/>
        </Section>
    <FooterBanner/>
  </React.StrictMode>
  );
};

export default Home;

