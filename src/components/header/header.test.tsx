import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from './header';

describe('Header Component', () => {
  it('should render the brand logo', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render the brand name', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const brandName = getByText('Craft Beer Emporium');
    expect(brandName).toBeInTheDocument();
  });

  it('should render the manage link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const manageLink = getByText('Manage');
    expect(manageLink).toBeInTheDocument();
    expect(manageLink).toHaveAttribute('href', '/manage');
  });
});
