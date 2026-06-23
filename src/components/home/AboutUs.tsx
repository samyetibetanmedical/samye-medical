import Image from "next/image";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";

const AboutUs = () => {
  return (
    <Container className="">
      <Heading as="h2">About Us</Heading>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="w-full md:w-1/2 text-justify   space-y-2">
          <Heading as={"h3"} className={"text-left"}>
            Foundations of the Traditional Tibetan Medical System
          </Heading>
          <p>
            The scholarly evolution of the Tibetan Medical system was
            institutionalized by the sovereign rulers of the 7th and 8th
            centuries. Through historic assemblies, esteemed physicians from
            China, Persia, India, and Greece converged to synthesize a
            sophisticated framework for pathology and therapeutic intervention.
          </p>
          <p>
            The scholarly evolution of the Tibetan Medical system was
            institutionalized by the sovereign rulers of the 7th and 8th
            centuries. Through historic assemblies, esteemed physicians from
            China, Persia, India, and Greece converged to synthesize a
            sophisticated framework for pathology and therapeutic intervention.
          </p>
          <p>
            Therapeutic interventions at Samye involve highly specialized
            botanical pharmacology, acupuncture, specialized massage, and
            structured dietary and lifestyle modifications. Each treatment
            protocol is precisely calibrated to the patient's unique biological
            requirements, targeting the etiology of the imbalance rather than
            merely alleviating superficial symptoms.
          </p>
          <p>
            Diagnostic precision begins with identifying the humoral
            constitution, which determines an individual's predisposition to
            certain pathologies. This constitutional profile is influenced by
            both congenital factors and dietary habits.
          </p>
          <p>
            During a clinical consultation, our physicians employ traditional
            pulse and urinalysis to assess organic function and identify humoral
            disharmony. This rigorous diagnostic process allows for the
            continuous adjustment of treatment based on patient response.
          </p>
          <p>
            Tibetan Medicine restores health by rebalancing the three primary
            humours through intricate formulations of natural minerals and
            flora. The human biological structure is interpreted through five
            distinct elements—space, air, fire, water, and earth—which manifest
            as the vital humours.
          </p>
          <p>
            Samye Medical Centre remains dedicated to the benevolence of Sowa
            Rigpa, integrating these venerable healing arts with contemporary
            medical standards. Established in 2022, our mission is to ensure
            that the Sowa Rigpa system—formally recognized by the Indian
            Medicine Central Council Act—remains accessible to those in need
            throughout India.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/pills.avif"}
            alt="Tibetian Pills"
            height={1000}
            width={600}
            className="rounded-xl"
          />
        </div>
      </div>
    </Container>
  );
};

export { AboutUs };
