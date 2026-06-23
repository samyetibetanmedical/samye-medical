import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { clinicalServices } from "@/config/clinicalServices";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SubHeading } from "@/components/common/SubHeading";

const page = () => {
  return (
    <Container className="px-5">
      <Heading as="h1">Our Clinical Services</Heading>
      <SubHeading>
        Comprehensive diagnostic and treatment services rooted in the ancient
        wisdom of Tibetan medicine.
      </SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {clinicalServices.map((item) => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default page;
