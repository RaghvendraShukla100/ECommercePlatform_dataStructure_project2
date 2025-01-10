import React, { useState } from "react";
import ColorInput from "./ColorInput";

function DecoreSpecification({ subcategory }) {
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
      case "curtains":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 120x200 cm)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="pattern"
                name="pattern"
                placeholder="Pattern (e.g., Floral)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Modern)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
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
      case "paintings":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="artist"
                name="artist"
                placeholder="Artist"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 50x70 cm)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="medium"
                name="medium"
                placeholder="Medium (e.g., Oil on Canvas)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="frame-material"
                name="frame-material"
                placeholder="Frame Material"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Abstract)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
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
      case "clocks":
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
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions (e.g., 30x30 cm)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style (e.g., Vintage)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Type (e.g., Wall Clock)"
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
      case "decorative articles":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Type (e.g., Vase)"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder="Dimensions"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="style"
                name="style"
                placeholder="Style"
                className="h-10 rounded-sm"
              />
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
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
      <h1>Decore: {subcategory}</h1>
      {renderSpecification()}
    </div>
  );
}

export default DecoreSpecification;
