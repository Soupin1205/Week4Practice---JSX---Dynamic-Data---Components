import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <main className="block">
        <Header />
      </main>
      <main className="block">
        <Main />
      </main>
      <main className="block">
        <Footer />
      </main>
    </>
  );
}

export default App;