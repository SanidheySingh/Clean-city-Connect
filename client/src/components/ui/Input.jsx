import React, { forwardRef } from 'react';

/**
 * Input – Styled form input with optional icon and error state.
 * 
 * Props:
 *  - label: label text
 *  - error: error message
 *  - icon: optional icon element (rendered on left)
 *  - className: additional wrapper classes
 *  - All standard input props (type, placeholder, value, onChange, etc.)
 */
const Input = forwardRef(function Input(
  { label, error, icon, className = '', ...inputProps },
  ref
) {
  return (
    <div className={className}>
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <div className={icon ? 'input-wrapper' : ''}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          ref={ref}
          className={`input-field ${error ? 'input-field--error' : ''}`}
          {...inputProps}
        />
      </div>
      {error && (
        <p className="input-error-msg">
          <svg className="input-error-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
