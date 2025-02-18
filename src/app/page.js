import AboutAreaFive from "@/components/AboutAreaFive";
import AboutAreaFour from "@/components/AboutAreaFour";
import AboutAreaNine from "@/components/AboutAreaNine";
import AboutAreaSeven from "@/components/AboutAreaSeven";
import AboutAreaSix from "@/components/AboutAreaSix";
import AboutAreaThree from "@/components/AboutAreaThree";
import BannerEight from "@/components/BannerEight";
import BannerFive from "@/components/BannerFive";
import BannerFour from "@/components/BannerFour";
import BannerNine from "@/components/BannerNine";
import BannerOne from "@/components/BannerOne";
import BannerTwo from "@/components/BannerTwo";
import BlogAreaFive from "@/components/BlogAreaFive";
import BlogAreaSeven from "@/components/BlogAreaSeven";
import CaseStudyAreaTwo from "@/components/CaseStudyAreaTwo";
import FooterFour from "@/components/FooterFour";
import NavbarFive from "@/components/NavbarFive";
import NavbarFour from "@/components/NavbarFour";
import NavbarThree from "@/components/NavbarThree";
import ServiceAreaEight from "@/components/ServiceAreaEight";
import ServiceAreaFive from "@/components/ServiceAreaFive";
import ServiceAreaFour from "@/components/ServiceAreaFour";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import ServiceAreaThree from "@/components/ServiceAreaThree";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import TeamAreaFive from "@/components/TeamAreaFive";
import TeamAreaFour from "@/components/TeamAreaFour";
import TeamAreaSix from "@/components/TeamAreaSix";
import TeamAreaThree from "@/components/TeamAreaThree";
import TeamAreaTwo from "@/components/TeamAreaTwo";
import TestimonialFive from "@/components/TestimonialFive";
import WorkProcessFour from "@/components/WorkProcessFour";
import WorkProcessSeven from "@/components/WorkProcessSeven";






export const metadata = {
  title: "Digi1xprt - IT Solutions & Technology",
  description:
    "Digi1xprt provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Banner Five */}
      <BannerTwo/>

      {/* About Area Five */}
      <AboutAreaFour />

      {/* Service Area Five */}
      <ServiceAreaFour/>

      {/* Case Study Area Two */}
      {/* <CaseStudyAreaTwo /> */}

      {/* About Area Six */}
      <AboutAreaSeven/>

      {/* Team Area Three */}
      <TeamAreaFive />

      {/* Work Process Four */}
      <WorkProcessSeven />


      {/* Testimonial Five */}
      {/* <TestimonialFive /> */}

      {/* Blog Area Five */}
      <BlogAreaFive/>

      {/* Footer Four */}
      <FooterFour />


    </>
  );
};

export default page;
