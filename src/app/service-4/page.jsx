import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaTwo from "@/components/PricingAreaTwo";
import ServiceAreaGroupFour from "@/components/ServiceAreaGroupFour";





export const metadata = {
  title: "Digi1xprt - IT Solutions & Technology",
  description:
    "Digi1xprt provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 04'} />

      {/* ServiceAreaGroupFour */}
      <ServiceAreaGroupFour />

      {/* PricingAreaTwo */}
      <PricingAreaTwo />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
