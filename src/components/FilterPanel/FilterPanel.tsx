import React, {FC, ReactNode} from 'react';
import FilterButton from "../FilterButton";
import {ProductNames} from "../../types/products";
import s from "../ProductPage/ProductPage.module.css";


type  Props = {
  filters: string[]
  setFilters: (filter: ProductNames) => void
  children?: ReactNode
}

const FilterPanel: FC<Props> = (props) => {
  const {setFilters, filters, children} = props

  // можно показать что ты умеешь повторяющиеся задачи выносить в функции
  const getCn = (filters: string[], filterName: ProductNames) => {
    return filters.includes(filterName) ? s.buttonActive : s.button
  }

  return (
    <div className='buttonGroup'>
      {/*
          Заменить статические названия продуктов на enum
          если какое-то название изменится то по всему проекту придется заменять - а если есть enum - то только в одном месте
        */}
      {/*
          Можно кнопку сделать отдельным компонентом, вдруг потом будешьь переиспользовать. ПОказать что умеешь думать о будущем :D
        */}
      <FilterButton
        onClick={() => setFilters(ProductNames.Grocery)}
        isActive={filters.includes(ProductNames.Grocery)}
      >
        бакалея
      </FilterButton>
      {/*<button className={getCn(filters, ProductNames.Grocery)}
                onClick={() => setFilters(ProductNames.Grocery)}>бакалея
        </button>*/}
      <button className={getCn(filters, ProductNames.Vegetables)}
              onClick={() => setFilters(ProductNames.Vegetables)}>овощи и фрукты
      </button>
      <button className={getCn(filters, ProductNames.Meat)}
              onClick={() => setFilters(ProductNames.Meat)}>мясо и птица
      </button>
      <button className={getCn(filters, ProductNames.Dairy)}
              onClick={() => setFilters(ProductNames.Dairy)}>молочное
      </button>
      <br/>
      <button className={getCn(filters, ProductNames.Sweets)}
              onClick={() => setFilters(ProductNames.Sweets)}>сладости
      </button>
      <button className={getCn(filters, ProductNames.Frozen)}
              onClick={() => setFilters(ProductNames.Frozen)}>заморозка
      </button>
      <button className={getCn(filters, ProductNames.Eggs)}
              onClick={() => setFilters(ProductNames.Eggs)}>яйца
      </button>
      {children}
    </div>
  );
};

export default FilterPanel;