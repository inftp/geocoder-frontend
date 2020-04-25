import React from 'react';
import PropTypes from 'prop-types';

import InferProps from '../types/InferProps';
import KEY_CODES from '../lib/constants/KeyCodes';

const InputWithClearButtonPropTypes = {
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const InputWithClearButtonDefaultProps = {
  value: '',
};

const InputWithClearButton = (
  { onClear, onChange, value }: 
    InferProps<
      typeof InputWithClearButtonPropTypes,
      typeof InputWithClearButtonDefaultProps
    >) => {
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
        tabIndex={0}
      />
    </div>
  );
};

export default InputWithClearButton;
