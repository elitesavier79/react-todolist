import { css } from "@emotion/core";

export const todo = ({ theme }) =>
  css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 30px;
    margin: 16px 0 0;
    font-family: "homemade Apple", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid ${theme.color.primary.red};
  `;

export const todoText = ({ theme, isCompleted }) =>
  css`
    position: absolute;
    width: 100%;
    left: 1%;
    transition: translate(-30%);
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    $color: ${theme.color.primary.black};
    height: 50px;
  `;
