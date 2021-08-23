{/* menerima props dari ListProduct */}
function ProductItem({ambilProduct}) {
  console.log(ambilProduct);

    return (
      <div id="productItem">
        <h3>{ambilProduct}</h3>
      </div>
    )
  }
  
  export default ProductItem;