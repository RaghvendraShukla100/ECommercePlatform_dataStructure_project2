function ColorInput({
  color,
  imgLink = [],
  index,
  handleColorChange,
  addColor,
}) {
  const handleImageLinkChange = (e) => {
    const { value } = e.target;
    const linksArray = value
      .split(",")
      .map((link) => link.trim())
      .filter((link) => link);

    handleColorChange(index, {
      target: { name: "imgLink", value: linksArray },
    });
  };

  return (
    <div className="flex">
      <input
        type="text"
        name="color"
        value={color}
        placeholder={`Color ${index + 1}`}
        onChange={(e) => handleColorChange(index, e)}
        className="h-10 w-20 text-center rounded-sm my-1 px-2"
      />
      <input
        type="text"
        name="imgLink"
        value={imgLink.join(", ")} // Join array back to comma-separated string for display
        placeholder={`Image Links  for ${color}`}
        onChange={handleImageLinkChange}
        className="h-10 rounded-sm my-1 flex-grow mx-2 px-2"
      />
      <button
        type="button"
        onClick={addColor}
        className="w-32 rounded-sm cursor-pointer bg-gray-800
         hover:bg-gray-900 capitalize h-10 my-1"
      >
        Add Color
      </button>
    </div>
  );
}
export default ColorInput;
