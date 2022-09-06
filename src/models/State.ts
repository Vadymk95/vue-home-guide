import { IProduct } from '@/models/Product';

type SortOptionType = {
  value: string;
  name: string;
};

export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  selectedSort: string;
  sortOptions: SortOptionType[];
  searchQuery: string;
  pageNumber: number;
  limit: number;
  totalPages: number;
}

export interface IAuthState {
  credentials: {
    token: null | string,
    userRole: null | string,
  },
}
