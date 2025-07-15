import setup from "../assets/setup.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover setup for your workspace
        </h1>
        <p className="text-lg text-gray-600 mb-8 font-medium center">
          Find your setup
        </p>
        <img src={setup} alt="setup" className="w-48 h-auto mx-auto mb-8" />
      </div>
      <div>
      </div>
    </div>
  );
}