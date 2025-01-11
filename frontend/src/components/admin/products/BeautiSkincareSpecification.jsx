import React, { useState } from "react";
import ColorInput from "./ColorInput"; // Import the ColorInput component

function BeautiSkincareSpecification({ subcategory }) {
  const [colors, setColors] = useState([{ color: "", imgLink: [] }]);

  const addColor = () => {
    setColors([...colors, { color: "", imgLink: [] }]);
  };

  const handleColorChange = (index, event) => {
    const newColors = [...colors];
    newColors[index][event.target.name] = event.target.value;
    setColors(newColors);
  };

  const renderColorInputs = () => (
    <div>
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
    </div>
  );

  const renderSpecification = () => {
    switch (subcategory) {
      case "face wash":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Type (e.g., Foaming)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="volume"
                name="volume"
                placeholder="Volume (e.g., 150ml)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="ingredients"
                name="ingredients"
                placeholder="Key Ingredients"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="skin-type"
                name="skin-type"
                placeholder="Skin Type (e.g., Oily)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      case "soap":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Type (e.g., Antibacterial)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="Weight (e.g., 100g)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="ingredients"
                name="ingredients"
                placeholder="Key Ingredients"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="skin-type"
                name="skin-type"
                placeholder="Skin Type (e.g., Dry)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      case "lotion":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Type (e.g., Moisturizing)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="volume"
                name="volume"
                placeholder="Volume (e.g., 200ml)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="ingredients"
                name="ingredients"
                placeholder="Key Ingredients"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="skin-type"
                name="skin-type"
                placeholder="Skin Type (e.g., Sensitive)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      default:
        return <div>Select a valid subcategory</div>;
    }
  };

  return (
    <div>
      <h1>Beauti & Skincare: {subcategory}</h1>
      {renderSpecification()}
    </div>
  );
}

export default BeautiSkincareSpecification;
