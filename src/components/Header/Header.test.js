import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  afterEach(() => cleanup());

  test('should render Header', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('valid-header');
    expect(title).toBeInTheDocument();
  });
});
