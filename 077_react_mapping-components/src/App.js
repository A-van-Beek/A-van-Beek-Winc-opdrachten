import "./App.css";
import MyHeader from "./MyHeader";
import productsData from "./vschoolProducts";
import Product from "./Product";

function App() {
  const productComponent = productsData.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <div>
      <MyHeader />
      <div className="products">{productComponent}</div>
    </div>
  );
}

export default App;
