"use client";

import { LocationCard } from "../common/LocationCard";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { SubHeading } from "../common/SubHeading";
import { locations } from "@/config/common";

const Locations = () => {
  const [featuredLocation, ...otherLocations] = locations;

  return (
    <section id="locations">
      <Container>
        <Heading as="h2">Our Centers Across India</Heading>

        <SubHeading>
          Visit one of our Samye Medical Centres and experience authentic
          Tibetan healing and personalized wellness care.
        </SubHeading>

        <div className="mt-12 space-y-8">
          <LocationCard {...featuredLocation} />

          <div className="grid md:grid-cols-3 gap-6">
            {otherLocations.map((location) => (
              <LocationCard key={location.state} {...location} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Locations };
