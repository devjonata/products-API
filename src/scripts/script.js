const randonProducts = async () => {
  const productList = document.querySelector(".product__list");
  const data = await fetch("http://localhost:3333/products");
  const dataJson = await data.json();

  console.log(dataJson[0].nome_do_produto);
}

randonProducts()