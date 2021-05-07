// Obtener lista de productos
export const getListProducts = async () => {
  try {
    let url = `https://fakestoreapi.com/products`;
    const response = await fetch(url);

    const data = await response.json();
    return data
  } catch(err) {
    console.log('Error :(')
  }
}

// Obtener detalle del producto
export const getProductSingle = async (id) => {
  try {
    let url = 'https://fakestoreapi.com/products/' + id;
    const response = await fetch(url);

    const data = await response.json();
    return data
  } catch(err) {
    console.error('No se encontró nada :(')
  }
}