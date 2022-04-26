import productList from "../Data/ProductData";
import "./style.css";

const TableRow = ({ id, name, price, stock, quantity, total }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{stock}</td>
    <td>{quantity}</td>
    <td>{total}</td>
    <td>
      <button className="btnPlus">+</button>
      <button className="btnMinus">-</button>
    </td>
  </tr>
);

const Index = () => {
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
            {productList.map((product) => (
              <TableRow key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
