import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());

  test('should have secondary background color', () => {
    const { getByTestId } = render(<App />);
    const Container = getByTestId('app-container');
    expect(Container).toHaveStyle('background-color:#FFFF');
  });
});
