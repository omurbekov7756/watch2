import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useProductContext } from "../../contexts/ProductContext";
import "./addPage.css";

function AddProductPage() {
  const { addProduct } = useProductContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    brand: "",
    ReferenceNumber: "",
    ManufacturedIn: "",
    CaseSize: "",
    Color: "",
    WaterResistance: "",
    category: "",
  });

  function handleChange(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim() ||
      !formValue.brand.trim() ||
      !formValue.ReferenceNumber.trim() ||
      !formValue.ManufacturedIn.trim() ||
      !formValue.CaseSize.trim() ||
      !formValue.Color.trim() ||
      !formValue.WaterResistance.trim() ||
      !formValue.category.trim()
    ) {
      alert("Field the fields");
      return;
    }
    addProduct(formValue);
    setFormValue({
      title: "",
      description: "",
      price: "",
      image: "",
      brand: "",
      ReferenceNumber: "",
      ManufacturedIn: "",
      CaseSize: "",
      Color: "",
      WaterResistance: "",
      category: "",
    });
  }

  return (
    <div className="containerAdd">
      <h1 className="titleAdd">Add Product</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="formAdd">
        <input
          placeholder="Name"
          value={formValue.title}
          type="text"
          name="title"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />
        <Select
          sx={{ marginBottom: "20px", height: "32px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formValue.category}
          label="Category"
          name="category"
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={"mens"}>Men</MenuItem>
          <MenuItem value={"womens"}>Women</MenuItem>
        </Select>

        <input
          placeholder="Price"
          name="price"
          type="text"
          value={formValue.price}
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <input
          placeholder="brand"
          name="brand"
          value={formValue.brand}
          type="text"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <textarea
          placeholder="Description"
          name="description"
          value={formValue.description}
          onChange={(e) => handleChange(e)}
          className="textareaAdd"
        />

        <input
          placeholder="Image"
          name="image"
          type="text"
          value={formValue.image}
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <input
          placeholder="Reference Number"
          value={formValue.ReferenceNumber}
          type="text"
          name="ReferenceNumber"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <input
          placeholder="Manufactured In"
          value={formValue.ManufacturedIn}
          type="text"
          name="ManufacturedIn"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <input
          placeholder="Case Size"
          value={formValue.CaseSize}
          type="text"
          name="CaseSize"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <input
          placeholder="Color"
          value={formValue.Color}
          type="text"
          name="Color"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />
        <input
          placeholder="Water Resistance"
          value={formValue.WaterResistance}
          type="text"
          name="WaterResistance"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <button type="submit" className="buttonAdd">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
