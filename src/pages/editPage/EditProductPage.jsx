import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext";
import "../../pages/addPage/addPage.css";

function EditProductPage() {
  const { editProduct, oneProduct, getOneProduct } = useProductContext();
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

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
    editProduct(id, formValue);
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
    navigate(-1);
  }

  return (
    <div className="containerAdd">
      <h1 className="titleAdd">Edit Product</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="formAdd">
        <input
          placeholder="Name"
          value={formValue.title}
          type="text"
          name="title"
          id="title"
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
          id="price"
          value={formValue.price}
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <input
          placeholder="brand"
          name="brand"
          value={formValue.brand}
          type="text"
          id="brand"
          onChange={(e) => handleChange(e)}
          className="inputAdd"
        />

        <textarea
          placeholder="Description"
          name="description"
          id="description"
          value={formValue.description}
          onChange={(e) => handleChange(e)}
          className="textareaAdd"
        />

        <input
          placeholder="Image"
          name="image"
          type="text"
          id="image"
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
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProductPage;
