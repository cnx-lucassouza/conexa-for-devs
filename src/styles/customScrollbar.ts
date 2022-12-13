import { css } from '@conexasaude/hero'
import { SerializedStyles } from '@emotion/react'

export const scrollbar = (width?: number): SerializedStyles => css`
  ::-webkit-scrollbar {
    width: ${width ? width + 'px' : '20px'};
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    height: 2em;
    border: 0.4em solid rgba(0, 0, 0, 0);
    background-clip: padding-box;

    border-radius: 1em;
    background-color: rgba(0, 0, 0, 0.15);
  }
  ::-webkit-scrollbar:horizontal {
    height: 8px;
    background-color: none;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`
