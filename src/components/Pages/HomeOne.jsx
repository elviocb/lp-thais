import React from "react";
import MainBanner from "../PageBanners/MainBannerOne";
// import Welcome from "../Common/Welcome";
// import About from "../Common/About";
import WhoAmI from "../Common/WhoAmI";
import Benefits from "../Common/Benefits";
// import Ctr from "../Common/Ctr";
// import Skill from "../Common/Skill";
import Funfact from "../Common/Funfact";
// import Team from "../Common/Team";
import HowWeWork from "../Common/HowWeWork";
// import Services from "../Common/Services";
// import WhyWeDifferent from "../Common/WhyWeDifferent";
import Work from "../Common/Work";
// import Price from "../Common/Price";
import Faq from "../Common/Faq";
import Testimonial from "../Common/Testimonial";
// import Blog from "../Common/Blog";
// import Partner from "../Common/Partner";
// import Subscribe from "../Common/Subscribe";
import Contact from "../Common/Contact";
import Footer from "../Common/Footer";
import GoTop from "../Common/GoTop";
// import DemoSidebar from "../Common/DemoSidebar/DemoSidebar";

class HomeOne extends React.Component {
  render() {
    return (
      <>
        {/* Main Banner */}
        <MainBanner />

        {/* Fact Area */}
        <Funfact />

        {/* How We Work */}
        <HowWeWork />

        {/* Who We Are Area */}
        <Benefits />

        {/* FAQ Area */}
        <Faq />

        {/* Strategy Area */}
        <WhoAmI />

        {/* About Area */}
        {/* <About /> */}

        {/* Welcome Area */}
        {/* <Welcome /> */}

        {/* CTR Area */}
        {/* <Ctr /> */}

        {/* Skill Area */}
        {/* <Skill /> */}

        {/* Team Area */}
        {/* <Team /> */}

        {/* Services Area */}
        {/* <Services /> */}

        {/* Why We Are Different */}
        {/* <WhyWeDifferent /> */}

        {/* Work Area */}
        <Work />

        {/* Price Area */}
        {/* <Price /> */}

        {/* Testimonials Area */}
        <Testimonial />

        {/* Blog Area */}
        {/* <Blog /> */}

        {/* Partner Area */}
        {/* <Partner /> */}

        {/* Subscribe Area */}
        {/* <Subscribe /> */}

        {/* Contact Area */}
        <Contact />

        {/* Footer Area */}
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
        {/* Demo Sidebar */}
        {/* <DemoSidebar /> */}
      </>
    );
  }
}

export default HomeOne;
