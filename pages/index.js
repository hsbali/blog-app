import DefaultLayout from "../components/layouts/DefaultLayout"
import HeroSection from "../components/pages/IndexPage/HeroSection"

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  )
}