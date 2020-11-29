import React from 'react';


export type CurrencyType = {
    id: number,
    name: string,
    isActive: boolean,
  }
  
export const Currencies: CurrencyType[] = [
    { id: 0, name: 'eur', isActive: false },
    { id: 1, name: 'pln', isActive: false },
    { id: 2, name: 'gel', isActive: false },
    { id: 3, name: 'dkk', isActive: false },
    { id: 4, name: 'czk', isActive: false },
    { id: 5, name: 'gbp', isActive: false },
    { id: 6, name: 'sek', isActive: false },
    { id: 7, name: 'usd', isActive: false },
    { id: 8, name: 'rub', isActive: false },
];

