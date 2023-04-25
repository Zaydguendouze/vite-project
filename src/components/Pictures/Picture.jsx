export default function Picture({ imageName, index }) {
  return (
    <div className="mt-10 mb-10 mr-10">
      <img
        className="h-auto max-h-40 max-w-50 mx-auto mb-2"
        alt={imageName}
        src={`images/${imageName}`}
      ></img>
      <div className="flex justify-center text-xl text-black font-bold">
        {imageName}
      </div>
    </div>
  );
}
