import { Container } from '@/components/common/Container'
import { AboutUs } from '@/components/home/AboutUs'
import { Appointment } from '@/components/home/Appointment'
import { ClinicalServices } from '@/components/home/ClinicalServices'
import { Hero } from '@/components/home/Hero'

const page = () => {
  return (
    <Container>
      <Hero />
      <ClinicalServices />
      <AboutUs />
      <Appointment />
      <div className='h-screen'>

      </div>
    </Container>
  )
}

export default page
