import React from 'react';
import PropTypes from 'prop-types';
import css from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={css.section}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.list}>
      {stats.map(item => (
        <li className={css.item} key={item.id}>
          <span className={css.label}>{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
