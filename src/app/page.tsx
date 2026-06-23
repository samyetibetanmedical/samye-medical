import { Container } from '@/components/common/Container'
import { ClinicalServices } from '@/components/home/ClinicalServices'
import { Hero } from '@/components/home/Hero'

const page = () => {
  return (
    <Container>
      <Hero />
      <ClinicalServices />
      <div className='h-screen'>

      </div>
    </Container>
  )
}

export default page
