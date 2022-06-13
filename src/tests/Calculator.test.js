import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 1 and 4', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract 4 from 7 to get 3', () => {
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply 3 by 5 to get 15', () => {
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15')
})

it('should be able to divide 21 by 7 to get 3', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const divide = container.getByTestId('operator-divide');
  const button7 = container.getByTestId('number7');
  const equals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(divide);
  fireEvent.click(button7);
  fireEvent.click(equals);
  expect(runningTotal.textContent).toEqual('3')
})

it('should be able to concatinate multiple number clicks', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const button7 = container.getByTestId('number7');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(button7);
  expect(runningTotal.textContent).toEqual('217')
})

it('should be able to chain multiple operations together', () => {
  const button7 = container.getByTestId('number7');
  const subtract = container.getByTestId('operator-subtract');
  const button4 = container.getByTestId('number4');
  const multiply = container.getByTestId('operator-multiply');
  const button5 = container.getByTestId('number5');
  const add = container.getByTestId('operator_add');
  const equals = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button7);
  fireEvent.click(subtract);
  fireEvent.click(button4);
  fireEvent.click(multiply);
  fireEvent.click(button5);
  fireEvent.click(add);
  fireEvent.click(button4);
  fireEvent.click(equals);
  expect(runningTotal.textContent).toEqual('19')
})

it('should be able clear running total without affecting the calculation', () => {
  const button7 = container.getByTestId('number7');
  const clear = container.getByTestId('clear');
  const runningTotal = container.getByTestId('running-total');
  const button4 = container.getByTestId('number4');
  const multiply = container.getByTestId('operator-multiply');
  const equals = container.getByTestId('operator-equals');
  const add = container.getByTestId('operator_add');
  fireEvent.click(button4);
  fireEvent.click(multiply);
  fireEvent.click(button7);
  fireEvent.click(equals);
  fireEvent.click(clear);

  expect(runningTotal.textContent).toEqual('0');
  fireEvent.click(add);
  fireEvent.click(button7);
  fireEvent.click(equals);
  expect(runningTotal.textContent).toEqual('35');



})
})
