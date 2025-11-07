import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Builds from './components/Builds';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Builds />
      </main>
      <Footer />
    </div>
  );
}

export default App;
