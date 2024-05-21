import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import TechStack from "./Components/TechStack";


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="wrapper mt-20">
      <Profile/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
