import React from 'react';
import { bool, string as str } from 'prop-types';

const Input = ({
  textarea = false,
  label,
  ...props
}) => (
  textarea
    ? (
      <textarea
        className="mdc-text-field__input"
        aria-label={label}
        {...props}
      />
    )
    : (
      <input
        className="mdc-text-field__input"
        type="text"
        aria-label={label}
        {...props}
      />
    )
);

Input.propTypes = {
  textarea: bool,
  label: str.isRequired,
};

export default Input;
