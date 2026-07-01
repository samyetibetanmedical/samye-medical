import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { SubHeading } from "../common/SubHeading";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className="my-10 mt-15 space-y-4">
      <Heading as="h1">
        Ancient Tibetan wisdom for Holistic Health and Wellness
      </Heading>
      <SubHeading className="">
        Samye Tibetan Medical Treatment Centers utilize the profound expertise
        of ancient Tibetan healing traditions to address comprehensive health
        challenges and human wellness.
      </SubHeading>
      <div className="flex items-center gap-5 justify-center mt-5">
        <button className="bg-primary text-white px-3 py-1 text-lg rounded-lg  font-semibold hover:opacity-90  hover:scale-105 transition-all duration-200 active:scale-95">
          <a href="#book-appointment">Book Appointment</a>
        </button>
        <button className="bg-white text-primary px-3 py-1 text-lg rounded-lg border border-primary font-semibold hover:opacity-90  hover:scale-105 transition-all duration-200 active:scale-95">
          <a href="#footer">Contact Us</a>
        </button>
      </div>

      <div className="flex items-center justify-center mx-auto ">
        <Image
          src={"/assets/hero.avif"}
          alt="Hero Image"
          width={1200}
          height={800}
          className="rounded-3xl"
        />
      </div>
    </Container>
  );
};

export { Hero };
