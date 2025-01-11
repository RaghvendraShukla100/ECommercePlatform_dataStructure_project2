import React, { useState, useEffect } from "react";
import ColorInput from "./ColorInput";

function ElectronicsSpecification({ subcategory, onChange }) {
  const [specification, setSpecification] = useState({
    brand: "",
    model: "",
    operatingSystem: "",
    ram: "",
    rom: "",
    camara: "",
    battery: "",
    displayResolution: "",
    simType: "",
    whatsInTheBox: "",
    colors: [{ color: "", imgLink: [] }],
  });

  useEffect(() => {
    onChange(specification);
  }, [specification]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpecification((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addColor = () => {
    setSpecification((prev) => ({
      ...prev,
      colors: [...prev.colors, { color: "", imgLink: [] }],
    }));
  };

  const handleColorChange = (index, e) => {
    const { name, value } = e.target;
    const newColors = [...specification.colors];
    newColors[index][name] = value;
    setSpecification((prev) => ({
      ...prev,
      colors: newColors,
    }));
  };

  const renderColorInputs = () => (
    <div>
      {specification.colors.map((color, index) => (
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
      case "mobile":
        return (
          <div>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                value={specification.brand}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="model"
                name="model"
                placeholder="Model"
                value={specification.model}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="operatingSystem"
                name="operatingSystem"
                placeholder="Operating System"
                value={specification.operatingSystem}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="ram"
                name="ram"
                placeholder="RAM (e.g., 8GB)"
                value={specification.ram}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="rom"
                name="rom"
                placeholder="ROM (e.g., 128GB)"
                value={specification.rom}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="camara"
                name="camara"
                placeholder="camara resolution"
                value={specification.camara}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />

              <input
                type="text"
                id="battery"
                name="battery"
                placeholder="Battery (e.g., 5000mAh)"
                value={specification.battery}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="displayResolution"
                name="displayResolution"
                placeholder="Display Resolution (e.g., 1080 x 2400 pixels)"
                value={specification.displayResolution}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="simType"
                name="simType"
                placeholder="SIM Type (e.g., Dual SIM)"
                value={specification.simType}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
              <input
                type="text"
                id="whatsInTheBox"
                name="whatsInTheBox"
                placeholder="What's in the Box"
                value={specification.whatsInTheBox}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />
            </div>
            {renderColorInputs()}
          </div>
        );
      case "laptop":
        return (
          <div>
            {" "}
            <div className="grid grid-cols-3 gap-2">
              {" "}
              {/* Laptop-specific fields */}{" "}
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                value={specification.brand}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="model"
                name="model"
                placeholder="Model"
                value={specification.model}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="operatingSystem"
                name="operatingSystem"
                placeholder="Operating System"
                value={specification.operatingSystem}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="ram"
                name="ram"
                placeholder="RAM (e.g., 8GB)"
                value={specification.ram}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="rom"
                name="rom"
                placeholder="ROM (e.g., 256GB)"
                value={specification.rom}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="cpuModel"
                name="cpuModel"
                placeholder="CPU Model"
                value={specification.cpuModel}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="cpuSpeed"
                name="cpuSpeed"
                placeholder="CPU Speed (e.g., 2.8 GHz)"
                value={specification.cpuSpeed}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="battery"
                name="battery"
                placeholder="Battery (e.g., 5000mAh)"
                value={specification.battery}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="displayResolution"
                name="displayResolution"
                placeholder="Display Resolution (e.g., 1920 x 1080 pixels)"
                value={specification.displayResolution}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
            </div>{" "}
            {renderColorInputs()}{" "}
          </div>
        );
      case "tv":
        return (
          <div>
            {" "}
            <div className="grid grid-cols-3 gap-2">
              {" "}
              {/* TV-specific fields */}{" "}
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                value={specification.brand}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="model"
                name="model"
                placeholder="Model"
                value={specification.model}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="refreshrate"
                name="refreshrate"
                placeholder="Refresh rate"
                value={specification.refreshrate}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="displayResolution"
                name="displayResolution"
                placeholder="Display Resolution (e.g., 4K UHD)"
                value={specification.displayResolution}
                onChange={handleInputChange}
                className="h-10 rounded-sm px-2"
              />{" "}
              <input
                type="text"
                id="screenSize"
                name="screenSize"
                placeholder="Screen Size (e.g., 55 inches)"
              />{" "}
            </div>{" "}
            {renderColorInputs()}{" "}
          </div>
        );
      default:
        return <div>Select a valid subcategory</div>;
    }
  };

  return (
    <div>
      <h1>Electronics: {subcategory}</h1>
      {renderSpecification()}
    </div>
  );
}

export default ElectronicsSpecification;
