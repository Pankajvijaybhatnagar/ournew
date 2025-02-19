import Breadcrumb from "@/components/Breadcrumb";
import ContactMain from "@/components/ContactMain";
import FooterFive from "@/components/FooterFive";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import NavbarThree from "@/components/NavbarThree";





export const metadata = {
  title: "Contact || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterFive />

    </>
  );
};

export default page;
