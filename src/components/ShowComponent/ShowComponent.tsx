import React, { FC } from 'react';
import 'flexboxgrid';
import { CurrencyType } from '../../data/Currencies';
import styles from './ShowComponent.module.css';

type Props = {
  label: CurrencyType[];
  clickHandler: (id: number) => void;
};

const ShowComponent: FC<Props> = ({ label, clickHandler }) => {
  return (
    <div className={styles.showWrapper}>
      {label?.map(({ id, name }) => {
        return (
          <div className={styles.currency} key={id}>
            {name}
            <button type="button" onClick={() => clickHandler(id)} className={styles.xButton}>
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowComponent;
