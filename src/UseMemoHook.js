import { useState, useMemo } from "react";

function useMemoHook() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const handleAdd = () => {
    setProducts([
      ...products,
      {
        name: name,
        price: +price,
      },
    ]);
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div>
      <div>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <h3>Total :{total}</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name}-{product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default useMemoHook;
