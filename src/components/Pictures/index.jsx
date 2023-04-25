import { useEffect, useState } from "react";
import Picture from "./Picture";

export default function Images() {
  const [images, setImages] = useState([]);
  //   const [lImages, setLImages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, [images]);

  //   const image = images.map((name, index) => (
  //     <Picture imageName={name} index={index} />
  //   ));

  // return <div>{images.map((img) => img + " +")}</div>;

  return images.map((name, index) => (
    <Picture
      imageName={name}
      index={index}
      key={index}
      //   handleRemove={handleRemoveImage}
    />
  ));

  //   return data.images.map((name, index) => (
  //     <Picture imageName={name} index={index} key={index} />
  //   ));
}
