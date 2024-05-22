import Header from "./Components/Header";
import Profile from "./Components/Profile";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Porftolio";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* ------------------------------ Header */}
      <Header />
      {/* ------------------------------ Main */}
      <main className="wrapper mt-20">
        {/* Profile Section */}
        <Profile />
        {/* About Me Section */}
        <AboutMe/>
        {/* Portfolio section*/}
        <Portfolio/>
      </main>
      {/* ------------------------------ Footer */}
      <Footer />
    </div>
  );
}

export default App;
