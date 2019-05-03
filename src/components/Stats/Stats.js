import React from 'react';
import PropTypes from 'prop-types';
import css from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={css.section}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.list}>
      <li className={css.item} key={stats[0].id}>
        <span className={css.label}>{stats[0].label}</span>
        <span className="percentage">{stats[0].percentage}%</span>
      </li>
      <li className={css.item} key={stats[1].id}>
        <span className={css.label}>{stats[1].label}</span>
        <span className="percentage">{stats[1].percentage}%</span>
      </li>
      <li className={css.item} key={stats[2].id}>
        <span className={css.label}>{stats[2].label}</span>
        <span className="percentage">{stats[2].percentage}%</span>
      </li>
      <li className={css.item} key={stats[3].id}>
        <span className={css.label}>{stats[3].label}</span>
        <span className="percentage">{stats[3].percentage}%</span>
      </li>
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
