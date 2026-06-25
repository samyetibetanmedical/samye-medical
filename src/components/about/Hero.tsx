import React from "react";
import { Heading } from "../common/Heading";
import { Container } from "../common/Container";
import Image from "next/image";
import { SubHeading } from "../common/SubHeading";

const Hero = () => {
  return (
    <Container className="px-5">
      <Heading as="h1" className="md:max-w-none">
        The Sowa Rigpa Medical Paradigm
      </Heading>

      <div className="mt-5 flex md:flex-row flex-col gap-5">
        <Image
          src={"/assets/about-1.avif"}
          width={600}
          alt="Tibetian Image"
          height={700}
          className="rounded-lg "
        />

        <div className="flex flex-col gap-5 text-justify p-3 bg-neutral-100  w-full md:w-1/2 rounded-lg">
          <p>
            The Tibetan Medical System identifies 404 distinct pathologies,
            categorized into four primary etiologies: karmic influences,
            psychological/energetic disturbances, physiological imbalances, and
            self-limiting conditions often remediable through lifestyle
            modification.
          </p>
          <p>
            According to the 'Gyud-Zhi' (The Four Medical Tantras), no ailment
            is beyond the reach of comprehensive healing.
          </p>

          <p>
            Samye Tibetan Medical presents an intensive clinical programme
            developed through extensive observation of thousands of patients.
            Our commitment to your recovery is unparalleled; we provide a
            restorative 3-4 month therapeutic course for specific chronic
            conditions. We are so confident in our holistic protocols that we
            offer a financial assurance policy for patients who adhere strictly
            to the prescribed dietary regimens and provide regular monthly
            clinical updates.
          </p>
          <p>
            Our specialized care protocols address:Diabetes
            MellitusHypertensionThyroid IrregularitiesHyperuricemiaProstate
            HealthChronic GastritisNeurological ConditionsBronchial
            AsthmaHemorrhoidsChronic SinusitisSciatic NeuralgiaRenal
            CalculiMigraine Cephalalgia
          </p>
        </div>
      </div>

      <Heading as="h2" className="mt-16">
        The Science of Tibetan Therapy
      </Heading>
      <SubHeading>
        Pharmacopoeia, Clinical Applications and Health Efficacy.
      </SubHeading>

      <div className="max-w-2xl mx-auto mt-8 rounded-2xl border border-primary/15 bg-linear-to-br from-primary/5 to-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 ">
        <div className="flex items-center justify-between md:flex-row flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Tibetan Medicine Handbook
            </h3>

            <p className="mt-2 text-justify text-neutral-600 leading-relaxed">
              Explore the medicinal formulations, botanical ingredients,
              therapeutic uses, and health benefits used in the Tibetan medical
              system.
            </p>
          </div>

          <a
            href="/assets/Tibetan Medicine.pdf"
            target="_blank"
            className="shrink-0 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
          >
            View PDF →
          </a>
        </div>
      </div>

      <div className="mt-20">
        <Heading as="h2" className="md:max-w-none">
          The Vision Behind Samye Tibetan Medical Center
        </Heading>

        <div className="flex md:flex-row flex-col mt-10 gap-5">
          <Image
            width={1000}
            height={500}
            alt="Founders"
            src={"/assets/about-2.avif"}
            className="rounded-lg "
          />

          <div className="flex flex-col gap-5 text-justify">
            <p>
              Samye Tibetan Traditional Medical Centre, headquartered in
              Guwahati, Assam, represents the realization of a profound vision
              by its founder, Tashi Topgyal. His life is a testament to
              resilience and an unwavering commitment to humanitarian service.
              Born into a nomadic family in the Changthang desert of Ladakh,
              Tashi Topgyal’s formative years were defined by duty and survival
              following the displacement of his family from Ngari, Tibet.
            </p>
            <p>
              Taking on the mantle of family provider at age 13 after his
              father’s passing, he supported his mother before embarking on a
              career of service in the Indian Army at age 16. It was during
              these years that his mother’s ethos—to elevate one’s perspective
              and serve others—became his guiding principle, eventually leading
              him to advocate for affordable healthcare for the
              marginalized.Following 14 years of military service, he
              transitioned to civilian life with the support of his wife, Dawa
              Thakchoe.
            </p>
            <p>
              His entrepreneurial journey began in the early 2000s, driven by a
              desire to create societal impact rather than mere profit. Despite
              facing skepticism from those who misunderstood his ambitious
              vision, he pioneered several initiatives, from infrastructure
              projects in Ladakh to educational programs for Tibetan nurses and
              even participation in the highest levels of Tibetan civil
              leadership.
            </p>
            <p>
              His most personal challenge, however, was a two-decade struggle
              with chronic conditions, including diabetes, hypertension, and
              renal issues. It was only through the rigorous application of
              Tibetan Medical science—combined with strict discipline—that he
              achieved a complete physiological reversal. For over twenty years,
              he has maintained a meditative and disciplined lifestyle,
              beginning each day at 4 AM, which has sustained his vitality and
              health.This personal clinical success became the catalyst for
              Samye.
            </p>
          </div>
        </div>
        <p className="mt-5 text-justify">
          Motivated by a conviction to democratize this ancient healing system,
          he dedicated himself to providing root-cause-based care to those with
          the greatest need. Today, Samye Tibetan Traditional Medical Centre
          operates five accredited branches across Guwahati, Tinsukia, Shillong,
          Arunachal Pradesh, and Delhi. Registered under the Ministry of AYUSH,
          the institution continues its mission to provide holistic healing,
          uplift communities, and ensure that professional healthcare remains
          accessible to all citizens.
        </p>
      </div>
    </Container>
  );
};

export { Hero };
