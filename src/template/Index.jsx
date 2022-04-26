import { useState } from "react";
import productList from "../Data/ProductData";
import "./style.css";

const TableRow = ({ id, name, price, stock, quantity, total,increment,dcrement }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{stock}</td>
    <td>{quantity}</td>
    <td>{total}</td>
    <td>
      <button onClick={increment} className="btnPlus">+</button>
      <button onClick={dcrement} className="btnMinus">-</button>
    </td>
  </tr>
);




const Index = () => {
  const [products, setProducts] = useState(
    productList.map((item)=> ({
      ...item,
      quantity:0,
      total:0
    }))
  )
  
  const incrementQuantity = (id) => {
    const newProducts = products.map((product)=>{
      if (id === product.id && product.quantity < product.stock) {
        product.quantity ++;
        product.total = product.quantity * product.price;
      }
      return product;
    })
    setProducts(newProducts)
  }
  const DcrementQuantity = (id) => {
    setProducts(products.map((product)=>{
      if (id === product.id && product.quantity > 0) {
        product.quantity --;
        product.total = product.quantity * product.price;
      }
      return product;
    }))
  }


  return (
    <div className="title">
      <h1>Simple-Shopping-Cart Application</h1>
      <strong>Product List</strong>
      <hr />
      <div className="shopping_list_data">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          <tbody>
            {products.map((product) => (
              <TableRow key={product.id} {...product} increment={()=>incrementQuantity(product.id)} dcrement={()=>DcrementQuantity(product.id)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
