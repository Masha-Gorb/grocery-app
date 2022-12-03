import React, {FC, ReactNode} from 'react';
import s from './FilterButton.module.css'

type Props = {
  onClick?: () => void
  children?: ReactNode
  isActive?: boolean
}

const FilterButton: FC<Props> = (props) => {
  const {children, onClick, isActive} = props
  return (
    <button
      className={isActive ? s.buttonActive : s.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;