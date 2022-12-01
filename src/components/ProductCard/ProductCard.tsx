import React from 'react';
import s from './ProductCard.module.css'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {ProductType} from "../../types";


export const ProductCard = (props: ProductType) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={s.container}>
      <h4>{props.title}</h4>
      <img className={s.img} src={props.img} alt='картинка продукта'/>
      <br/>
      <span>{'вес ' + props.weight}</span>
      <br/>
      <span>{'цена ' + props.price + ' руб'}</span>
      <br/>
      <Button onClick={handleOpen}>Подробнее</Button>

      <Modal
        className={s.modal}
        open={open}
        onClose={handleClose}
      >
        <Box className={s.modalBox}>
          <div className={s.modalBoxContainer}>
            <h3>{props.title}</h3>
            <img className={s.modalBoxImg} src={props.img} alt={'картинка продукта'}/>
            <br/>
            <div className={s.modalInfoBox}>
              <span>{'Описание: ' + props.description}</span>
              <br/>
              <span>{'Цена ' + props.price + ' руб.'}</span>
              <hr/>
              <span>Пищевая ценность на 100гр</span>
              <br/>
              <span>{'Белки ' + props.calories.protein + ' гр'}</span>
              <br/>
              <span>{'Углеводы ' + props.calories.carbohydrates + ' гр'}</span>
              <br/>
              <span>{'Жиры ' + props.calories.fat + ' гр'}</span>
              <br/>
              <span>{'Ккал ' + props.calories.amount}</span>
            </div>

          </div>
        </Box>
      </Modal>

    </div>
  )
}