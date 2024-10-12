import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Trending from "./components/trending";
import CardFilm from "./components/card_film";
// import Footer from "./components/footer";

function App() {
  return (
    <>
      {/* HOME */}
      <div
        className="object-cover w-full min-h-screen"
        style={{
          backgroundImage: "url('/bg-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* NAVBAR */}
        <Navbar />
        {/* END NAVBAR */}

        {/* Main Container */}
        <div className="flex justify-center w-full p-2 py-8 bg-blue-">
          <div className="w-full p-2 sm:w-3/4 bg-yellow-">
            <Intro />

            {/* Trending Film */}
            <div className="mx-4 my-4">
              <h1 className="my-4 text-xl font-bold dark:text-white">
                Trending :
              </h1>
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-6">
                {/* CARD */}
                <Trending />
              </div>
            </div>
            {/* END Trending Film */}

            {/* All Film */}
            <div className="mx-4 my-4">
              <h1 className="my-4 text-xl font-bold dark:text-white">
                Semua Film :
              </h1>
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-6">
                {/* CARD */}
                <CardFilm />
              </div>
            </div>
            {/* END All Film */}
          </div>
        </div>
      </div>
      {/* END HOME */}
    </>
  );
}

export default App;
