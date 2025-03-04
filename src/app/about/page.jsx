import AboutAreaOne from "@/components/AboutAreaOne";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaThree from "@/components/CounterAreaThree";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterFive from "@/components/FooterFive";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import NavbarFour from "@/components/NavbarFour";
import NavbarThree from "@/components/NavbarThree";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import WorkProcessOne from "@/components/WorkProcessOne";
import ContactAreaFour from "@/components/ContactAreaFour";
import CounterAreaFive from "@/components/CounterAreaFive";




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

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* ServiceAreaOne */}
      <ServiceAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      <CounterAreaThree />

      {/* Contact Area One */}
      <ContactAreaFour />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterFive />

    </>
  );
};

export default page;
