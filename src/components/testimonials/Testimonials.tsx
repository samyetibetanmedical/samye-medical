import React from "react";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { SubHeading } from "../common/SubHeading";
import { testimonials } from "@/config/common";

const Testimonials = () => {
  return (
    <Container>
      <Heading as="h1">What Our Patients Say</Heading>
      <SubHeading className="mt-5">
        Real stories and experiences from individuals who have trusted us with
        their health and well-being.
      </SubHeading>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Video */}
              <div className="flex justify-center bg-neutral-100 p-4">
                {item.videoSrc ? (
                  <video
                    controls
                    className="max-h-[400px] w-auto max-w-full rounded-2xl object-contain"
                  >
                    <source src={item.videoSrc} />
                  </video>
                ) : (
                  <div className="flex h-[350px] w-full items-center justify-center text-neutral-500">
                    <div className="text-center">
                      <div className="mb-3 text-6xl">▶</div>
                      <p>Video Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Disease Name */}
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Patient Case
                </p>

                <h3 className="mt-1 text-xl font-semibold">{item.disease}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export { Testimonials };
