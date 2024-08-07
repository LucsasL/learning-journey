import React from 'react';

function Input({ label, type, id, value, onChange }) {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}: </label> <br />
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e, 0)}
          required
        />
      </div>
    </>
  );
}

export default Input;