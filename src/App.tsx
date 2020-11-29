import React, { useState } from 'react';
import './App.css';
import 'flexboxgrid';
import { Currencies, CurrencyType } from './data/Currencies';
import ShowComponent from './components/ShowComponent/ShowComponent';
import ChoiseComponent from './components/ChoiseComponent/ChoiseComponent';

const Mintos = () => {
  const [currencies, setCurrencies] = useState<CurrencyType[]>(Currencies);

  const activeCurrencies = currencies.filter(({ isActive }) => {
    return isActive;
  });

  const currencyClickHandler = (id: number) => {
    const indexCurrency = currencies.findIndex((item) => item.id === id);
    const newCurrencies = [...currencies];
    newCurrencies[indexCurrency].isActive = !newCurrencies[indexCurrency].isActive;
    setCurrencies(newCurrencies);
  };

  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="card">
            <div className="row center-xs">
              <div className="col-xs-12">
                <ShowComponent
                  label={activeCurrencies}
                  clickHandler={(id) => currencyClickHandler(id)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <ChoiseComponent
                  label={currencies}
                  clickHandler={(id) => currencyClickHandler(id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mintos;
