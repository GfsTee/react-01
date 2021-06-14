import './App.css';
// import VARIABLENNAME from './PATH/TO/FILE' 
// Wichtig mit ./ beginnen sonst sucht er in den node_modules
import Navigation from './componets/Navigation'
import Hero from './componets/Hero';
import MainBG from './componets/MainBG';

function App() {
  return (
    <main>
      {/* <Navigation></Navigation> */}
      <Navigation />
      <Hero />
      <MainBG />
    </main>
  );
}

export default App;
