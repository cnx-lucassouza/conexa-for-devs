import { makeStyles, css } from '@conexasaude/hero'

const useStyles = makeStyles({
  root: ({ colors }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.primary[500]};
  `,
})

export default useStyles
