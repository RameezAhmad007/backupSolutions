import React from "react";
import MainSection from "../../sections/main";
import ServiceSection from "../../sections/service";
import TeamSection from "../../sections/team";
import ContactSection from "../../sections/contact";
import MoreInfo from "../../sections/more-info";
import EnrollSection from "../../sections/enroll";
import FooterSection from "../../sections/footer";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <ServiceSection />
      <TeamSection />
      <EnrollSection />
      <ContactSection />
      <MoreInfo />
      <FooterSection />
    </>
  );
};

export default HomePage;
