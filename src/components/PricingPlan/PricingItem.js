import React from 'react';
import PropTypes from 'prop-types';
import css from './PricingPlan.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className="pricing-item">
    <i className={css.icon} style={{ backgroundImage: `url(${icon})` }} />
    <h2 className={css.label}>{label}</h2>
    <p className="capacity">{capacity}</p>
    <p className="description">{description}</p>
    <p className={css.price}>${price}/MO</p>
    <button type="button" className={css.button}>
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
