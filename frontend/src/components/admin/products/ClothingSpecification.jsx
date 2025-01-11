import React, { useState, useEffect } from "react";
import ColorInput from "./ColorInput"; // Import the new component

function ClothingSpecification({ onChange }) {
  const [colors, setColors] = useState([{ color: "", imgLink: [] }]);
  const [material, setMaterial] = useState("");
  const [fitType, setFitType] = useState("");
  const [careInstructions, setCareInstructions] = useState("");
  const [sleevePattern, setSleevePattern] = useState("");
  const [neckStyle, setNeckStyle] = useState("");
  const [sizesAvailable, setSizesAvailable] = useState([]);

  useEffect(() => {
    const specification = {
      colors,
      material,
      fitType,
      careInstructions,
      sleevePattern,
      neckStyle,
      sizesAvailable,
    };
    onChange(specification); // Call onChange whenever specification data changes
  }, [
    colors,
    material,
    fitType,
    careInstructions,
    sleevePattern,
    neckStyle,
    sizesAvailable,
  ]);

  const handleColorChange = (index, event) => {
    const newColors = [...colors];
    if (
      event.target.name === "imgLink" &&
      typeof event.target.value === "string"
    ) {
      newColors[index][event.target.name] = event.target.value
        .split(",")
        .map((link) => link.trim());
    } else {
      newColors[index][event.target.name] = event.target.value;
    }
    setColors(newColors);
  };

  const addColor = () => {
    setColors([...colors, { color: "", imgLink: [] }]);
  };

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    if (event.target.checked) {
      setSizesAvailable([...sizesAvailable, newSize]);
    } else {
      setSizesAvailable(sizesAvailable.filter((size) => size !== newSize));
    }
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
          <input
            type="checkbox"
            id="size-s"
            name="size"
            value="S"
            onChange={handleSizeChange}
          />
          <label htmlFor="size-m" className="mx-1 ml-4">
            M
          </label>
          <input
            type="checkbox"
            id="size-m"
            name="size"
            value="M"
            onChange={handleSizeChange}
          />
          <label htmlFor="size-l" className="mx-1 ml-4">
            L
          </label>
          <input
            type="checkbox"
            id="size-l"
            name="size"
            value="L"
            onChange={handleSizeChange}
          />
          <label htmlFor="size-xl" className="mx-1 ml-4">
            XL
          </label>
          <input
            type="checkbox"
            id="size-xl"
            name="size"
            value="XL"
            onChange={handleSizeChange}
          />
          <label htmlFor="size-xxl" className="mx-1 ml-4">
            XXL
          </label>
          <input
            type="checkbox"
            id="size-xxl"
            name="size"
            value="XXL"
            onChange={handleSizeChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          name="material"
          id="material"
          placeholder="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
        <input
          type="text"
          name="fit-type"
          id="fit-type"
          placeholder="Fit type"
          value={fitType}
          onChange={(e) => setFitType(e.target.value)}
        />
        <input
          type="text"
          name="care"
          id="care"
          placeholder="Care instruction"
          value={careInstructions}
          onChange={(e) => setCareInstructions(e.target.value)}
        />
        <input
          type="text"
          name="sleeve-pattern"
          id="sleeve-pattern"
          placeholder="Sleeve pattern"
          value={sleevePattern}
          onChange={(e) => setSleevePattern(e.target.value)}
        />
        <input
          type="text"
          name="neck-style"
          id="neck-style"
          placeholder="Neck style"
          value={neckStyle}
          onChange={(e) => setNeckStyle(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ClothingSpecification;
