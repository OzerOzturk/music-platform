import { render, cleanup } from '@testing-library/react';
import ThemeContext from './ThemeContext';

describe('ThemeContext component', () => {
  afterEach(() => cleanup());

  test('should render ThemeContext', () => {
    const { getByText } = render(<ThemeContext />);
    const themeMode = getByText('isDark');
    expect(themeMode).toBeInTheDocument();
  });
});
