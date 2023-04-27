import { useState, useEffect } from "react";
import Images from "./Pictures";
import AddPicture from "../AddPicture/AddPicture";
export default function Body({}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <Images images={images} />
        </div>
      </div>
      <div className="mt-4">
        <AddPicture images={images} setImages={setImages} />
      </div>
    </div>
  );
}
