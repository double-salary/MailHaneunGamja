import * as store from './store';
import { parseItem, parseList } from './http-utils';
import API from './config';

export async function getUserAction() {
  try {
    const response = await fetch(`${API}/accounts/me`, {
      method: 'GET',
    });

    // const products = await parseList(response);
    // store.getProducts(products);
    // return products;
  } catch (error) {
    console.log(error);
    throw new Error(err);
  }
}
