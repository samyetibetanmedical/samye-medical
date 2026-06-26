import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { AboutUs } from "@/components/home/AboutUs";
import { Appointment } from "@/components/home/Appointment";
import { ClinicalServices } from "@/components/home/ClinicalServices";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";

const page = () => {
  return (
    <Container className="px-5">
      <Hero />
      <ClinicalServices />
      <AboutUs />
      <Appointment />
      <Locations />

      <Heading as="h2" className="mb-10 mt-20">Google Reviews</Heading>
      <iframe src="https://widgets.sociablekit.com/google-reviews/iframe/25692704" frameBorder="0" width="100%" height="1000px"></iframe>
    </Container>
  );
};

export default page;
