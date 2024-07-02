import useGeolocation from "./useGeolocation";

function App() {
  const { isLoading, position, getPosition, error, countClick, showCounts } =
    useGeolocation(true);
  const { lat, lng } = position;

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <div className="border flex flex-col justify-center border-black rounded-lg p-8 shadow-xl w-96">
          <button
            onClick={getPosition}
            className="border bg-slate-200 hover:bg-slate-300 rounded p-2 mb-2"
          >
            Get my position
          </button>
          <p>
            Your GPS position:{" "}
            <a
              className="underline text-blue-500"
              href={`https://www.google.com/maps?q=${lat},${lng}`}
            >
              {lat} {lng}
            </a>
          </p>
          {isLoading && <p className="text-2xl font-medium">Loading</p>}
          {error && <p className="text-2xl font-medium">{error}</p>}
          {showCounts && <p>You requested position {countClick} times</p>}
        </div>
      </main>
    </>
  );
}

export default App;
