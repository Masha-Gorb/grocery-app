import React, {FC} from 'react';
import s from './ShoppingCart.module.css'
import n from './../ProductCard/ProductCard.module.css'
import {Link} from "react-router-dom";
import ShoppingCartProductCard from "../ShoppingCartProductCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {getProducts} from "../../helpers/getProducts";

const ShoppingCart: FC<any> = () => {
  const state = getProducts()



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <button><Link to="/">к продуктам</Link></button>
        <h1>Корзина с покупками</h1>

        {state.map(m => {
          return <ShoppingCartProductCard
            key={m.id}
            title={m.title}
            img={m.img}
            price={m.price}
          />
        })}
        <ShoppingCartProductCard/>
        <Button onClick={handleOpen}>Промокод</Button>

      </div>

      <Modal
        className={n.modal}
        open={open}
        onClose={handleClose}
      >
        <Box className={n.modalBox}>
          <div className={n.modalBoxContainer}>
            <h3>Введите промокод</h3>
            <input type='text' placeholder='ЖАБА'/>
            <button>ввести</button>
          </div>
        </Box>
      </Modal>

    </div>

  );
};

export default ShoppingCart;