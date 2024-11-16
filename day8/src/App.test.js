import { render, screen } from '@testing-library/react';
import App from './App';

// afterEach(()=>{
//   console.log("beforeall")
// })

// test('renders learn react link', () => {
//   console.log("1")
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test('renders learn react link2', () => {
//   console.log("2")
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('day8-2', () => { 
  const app = render(<App/>);
  expect(app).toMatchSnapshot()
 })