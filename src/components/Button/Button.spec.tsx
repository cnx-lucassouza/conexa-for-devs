import { render } from '@testing-library/react'
import Button from '.'
import { createSerializer } from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer())

test('should render correctly', () => {
  const { container } = render(<Button>1</Button>)

  expect(container.firstChild).toMatchSnapshot()
})
