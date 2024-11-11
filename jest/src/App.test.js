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

test("day 4",()=>{
  render(<App/>);
  const inp = screen.getByRole("textbox");
  const inpPlace = screen.getByPlaceholderText("enter");
  expect(inpPlace).toBeInTheDocument();
  expect(inp).toBeInTheDocument();
  expect(inp).toHaveAttribute("type","text")
})