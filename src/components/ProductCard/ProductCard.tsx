import React from 'react';
import s from './ProductCard.module.css'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {ProductTypeWithM} from "../../types";
// для примера
// const {REACT_APP_URL} = process.env
export const ProductCard = (props: ProductTypeWithM) => {

  const {img, calories, description, weightWithMeasure:{weight,measure}, price, title} = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <img className={s.img} src={img} alt='картинка продукта'/>
      <br/>
      <span>вес {weight} {measure}</span>
      <br/>
      <span>{'цена ' + price + ' руб'}</span>
      <br/>
      <Button onClick={handleOpen}>Подробнее</Button>

      <Modal
        className={s.modal}
        open={open}
        onClose={handleClose}
      >
        <Box className={s.modalBox}>
          <div className={s.modalBoxContainer}>
            <h3>{title}</h3>
            {/*<img className={s.modalBoxImg} src={`${REACT_APP_URL}/${img}`} alt={'картинка продукта'}/>*/}
            <img className={s.modalBoxImg} src={img} alt={'картинка продукта'}/>
            <br/>
            <div className={s.modalInfoBox}>
              <p>{'Описание: ' + description}</p>
              {/* <span>{'Цена ' + price + ' руб.'}</span> */}
              {/* Сильно мудрено с конкатенацией и span вместо P */}
              <p>Цена {price} руб.</p>
              <hr/>
              <p>Пищевая ценность на 100гр</p>
              <p>{'Белки ' + calories.protein + ' гр'}</p>
              <p>{'Углеводы ' + calories.carbohydrates + ' гр'}</p>
              <p>{'Жиры ' + calories.fat + ' гр'}</p>
              <p>{'Ккал ' + calories.amount}</p>
            </div>

          </div>
        </Box>
      </Modal>

    </div>
  )
}