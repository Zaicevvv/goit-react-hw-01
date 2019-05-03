import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import css from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={css.plan}>
    {items.map(item => (
      <li key={item.label} className={css.item}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PricingPlan;
