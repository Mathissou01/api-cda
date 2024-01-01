const getProducts {
query MyQuery @cached {
  products {
    id
    product_name
    buying_price
    product_image
    stock
    materials
    isActive
    difficulty
    small_description
    category {
      image
      id
      name
      isActive
    }
  }
}
}

const getProductById/:id {
query MyQuery($id: Int) @cached {
  products(where: {id: {_eq: $id}}) {
    id
    product_name
    buying_price
    product_image
    stock
    materials
    isActive
    difficulty
    small_description
    description
    product_code
  }
}
}