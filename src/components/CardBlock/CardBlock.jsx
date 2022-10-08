import React, { useState } from 'react';
import './CardBlock.scss';

const CardBlock = ({ count, visible, check, onClickCheck }) => {
  const [countSelect, setCountSelect] = useState(0);

  const onClickCard = (e) => {
    //перевіряємо, що кнопка hidden
    if (e.target.className === 'block-main__item') {
      if (countSelect < 2) {
        const btn = e.target.querySelector('.block-main__btn');
        btn.classList.remove('visible');
        btn.classList.add('active');

        setCountSelect((prevSelect) => {
          return prevSelect + 1;
        });

        //запам'ятовуємо першу картку
        if (!check) {
          onClickCheck(btn);
        } else {
          if (check.value === btn.value) {
            onClickCheck(null);
            setCountSelect(0);
            setTimeout(() => {
              check.classList.remove('active');
              btn.classList.remove('active');
            }, 300);
          } else {
            onClickCheck(null);
            setCountSelect(0);
            setTimeout(() => {
              check.classList.add('visible');
              btn.classList.add('visible');
              check.classList.remove('active');
              btn.classList.remove('active');
            }, 700);
          }
        }
      }
    }
  };

  return (
    <div onClick={(e) => onClickCard(e)} className="block-main__item">
      <input
        type="button"
        value={count}
        className={visible ? 'block-main__btn' : 'block-main__btn visible'}
      />
    </div>
  );
};

export default CardBlock;
