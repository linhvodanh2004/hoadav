import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import EducationSkills from './components/EducationSkills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="selection:bg-brutal-orange selection:text-brutal-white">
      <Hero />
      <About />
      <Experience />
      <EducationSkills />
      <Contact />
    </div>
  )
}

export default App
