import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Credentials from './components/Credentials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="selection:bg-brutal-orange selection:text-brutal-white">
      <Hero />
      <About />
      <Gallery />
      <Credentials />
      <Contact />
    </div>
  )
}

export default App


