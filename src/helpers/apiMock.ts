// Dummy wrapper to simulate API calls
import mockedData from "./mockedData";
import type { ProductItem, ProductListItem } from "./types";

const perPage = 3;

interface GetProductsResponse {
  page: number;
  items: ProductListItem[];
}

interface GetProductResponse {
  item: ProductItem;
}

class ApiMock {
  async getProducts(pageNumber: number): Promise<GetProductsResponse> {
    const items: ProductListItem[] = [];
    let validItemIndex = (perPage * (pageNumber - 1)) - 1;
    mockedData.products.forEach((item, index) => {
      if (index >= validItemIndex && items.length < perPage) {
        items.push({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.images?.length ? item.images[0] : '',
        })
        validItemIndex++;
      }
    })
    // simulate delay
    await setTimeout(() => ({}), (Math.floor(Math.random() * (5 - 1) + 1) * 1000));
    return await Promise.resolve({
      page: pageNumber,
      items: items,
    });
  }

  async getproduct(productId: number): Promise<GetProductResponse> {
    const item = mockedData.products.find((product) => product.id === productId);
    // simulate delay
    await setTimeout(() => ({}), (Math.floor(Math.random() * (5 - 1) + 1) * 1000));
    if (item) {
      return Promise.resolve({
        item: item,
      });
    } else {
      return Promise.reject({
        code: 404,
        message: 'Product not found'
      });
    }
  }
}

export default new ApiMock();
