import { render } from '@testing-library/react'
import Home from './page'

describe('<Home />', () => {
  it('should render the component', () => {
    const { getByRole } = render(<Home />)

    expect(getByRole('heading', { name: /next 13/i })).toBeInTheDocument()
  });
});