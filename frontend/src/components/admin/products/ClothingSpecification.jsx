import React, { useState } from "react";
import ColorInput from "./ColorInput"; // Import the new component

function ClothingSpecification() {
  const [colors, setColors] = useState([{ color: "", imgLink: "" }]);

  const addColor = () => {
    setColors([...colors, { color: "", imgLink: "" }]);
  };

  const handleColorChange = (index, event) => {
    const newColors = [...colors];
    newColors[index][event.target.name] = event.target.value;
    setColors(newColors);
  };

  return (
    <div>
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Type : eg. shirt"
        className="h-10 px-2 rounded-sm w-1/3"
      />
      {/* Images section */}
      {colors.map((color, index) => (
        <ColorInput
          key={index}
          color={color.color}
          imgLink={color.imgLink}
          index={index}
          handleColorChange={handleColorChange}
          addColor={addColor}
        />
      ))}
      <div
        className="flex items-center bg-[#121212] space-x-3 
         h-10 p-2 uppercase text-xl my-2"
      >
        <label htmlFor="size-select">Select size : </label>
        <div id="size-select">
          <label htmlFor="size-s" className="mx-1 ml-4">
            S
          </label>
          <input type="checkbox" id="size-s" name="size" value="S" />
          <label htmlFor="size-m" className="mx-1 ml-4">
            M
          </label>
          <input type="checkbox" id="size-m" name="size" value="M" />
          <label htmlFor="size-l" className="mx-1 ml-4">
            L
          </label>
          <input type="checkbox" id="size-l" name="size" value="L" />
          <label htmlFor="size-xl" className="mx-1 ml-4">
            XL
          </label>
          <input type="checkbox" id="size-xl" name="size" value="XL" />
          <label htmlFor="size-xxl" className="mx-1 ml-4">
            XXL
          </label>
          <input type="checkbox" id="size-xxl" name="size" value="XXL" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          name="material"
          id="material"
          placeholder="Material"
          className="h-10 px-2"
        />
        <input
          type="text"
          name="fit-type"
          id="fit-type"
          placeholder="Fit type"
          className="h-10 px-2"
        />
        <input
          type="text"
          name="care"
          id="care"
          placeholder="Care instruction"
          className="h-10 px-2"
        />
        <input
          type="text"
          name="sleeve-pattern"
          id="sleeve-pattern"
          placeholder="Sleeve pattern"
          className="h-10 px-2"
        />
        <input
          type="text"
          name="neck-style"
          id="neck-style"
          placeholder="Neck style"
          className="h-10 px-2"
        />
      </div>
    </div>
  );
}

export default ClothingSpecification;
