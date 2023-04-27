export default function Picture({ imageName, index }) {
  return (
    <a href="#" className="group">
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          className="w-full h-full group-hover:opacity-75"
          alt={imageName}
          src={`images/${imageName}`}
        ></img>
      </div>
      <div className="flex justify-center text-xl text-black font-bold mt-2">
        {imageName}
      </div>
    </a>
  );
}
