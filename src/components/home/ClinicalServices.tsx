import React from "react";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { clinicalServices } from "@/config/clinicalServices";
import { ServiceCard } from "../common/ServiceCard";
import { SubHeading } from "../common/SubHeading";
import Link from "next/link";

const ClinicalServices = () => {

  clinicalServices.map((item) => {
    console.log(item.title, item.diseases)
})

  return (
    <Container className="space-y-3">
      <Heading as="h2">Clinical Services</Heading>
      <SubHeading>
        Explore our specialized clinical services designed to restore balance,
        support healing, and enhance overall well-being through the principles
        of Tibetan Medicine.
      </SubHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {clinicalServices.slice(0, 6).map((item) => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            diseases={item.diseases}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-primary px-3 py-1 text-lg rounded-lg border border-primary font-semibold hover:scale-105 active:scale-95 transition-all duration-200 hover:bg-primary hover:text-white">
          <Link href="/services">Show All Services</Link>
        </button>
      </div>
    </Container>
  );
};

export { ClinicalServices };
