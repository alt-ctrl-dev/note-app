import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Note from './Note';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Note />, div);
});

it('must contain two buttons', () => {
  const note = shallow(<Note/>);
  expect(note.find('button').length).toBe(2);
});

it('contains a close button with value X', () => {
  const note = shallow(<Note/>);
  var closeBtn = note.find('button.Btn-close');

  expect(closeBtn.text().trim()).toEqual('X');
});

it('contains an edit button', () => {
  const note = shallow(
    <Note>Hello</Note>
  );

  var editBtn = note.find('button.Btn-edit');

  expect(editBtn.text().trim()).toEqual('Edit');
});

it('contains a note with a text value Hello when provided with a value Hello', () => {
  const note = shallow(
    <Note>Hello</Note>
  );

  expect(note.find('p').text().trim()).toEqual('Hello');
});
