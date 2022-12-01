export type ProductsType = {
  state: ProductType[]
}

export type ProductType = {
  createdAt: string,
  id: string,
  categories: CategoriesType[],
  price: number,
  img: string,
  description: string,
  title: string,
  weight: number,
  calories: CaloriesType
}

export type CaloriesType = {
  protein: number,
  fat: number,
  carbohydrates: number,
  amount: number
}

export type CategoriesType = string


type UsePaginationProps = {
  contentPerPage: number,
  count: number,
}
type  UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}
export type UsePagination = (arg0: UsePaginationProps) => (UsePaginationReturn);