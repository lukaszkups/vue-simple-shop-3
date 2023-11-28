// Dummy wrapper to simulate API calls
import mockedData from "@/helpers/mockedData";
import type { ProductItem, ProductListItem } from "@/helpers/types";

const perPage = 3;

interface GetProductsResponse {
  page: number;
  items: ProductListItem[];
}

interface GetProductResponse {
  item: ProductItem;
}

class DataService {
  async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

    // simulate server delay
    await this.delay(3000);
    return await Promise.resolve({
      page: pageNumber,
      items: items,
    });
  }

  async getProduct(productId: number): Promise<GetProductResponse> {
    if (productId) {
      const item = mockedData.products.find((product) => product.id === productId);
      // simulate server delay
      await this.delay(2000);
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
    } else {
      return Promise.reject({
        code: 400,
        message: 'Product Id is missing'
      });
    }
  }
}

export default new DataService();
