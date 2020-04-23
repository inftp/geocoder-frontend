import React from 'react';
import PropTypes from 'prop-types';

import KEY_CODES from '../lib/constants/KeyCodes';

const InputWithClearButton = (props) => {
  const { onClear, onChange, value } = props;
  return (
    <div className="input-with-clear-button">
      <input
        id="search"
        value={value}
        autoComplete="off"
        onChange={e => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === KEY_CODES.ESCAPE) {
            onClear();
          }
        }}
      />
      <div
        className="icon-close"
        onClick={onClear}
        onKeyDown={(e) => {
          if (e.keyCode === KEY_CODES.ENTER) {
            onClear();
          }
        }}
        role="button"
        tabIndex="0"
      />
    </div>
  );
};

InputWithClearButton.propTypes = {
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

InputWithClearButton.defaultProps = {
  value: '',
};

export default InputWithClearButton;
