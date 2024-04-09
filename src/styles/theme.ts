import { css } from 'styled-components';

const colors = {
  blue_bg: '#8CABD9',
  green_bg: '#9DE694',
  white: '#FFF',
  grey_bg: '#F5F5F5',
  navy_bg: '#7692B9',
  black: '#111',
  blue_txt: '#415675',
};

const fonts = {
  message: css`
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.028rem;
  `,
  date: css`
    font-family: 'Pretendard';
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  `,
  sent_time: css`
    font-family: 'Pretendard';
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
  `,
  sent_person_small: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.024rem;
  `,
  sent_person_large: css`
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.036rem;
  `,
  time_now: css`
    font-family: 'SF Pro Text';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.1rem;
    letter-spacing: -0.032rem;
  `,
  chats: css`
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 3.36rem */
    letter-spacing: -0.048rem;
  `,
  iconDetails: css`
    font-family: Pretendard;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.08rem */
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
