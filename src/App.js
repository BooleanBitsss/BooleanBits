import Hero from './Views/Hero';
import Services from './Views/Services';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Hero />
        <Services/>
      </div>
    </ThemeProvider>
  );
}

export default App;
