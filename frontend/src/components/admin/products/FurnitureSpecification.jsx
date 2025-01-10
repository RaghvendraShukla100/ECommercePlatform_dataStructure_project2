import React, { useState } from "react";
import ColorInput from "./ColorInput";

function FurnitureSpecification({ subcategory }) {
  const [colors, setColors] = useState([{ color: "", imgLink: "" }]);

  const addColor = () => {
    setColors([...colors, { color: "", imgLink: "" }]);
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
      case "sofa":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 120x200 cm)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Modern)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="seating-capacity"
                name="seating-capacity"
                placeholder="Seating Capacity (e.g., 3-seater)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm px-2"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      case "chair":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 45x45 cm)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Ergonomic)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="weight-capacity"
                name="weight-capacity"
                placeholder="Weight Capacity (e.g., 150kg)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm px-2"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      case "table":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 120x60 cm)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Contemporary)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="shape"
                name="shape"
                placeholder="Shape (e.g., Rectangular)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm px-2"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      case "cupboards":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 180x80 cm)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Vintage)"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="number-of-doors"
                name="number-of-doors"
                placeholder="Number of Doors"
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="special-features"
                name="special-features"
                placeholder="Special Features"
                className="h-10 rounded-sm px-2"
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
      <h1>Furniture: {subcategory}</h1>
      {renderSpecification()}
    </div>
  );
}

export default FurnitureSpecification;
