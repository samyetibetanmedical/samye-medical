import { Hero } from "@/components/about/Hero";
import { OurCenters } from "@/components/about/OurCenters";
import { Container } from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Samye Tibetan Medical Centre and the Sowa Rigpa tradition.",
};

const page = () => {
  return (
    <Container>
      <Hero />
      <OurCenters />
    </Container>
  );
};

export default page;
