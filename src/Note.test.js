import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Note} from './Note';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Note />, div);
});

it('must contain two buttons', () => {
  const note = shallow(<Note/>);
  expect(note.find('button').length).toBe(2);
});

it('contains a close button with fa-close', () => {
  const note = shallow(<Note/>);
  var closeBtn = note.find('button.Btn-close');
  expect(closeBtn.find("i.fa-close")).toBeDefined();
});

it('contains an edit button', () => {
  const note = shallow(<Note/>);
  var editBtn = note.find('button.btn-edit');
  expect(editBtn.find("i.fa-pencil")).toBeDefined();
});

it('contains a save button after selecting the edit button', () => {
  const note = shallow(<Note/>);
  note.find('button.btn-edit').simulate('click');
  var saveBtn = note.find('button.btn-save')
  expect(saveBtn.find("i.fa-check")).toBeDefined();
});

it('contains a note without a text value Hello when provided with a value Hello', () => {
  const note = shallow(
    <Note>Hello</Note>
  );

  expect(note.find('p').text().trim()).toEqual('Hello');
});
