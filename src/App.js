import './App.css';
import { ChakraProvider, Heading } from "@chakra-ui/react"
import {NavBar} from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Feria Libre Digital" />
    </ChakraProvider>
  );
}

export default App;
