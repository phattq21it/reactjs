import { useState, useMemo, useReducer } from "react";
//init state
const initState = {
  name: "",
  price: "",
  products: [],
};
const SET_PRODUCT = "set_product";
const ADD_PRODUCT = "add_product";
const DELETE_PRODUCT = "delete_product";

const setProducts = (payloadname, payloadprice) => {
  return {
    type: SET_PRODUCT,
    payloadname,
    payloadprice,
  };
};
const addProduct = (payloadname, payloadprice) => {
  return {
    type: ADD_PRODUCT,
    payloadname,
    payloadprice,
  };
};
const deleteProduct = (payKey) => {
  return {
    type: DELETE_PRODUCT,
    payKey,
  };
};

const reducer = (state, action) => {
  let newState;
  console.log(action.payloadname, "-", action.payloadprice);
  switch (action.type) {
    case SET_PRODUCT:
      console.log("Old state:", state);
      newState = {
        ...state,
        name: action.payloadname,
        price: action.payloadprice,
      };
      break;
    case ADD_PRODUCT:
      newState = {
        ...state,
        products: [
          ...state.products,
          [action.payloadname, action.payloadprice],
        ],
      };
      break;
    case DELETE_PRODUCT:
      const newProducts = [...state.products];
      newProducts.splice(action.payKey, 1);
      newState = {
        ...state,
        products: newProducts,
      };
      break;
    default:
      throw new Error("invalid action");
  }
  console.log("new state:", newState);
  return newState;
};
function useMemoHook() {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  const [state, dispatch] = useReducer(reducer, initState);
  const { name, price, products } = state;

  // const total = useMemo(() => {
  //   const result = products.reduce((result, prod) => {
  //     return result + prod.price;
  //   }, 0);
  //   return result;
  // }, [products]);
  const handleAdd = () => {
    dispatch(addProduct(state.name, state.price));
    dispatch(setProducts("", ""));
  };

  return (
    <div>
      <div>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => dispatch(setProducts(e.target.value, price))}
        ></input>
        <input
          placeholder="price"
          type="number"
          value={price}
          onChange={(event) => dispatch(setProducts(name, event.target.value))}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <h3>Total :</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.join("-")}
              {index}
              <span
                style={{ margin: "5dp" }}
                onClick={() => dispatch(deleteProduct(index))}
              >
                {" "}
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default useMemoHook;
