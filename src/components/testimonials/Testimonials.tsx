import React from 'react'
import { Container } from '../common/Container'
import { Heading } from '../common/Heading'
import { SubHeading } from '../common/SubHeading'
import { testimonials } from '@/config/common'

const Testimonials = () => {
  return (
    <Container>
      <Heading as='h1'>What Our Patients Say</Heading>
      <SubHeading className='mt-5'>Real stories and experiences from individuals who have trusted us with their health and well-being.</SubHeading>

      <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="space-y-16">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Video */}
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden bg-neutral-100 shadow-lg border border-neutral-200 flex items-center justify-center">
                {item.videoSrc ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={item.videoSrc} />
                  </video>
                ) : (
                  <div className="text-center text-neutral-500">
                    <div className="text-6xl mb-3">▶</div>
                    <p>Video Coming Soon</p>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-primary font-semibold">
                Testimonial {item.id.toString().padStart(2, "0")}
              </span>

              <h3 className="mt-3 text-3xl font-heading font-semibold text-neutral-900">
                Patient Story
              </h3>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
 
  </Container>
  )
}

export {Testimonials}
