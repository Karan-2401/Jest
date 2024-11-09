import {render, screen} from "@testing-library/react"
import App from "./App"

test('should be cheack', () => {
  render(<App/>);
  const text = screen.getByText(/Hi hello namste!/i);
  const text2 = screen.getByText(/Kemcho/i);
  const title = screen.getByTitle(/Karan/i)
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument()
})

