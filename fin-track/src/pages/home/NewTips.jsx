// src/components/financialTipCard/FinancialTipCard.js
import React from 'react';
import './FinancialCard.scss';

const NewsTipCard = ({ tip }) => {
  return (
    <div className="financial-tip-card">
      <h1 className="financial-tip-heading">Today's News Headline </h1>
      <p className="financial-tip-paragraph">{tip}</p>
    </div>
  );
};

export default NewsTipCard;
