// Dummy wrapper to simulate API calls
import mockedData from "./mockedData";
import type { ProductItem } from "./types";

const perPage = 5;

export default class ApiMock {
  async getProducts(pageNumber: number) {
    const items: ProductItem[] = [];
    let validItemIndex = (perPage * pageNumber) - 1;
    mockedData.products.forEach((item, index) => {
      if (index >= validItemIndex && items.length <= perPage) {
        items.push(item)
        validItemIndex++;
      }
    })
    await Promise.resolve({
      page: pageNumber,
      items: items,
    });
  }
}
