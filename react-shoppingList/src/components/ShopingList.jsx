import React, { useState } from "react";
import "./style.css";
import HandleAddButtonClick from "./handleAddButtonClick";
import {
  FaPlus,
  FaCheckCircle,
  FaCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
//  FUNCTION SHOPPING-LIST
function ShopingList() {
  // HINT: Each "item" in our list names a name,
  // A Boolean to tell if its been completed, and a quantity
  const [item, setItem] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 2, isSelected: true },
    { itemName: "item 3", quantity: 3, isSelected: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(5);
  // HANDLE ADD BUTTON PLUS ICON
  function handleAddButtonClick() {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };
    const newItems = [...item, newItem];
    setItem(newItems);
    setInputValue("");
  }
  // HANDLE QUANTITY INCREASE BUTTON RIGHT ICON
  function handleQuantityIncrease(index) {
    const newItems = [...item];
    newItems[index].quantity++;
    setItem(newItems);
    calculateTotal();
  }
  // HANDLE QUANTITY DE-INCRASE BUTTON LEFT ICON
  function handleQuantityDecrease(index) {
    const newItems = [...item];
    newItems[index].quantity--;
    setItem(newItems);
    calculateTotal();
  }
  function toggleComplete(index) {
    const newItems = [...item];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItem(newItems);
  }
  function calculateTotal() {
    const totalItemCount = item.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setTotalItemCount(totalItemCount);
  }
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            type="text"
            className="add-item-input"
            placeholder="Add Item..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <FaPlus onClick={() => HandleAddButtonClick()} />
        </div>
        <div className="item-list">
          {/* MAP FUNCTION */}
          {item.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {/* HINT: replace false with a boolen
                indicating the item has been completed or not */}
                {item.isSelected ? (
                  <>
                    <FaCheckCircle />
                    <span className="compeleted">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FaCircle />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FaChevronLeft
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FaChevronRight
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total:{totalItemCount} </div>
      </div>
    </div>
  );
}

export default ShopingList;
