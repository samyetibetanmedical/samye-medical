import { Hero } from "@/components/about/Hero";
import { OurCenters } from "@/components/about/OurCenters";
import { Container } from "@/components/common/Container";

const page = () => {
  return (
    <Container>
      <Hero />
      <OurCenters />
    </Container>
  );
};

export default page;
