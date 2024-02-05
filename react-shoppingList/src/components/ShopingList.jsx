import { useState } from "react";
// FUNCTION SHOPPING-LIST
function ShopingList() {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");
  console.log(item);
  return (
    <div>
      <div className="main-list">
        <div className="input-filed">
          <input
            type="text"
            placeholder="Add Item..."
            value={item}
            onChange={(item) => setItem(item.target.value)}
          />
          <button>ADD</button>
        </div>
        <ul></ul>
      </div>
    </div>
  );
}

export default ShopingList;
