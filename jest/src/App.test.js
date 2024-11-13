import {fireEvent, render, screen} from "@testing-library/react"
import App from "./App"
import Day6 from "./Day6";

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

describe.skip("describe 1",()=>{
  test("desceribe checking 1",()=>{
    render(<App/>);
    const a = screen.getByRole("textbox");
    expect(a).toBeInTheDocument;
  })
})

describe("describe 2",()=>{
  test("desceribe checking 2",()=>{
    render(<App/>);
    const a = screen.getByRole("textbox");
    expect(a).toBeInTheDocument;
  })
})

test("day6",()=>{
  render(<Day6/>);
  const Ip = screen.getByRole("textbox");
  fireEvent.change(Ip,{ target: { value: "a" } })
  expect(Ip.value).toBe("a")
})