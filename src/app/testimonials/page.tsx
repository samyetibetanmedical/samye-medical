import { Container } from "@/components/common/Container";
import { Appointment } from "@/components/home/Appointment";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Samye Tibetan Medical Centre",
  description:
    "Discover real patient experiences and testimonials highlighting the benefits of authentic Tibetan medicine and holistic healthcare at Samye Tibetan Medical Centre.",
};

const page = () => {
  return (
    <Container>
      <Testimonials />
      <Appointment />
    </Container>
  );
};

export default page;
