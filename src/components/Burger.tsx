import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css';

import InferProps from '../types/InferProps';

const BurgerPropTypes = {
  action: PropTypes.func.isRequired,
}

const Burger = ({action}: InferProps<typeof BurgerPropTypes>) => (
  <div className = "burger" role="button" onClick={action}>
    <i className="fas fa-search burger-icon"></i>
  </div>
);

Burger.propTypes = BurgerPropTypes;

export default Burger;