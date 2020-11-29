import React, { FC } from 'react';
import 'flexboxgrid';
import { CurrencyType } from '../../data/Currencies';
import styles from './ChoiseComponent.module.css';

type Props = {
  label: CurrencyType[];
  clickHandler: (id: number) => void;
};

const ChoiseComponent: FC<Props> = ({ label, clickHandler }) => {
  return (
    <div className={styles.choiseWrapper}>
      {label?.map(({ id, name, isActive }) => {
        return (
          <button
            type="button"
            key={id}
            onClick={() => clickHandler(id)}
            className={!isActive ? styles.choiseButton : styles.choiseActiveButton}
          >
            <span className={isActive ? styles.checkboxRed : styles.checkbox}>
              <span className={styles.checboxSymbol}>X</span>
            </span>
            <span className={styles.currencyName}>{name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ChoiseComponent;
