import Classroom from "./components/classroom"
import Companies from "./components/companies"
import Discussions from "./components/discussions"
import Enducator from "./components/educators"
import Features from "./components/features"
import Hero from "./components/hero"
import Platform from "./components/platform"
import Quizzes from "./components/quizzes"
import SectionCards from "./components/sectionCards"
import Skilline from "./components/skilline"
import Teachers from "./components/teachers"

const Home = () => {
  return (
    <>
      <Hero/>
      <Companies/>
      <SectionCards/>
      <Skilline/>
      <Classroom/>
      <Features/>
      <Teachers/>
      <Quizzes/>
      <Enducator/>
      <Discussions/>
      <Platform/>
    </>
  )
}

export default Home