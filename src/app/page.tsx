import { Container } from "@/components/common/Container";
import { AboutUs } from "@/components/home/AboutUs";
import { Appointment } from "@/components/home/Appointment";
import { ClinicalServices } from "@/components/home/ClinicalServices";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";

const page = () => {
  return (
    <Container>
      <Hero />
      <ClinicalServices />
      <AboutUs />
      <Appointment />
      <Locations />
    </Container>
  );
};

export default page;
