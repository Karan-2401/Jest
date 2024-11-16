import {render, screen} from "@testing-library/react"
import App from "./App"

beforeAll(()=>{
  console.log('beforeall')
})

test('should be cheack33', () => {
  render(<App/>);
  const text = screen.getByText(/Hi hello namste!/i);
  const text2 = screen.getByText(/Kemcho/i);
  const title = screen.getByTitle(/Karan/i)
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument()
})

test("333",()=>{
  render(<App/>);
  const inp = screen.getByRole("textbox");
  const inpPlace = screen.getByPlaceholderText("enter");
  expect(inpPlace).toBeInTheDocument();
  expect(inp).toBeInTheDocument();
  expect(inp).toHaveAttribute("type","text")
})