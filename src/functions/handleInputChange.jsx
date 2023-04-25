export default function handleInputChange() {
  const [isAutocomplete, setIsAutocomplete] = useState(false);
  const [inputText, setInputText] = useState("");

  const [lImages, setLImages] = useState(["img1.jpg "]);
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

  return <Images list={autocompleteList} />;
}
