import React, { useState } from "react";
import "./style.css";
import {
  FaPlus,
  FaCheckCircle,
  FaCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
function ShopingList() {
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
            <div className="item-name"></div>
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
        <div className="total">Total:</div>
      </div>
    </div>
  );
}

export default ShopingList;
