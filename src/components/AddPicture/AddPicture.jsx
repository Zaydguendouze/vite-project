import { useEffect, useState } from "react";

export default function AddPicture({ images }) {
  // console.log(images);
  const [isAutocomplete, setIsAutocomplete] = useState(false);
  const [inputText, setInputText] = useState("");

  const [lImages, setLImages] = useState(["img1.jpg"]);
  const [autocompleteList, setAutocompleteList] = useState(
    images.filter((img) => !lImages.includes(img))
  );

  const handleInputChange = (e) => {
    const incomingTextInput = e.target.value;
    setInputText(incomingTextInput.trim());
    setAutocompleteList((prev) => {
      let isMatch = false;
      let newAutocompleteList = [...prev];
      autocompleteList.forEach((element) => {
        if (element && element.trim() === incomingTextInput) {
          console.log("element", element);
          isMatch = true;
          newAutocompleteList = newAutocompleteList.filter(
            (e) => e !== element
          );
        }
      });
      if (isMatch) {
        return newAutocompleteList;
      }

      return images.filter((img) => !lImages.includes(img));
    });
  };

  const handleClick = (e) => {
    setLImages((prev) => {
      const inputTextTrimed = inputText.trim().toLowerCase();
      const newLocalImages = [...lImages, inputTextTrimed];
      const isInputTextIncluded = images
        .map((img) => img.trim().toLowerCase())
        .includes(inputTextTrimed);
      console.log("newLocalImages", newLocalImages);
      if (isInputTextIncluded) return newLocalImages;
      return prev;
    });
  };

  useEffect(() => {
    if (inputText.length > 0) {
      setIsAutocomplete(true);
    } else setIsAutocomplete(false);
  }, [inputText]);

  return (
    <div>
      <button
        className="mt-5 mb-5 bg-blue-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Ajouter une image
      </button>
      <div>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
        />
        <div className="">
          {isAutocomplete && (
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              {autocompleteList.map((element, idx) => (
                <li className="flex items-center" key={idx}>
                  {element}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
