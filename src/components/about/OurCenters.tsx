import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { doctors } from "@/config/common";
import { DoctorCard } from "../common/DoctorCard";
import { medicalCamps } from "@/config/common";
import Image from "next/image";

const OurCenters = () => {
  return (
    <Container className="mt-10 px-5">
      <Heading as="h2">Our Accredited Clinical Faculty</Heading>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} imgSrc={doc.imgSrc} docName={doc.docName} />
        ))}
      </div>
      <Heading as="h2" className="mt-10">Our Medical Camps</Heading>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {medicalCamps.map((camp, id) => (
          <div
            key={id}
            className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-80 w-full">
              <Image
                src={camp}
                alt={`Camps - ${id}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export { OurCenters };
