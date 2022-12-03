import React, {FC, ReactNode} from 'react';
import s from './Layout.module.css'

type Props = {
  className?:string
  children?:ReactNode
}

const Layout:FC<Props> = (props) => {
  const {children,className} = props
  const cn = className ? `${s.layout}, ${className}` : s.layout
  return (
    <div className={cn}>
      {children}
    </div>
  );
};

export default Layout;