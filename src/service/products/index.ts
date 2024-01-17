import { apiRequest, IFetchQuery } from '@/service/base';

export const Products = (query: IFetchQuery = {}) => {
  return apiRequest.get(`${process.env.NEXT_PUBLIC_API_URL}/products/`, query);
};
