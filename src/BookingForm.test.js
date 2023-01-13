import { render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Reservations from './components/Booking Form/Reservations';
import SuccessPage from './components/SuccessPage/SucessPage';
import App from './App';

describe('loads the home page', () => {
  test('renders little lemon home page title', () => {
    render(<Router><App /></Router>);
    const littlelemon = screen.getByTestId('homepage-title');
    expect(littlelemon).toBeInTheDocument();
  });
  test('Reserve Table button is visible on home page', () => {
    render(<Router><App /></Router>);
    const button = screen.getByTestId('reserve-button');
    expect(button).toBeInTheDocument();
  })
})

test('form loads and inputs displays as expected', () => {
  const form = {
    name: 'inputname',
    guests: '1-2',
    date: '2023-01-17',
    time: '09:30',
    phone: 1234567890,
    comments: 'testcomment'
  }
  // const onChange = jest.jn();
  // const onSubmit = jest.fn();
  render(
  <Router>
  <Reservations
    form={form}
    onChange={jest.fn()}
    onSubmit={jest.fn()}
  />
  </Router>
  )


  const title = screen.getByText('Reserve A Table');
  expect(title).toBeInTheDocument();

  const name = screen.getByPlaceholderText('Enter Name');
  expect(name).toBeInTheDocument();
  expect(name).toHaveValue('inputname');

  const phone = screen.getByPlaceholderText('000-000-0000');
  expect(phone).toBeInTheDocument();
  expect(phone).toHaveValue(1234567890);

  const comments = screen.getByPlaceholderText('Additional Comments');
  expect(comments).toBeInTheDocument();
  expect(comments).toHaveValue('testcomment');

  const button = screen.getByText('Submit');
  expect(button).toBeInTheDocument();
})

test('success page shows necessary information', () => {
  const form = {
    name: 'inputname',
    guests: '1-2',
    date: '2023-01-17',
    time: '09:30',
    phone: 1234567890,
    comments: 'testcomment'
  }
  render(<Router><SuccessPage form={form} /></Router>)

  const title = screen.getByText('Reservation Submitted');
  expect(title).toBeInTheDocument();

  const name = screen.getByText('inputname');
  expect(name).toBeInTheDocument();
  const guests = screen.getByText('1-2');
  expect(guests).toBeInTheDocument();
  const datetime = screen.getByText('2023-01-17 @ 09:30');
  expect(datetime).toBeInTheDocument();
  const phone = screen.getByText(1234567890)
  expect(phone).toBeInTheDocument();
  const comments = screen.getByText('testcomment');
  expect(comments).toBeInTheDocument();
})