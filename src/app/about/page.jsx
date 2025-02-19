import AboutAreaOne from "@/components/AboutAreaOne";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaOne from "@/components/CounterAreaOne";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterFive from "@/components/FooterFive";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import NavbarFour from "@/components/NavbarFour";
import NavbarThree from "@/components/NavbarThree";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import WorkProcessOne from "@/components/WorkProcessOne";




export const metadata = {
  title: "About || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* ServiceAreaOne */}
      <ServiceAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterFive />

    </>
  );
};

export default page;
