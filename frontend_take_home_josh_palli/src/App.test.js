import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hello world component', () => {
  render(<App />)
  const element = screen.getByText('Hello, world!')
  expect(element).toBeInTheDocument()
})

