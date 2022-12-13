import { css } from '@emotion/react'
import {
  Suspense,
  LazyExoticComponent,
  ReactElement,
  FunctionComponent,
} from 'react'
import Loader from '../Loader'

const Loadable =
  (Component: LazyExoticComponent<FunctionComponent>, fullHeight?: boolean) =>
  // eslint-disable-next-line react/display-name
  (): ReactElement =>
    (
      <Suspense
        fallback={
          <Loader
            css={css`
              height: ${fullHeight ? '100vh' : 'auto'};
              margin-top: ${fullHeight ? '0' : '16px'};
            `}
          />
        }
      >
        <Component />
      </Suspense>
    )

export default Loadable
