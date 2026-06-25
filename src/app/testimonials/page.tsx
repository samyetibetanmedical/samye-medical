import { Container } from '@/components/common/Container'
import { Appointment } from '@/components/home/Appointment'
import { Testimonials } from '@/components/testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <Container>
      <Testimonials />
      <Appointment />
      
    </Container>
  )
}

export default page
