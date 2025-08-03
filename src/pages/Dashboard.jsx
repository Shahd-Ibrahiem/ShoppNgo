import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const apiURL =
    "https://6880175ef1dcae717b610c29.mockapi.io/api/ShahdIbrahiem/ShoppNgo/products";

  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // NEW

  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    rating: 5,
    originalPrice: 0,
    discount: 0,
    finalPrice: 0,
    status: "New",
  });

  useEffect(() => {
    axios.get(apiURL).then((res) => setProducts(res.data));
  }, []);

  const handleEdit = (product) => {
    setNewProduct(product);
    setShowForm(true);
    setIsEditMode(true); // Enable Edit mode
  };

  const handleDelete = (id) => {
    axios.delete(`${apiURL}/${id}`).then(() => {
      setProducts(products.filter((item) => item.id !== id));
      toast.success("The product was deleted successfully!");
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    let updatedProduct = {
      ...newProduct,
      [name]: updatedValue,
    };

    if (name === "originalPrice" || name === "discount") {
      const price = name === "originalPrice" ? +value : +newProduct.originalPrice;
      const discount = name === "discount" ? +value : +newProduct.discount;
      updatedProduct.finalPrice = price - (price * discount) / 100;
    }

    if (name === "isTopSelling" && checked) {
      updatedProduct.status = "Top Selling";
    } else if (name === "isNewArrival" && checked) {
      updatedProduct.status = "New";
    }

    setNewProduct(updatedProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalProduct = {
      ...newProduct,
      finalPrice:
        newProduct.originalPrice -
        (newProduct.originalPrice * newProduct.discount) / 100,
    };

    if (isEditMode) {
      // Edit existing product (PUT)
      axios.put(`${apiURL}/${newProduct.id}`, finalProduct).then((res) => {
        setProducts(
          products.map((prod) =>
            prod.id === newProduct.id ? res.data : prod
          )
        );
        toast.success("Product updated successfully!");
      });
    } else {
      // Add new product (POST)
      axios.post(apiURL, finalProduct).then((res) => {
        setProducts([...products, res.data]);
        toast.success("New product was added successfully!");
      });
    }

    // Reset form
    setShowForm(false);
    setNewProduct({
      name: "",
      image: "",
      rating: 5,
      originalPrice: 0,
      discount: 0,
      finalPrice: 0,
      status: "New",
    });
    setIsEditMode(false);
  };

  return (
    <div className="dashboard">
      <Toaster position="top-right" />
      <h1>PRODUCTS DASHBOARD</h1>
      <button onClick={() => { setShowForm(true); setIsEditMode(false); }} className="add-button">
        Add Product
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <h2>{isEditMode ? "Edit this product" : "Add New Product"}</h2>
            <form onSubmit={handleSubmit}>
              <p>Product Name</p>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />

              <p>Rating</p>
              <input
                type="number"
                name="rating"
                placeholder="Rating (1–5)"
                value={newProduct.rating}
                onChange={handleInputChange}
                required
              />

              <p>Original Price ($)</p>
              <input
                type="number"
                name="originalPrice"
                placeholder="Original Price ($)"
                value={newProduct.originalPrice}
                onChange={handleInputChange}
                required
              />

              <p>Discount (%)</p>
              <input
                type="number"
                name="discount"
                placeholder="Discount (%)"
                value={newProduct.discount}
                onChange={handleInputChange}
              />

              <p>Product Image</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setNewProduct((prev) => ({
                        ...prev,
                        image: reader.result,
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                required={!newProduct.image}
              />
              {newProduct.image && (
                <img
                  src={newProduct.image}
                  alt="Preview"
                  style={{ width: "100px", marginBottom: "10px", borderRadius: "5px" }}
                />
              )}

              <div className="checkboxes">
                <label>
                  <input
                    type="checkbox"
                    name="isNewArrival"
                    checked={newProduct.status === "New"}
                    onChange={handleInputChange}
                  />
                  Is New Arrival
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="isTopSelling"
                    checked={newProduct.status === "Top Selling"}
                    onChange={handleInputChange}
                  />
                  Is Top Selling
                </label>
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  className="delete"
                  onClick={() => {
                    setShowForm(false);
                    setIsEditMode(false);
                  }}
                >
                  Close
                </button>
                <button type="submit" className="edit">
                  {isEditMode ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Original Price</th>
            <th>Discount</th>
            <th>Final Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>
                <img className="product-image" src={prod.image} alt={prod.name} />
              </td>
              <td>{prod.name}</td>
              <td>{prod.rating}</td>
              <td>${prod.originalPrice}</td>
              <td>{prod.discount}%</td>
              <td>${prod.finalPrice.toFixed(2)}</td>
              <td>
                <span
                  className={
                    prod.status === "Top Selling"
                      ? "status top-selling"
                      : prod.status === "New"
                      ? "status new"
                      : "status null"
                  }
                >
                  {prod.status || "Null"}
                </span>
              </td>
              <td>
                <button className="edit" onClick={() => handleEdit(prod)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(prod.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
