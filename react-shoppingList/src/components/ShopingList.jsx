import React, { useState } from "react";
import "./style.css";
import {
  FaPlus,
  FaCheckCircle,
  FaCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
//  FUNCTION SHOPPING-LIST
function ShopingList() {
  const [item, setItem] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 2, isSelected: false },
    { itemName: "item 3", quantity: 3, isSelected: false },
  ]);
  console.log(item)
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            type="text"
            className="add-item-input"
            placeholder="Add Item..."
          />
          <FaPlus />
        </div>
        <div className="item-list">
          <div className="item-container">
            <div className="item-name">
              <>
                <FaCheckCircle />
                <span className="compeleted"></span>
              </>
              <>
                <FaCircle />
                <span></span>
              </>
            </div>
            <div className="quantity">
              <button>
                <FaChevronLeft />
              </button>
              <span>0</span>
              <button>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="total">Total: </div>
      </div>
    </div>
  );
}

export default ShopingList;
