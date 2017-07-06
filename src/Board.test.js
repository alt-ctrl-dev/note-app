import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 
import {Board} from './Board';
import renderer from 'react-test-renderer';
import {render} from 'enzyme';

beforeAll(() => {
  console.error = (error) => {
    throw new Error(error);
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});

it('throws an error when count is not a number type', () => {
    expect.assertions(1);
    try{
        const board = renderer.create(<Board count="100"/>).toJSON()
    }
    catch(e){
        expect(e).toBeDefined();
    }
});

it('throws an error when count is greater than 100', () => {
    expect.assertions(1);
    try{
        const board = renderer.create(<Board count={101}/>).toJSON()
    }
    catch(e){
        expect(e).toBeDefined();
    }
});

it('must contain a + button', () => {
    const board = render(<Board/>);
    var addBtn = board.find('button.Btn-close');
    console.log(addBtn)
    expect(addBtn).toHaveLength(1);
    expect(addBtn.find("i.fa-plus")).toBeDefined();
});