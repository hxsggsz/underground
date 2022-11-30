import { render } from "@testing-library/react";
import Header from './header'

describe('<Header />', () => {
  it('should render the header', () => {

    const { getByRole } = render(<Header />)

    const logo = getByRole('img', { name: /logo/i })

    expect(logo).toBeInTheDocument()
  })

  it('should redirect to /cars', async () => {
    const { getByTestId } = render(<Header />)

    const link = getByTestId('link')

    expect(link).toHaveAttribute('href', '/cars')
  })
});