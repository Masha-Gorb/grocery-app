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