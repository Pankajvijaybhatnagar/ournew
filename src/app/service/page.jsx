import Breadcrumb from "@/components/Breadcrumb";
import FooterFive from "@/components/FooterFive";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import NavbarThree from "@/components/NavbarThree";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroup from "@/components/ServiceAreaGroup";





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
      <Breadcrumb title={'Service'} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterFive />

    </>
  );
};

export default page;
