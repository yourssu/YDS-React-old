// dino`s code https://github.com/yourssu/YDS-Web/blob/main/src/foundation/Typography.ts
import { css } from '@emotion/react'

enum FontWeight {
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

export enum Typography {
  Title1 = 'title1',
  Title2 = 'title2',

  Subtitle1 = 'subtitle1',
  Subtitle2 = 'subtitle2',
  Subtitle3 = 'subtitle3',

  Body1 = 'body1',
  Body2 = 'body2',

  Button0 = 'button0',
  Button1 = 'button1',
  Button2 = 'button2',
  Button3 = 'button3',
  Button4 = 'button4',

  Caption0 = 'caption0',
  Caption1 = 'caption1',
  Caption2 = 'caption2',
}

export function getTypoStyle(typo: Typography = Typography.Body1) {
  switch (typo) {
    case Typography.Title1:
      return css`
        font-size: 28px;
        font-weight: ${FontWeight.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Title2:
      return css`
        font-size: 24px;
        font-weight: ${FontWeight.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Subtitle1:
      return css`
        font-size: 20px;
        font-weight: ${FontWeight.Medium};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Subtitle2:
      return css`
        font-size: 16px;
        font-weight: ${FontWeight.Medium};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Subtitle3:
      return css`
        font-size: 14px;
        font-weight: ${FontWeight.Medium};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Body1:
    default:
      return css`
        font-size: 15px;
        font-weight: ${FontWeight.Regular};
        line-height: 1.6;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Body2:
      return css`
        font-size: 14px;
        font-weight: ${FontWeight.Regular};
        line-height: 1.6;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Button0:
      return css`
        font-size: 16px;
        font-weight: ${FontWeight.Medium};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Button1:
      return css`
        font-size: 16px;
        font-weight: ${FontWeight.Medium};
        line-height: 1;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Button2:
      return css`
        font-size: 14px;
        font-weight: ${FontWeight.Medium};
        line-height: 1;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Button3:
      return css`
        font-size: 14px;
        font-weight: ${FontWeight.Regular};
        line-height: 1;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Button4:
      return css`
        font-size: 12px;
        font-weight: ${FontWeight.Medium};
        line-height: 1;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `

    case Typography.Caption0:
      return css`
      font-size: 12px;
      font-weight: ${FontWeight.Medium};
      line-height: 1.3;
      letter-spacing: 0;
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `

    case Typography.Caption1:
      return css`
      font-size: 12px;
      font-weight: ${FontWeight.Regular};
      line-height: 1.3;
      letter-spacing: 0;
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `

    case Typography.Caption2:
      return css`
        font-size: 11px;
        font-weight: ${FontWeight.Regular};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      `
  }
}
