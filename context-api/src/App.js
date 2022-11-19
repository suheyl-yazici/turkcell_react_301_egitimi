import Container from "./Container";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";


const App = () => (
  <LangContextProvider>
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>

    
  </LangContextProvider>
);

export default App;
