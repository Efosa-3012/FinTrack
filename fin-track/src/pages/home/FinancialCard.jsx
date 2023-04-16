// src/components/financialTipCard/FinancialTipCard.js
import React from 'react';
import './FinancialCard.scss';

const FinancialTipCard = ({ tip }) => {
  return (
    <div className="financial-tip-card">
      <h1 className="financial-tip-heading">Financial Tip of the Day</h1>
      <p className="financial-tip-paragraph">{tip}</p>
    </div>
  );
};

export default FinancialTipCard;
