import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }

  return css`
    /*width: 25%;*/
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    /*padding: 16px;*/
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};