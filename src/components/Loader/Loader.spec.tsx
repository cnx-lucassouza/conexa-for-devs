import { render } from '@testing-library/react'
import Loader from '.'

test('should render correctly', () => {
  const { container } = render(<Loader />)

  expect(container.firstChild).toMatchSnapshot()
})
