// function App() {

import Footer from "./Footer";
import Greet from "./Greet";
import Header from "./Header";
import MainContent from "./MainContent";

//   return <h1> hello world</h1>
// }

const App = () =>{
  return(
    <>
      <Greet />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;