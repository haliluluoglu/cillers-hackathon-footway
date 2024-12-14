export type ProductType = {
  id: string;
  image: {
    src: string;
    alt: string
  },
  name: string;
  link: string;
  brand: string;
  description: string;
  category: ProductCategoryTypes
}


export type ProductCategoryTypes = 'top' | 'bottom' | 'out' | 'dress' | 'under' | 'foot' | 'accessories' | 'other'


export const productCategories: { value: ProductCategoryTypes, verbose: string }[] = [
  {
    value: 'top',
    verbose: 'Tops'
  },
  {
    value: 'bottom',
    verbose: 'Bottoms'
  },
  {
    value: 'out',
    verbose: 'Outerwear'
  },
  {
    value: 'dress',
    verbose: 'Dresses'
  },
  {
    value: 'under',
    verbose: 'Undergarments'
  },
  {
    value: 'foot',
    verbose: 'Footwear'
  },
  {
    value: 'accessories',
    verbose: 'Accessories'
  },
  {
    value: 'other',
    verbose: 'Other'
  },
]

