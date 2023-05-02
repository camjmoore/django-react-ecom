import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray min-h-full">
      <Header />
      <main className="bg-white mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Welcome to the Store
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
