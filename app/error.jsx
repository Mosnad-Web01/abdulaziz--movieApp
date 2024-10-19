'use client'

// components/Error.js

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const errorStyles = css`
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  margin: 20px 0;
`;

const Error = ({ message = "An error occurred. Please try again later.", show = true }) => {
  if (!show) return null; // Render nothing if show is false

  return (
    <div css={errorStyles}>
      {message}
    </div>
  );
};

export default Error;
