import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'enzyme';
import {Note} from './Note';
import ReactTestUtils from 'react-dom/test-utils'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Note />, div);
});

it('must contain two buttons', () => {
  const note = render(<Note/>);
  expect(note.find('button').length).toBe(2);
});

it('contains a close button with fa-close', () => {
  const note = render(<Note/>);
  var closeBtn = note.find('button.Btn-close');
  expect(closeBtn).toHaveLength(1);
  expect(closeBtn.find("i.fa-close")).toBeDefined();
});

it('contains an edit button', () => {
  const note = render(<Note/>);
  var editBtn = note.find('button.btn-edit');
  expect(editBtn).toHaveLength(1);
  expect(editBtn.find("i.fa-pencil")).toBeDefined();
});

it('contains a save button after selecting the edit button', () => {
  const note = render(<Note/>);
  note.find('button.btn-edit').simulate('click');
  var saveBtn = note.find('button.btn-save')
  expect(editBtn).toHaveLength(1);
  expect(saveBtn.find("i.fa-check")).toBeDefined();
});

it('contains a note with a text value Hello when provided with a value Hello', () => {
  const note = render(
    <Note>Hello</Note>
  );

  expect(note.find('p').text().trim()).toEqual('Hello');
});

it('should save a note a text value Hi after hitting save', () => {
  const note = render(
    <Note>Hello</Note>
  );
  expect(note.find('p').text().trim()).toEqual('Hello');
  note.find('button.btn-edit').simulate('click');


  expect(note.find("i.fa-check")).toBeDefined();

  expect(note.find('.note > textarea')).toBeDefined();
  const notetext = note.find('.note > textarea').root.node.refs.notetext
  notetext.value = 'Hi';
  ReactTestUtils.Simulate.change(notetext);

  note.find('button.btn-save').simulate('click');
  expect(note.find('p').text().trim()).toEqual('Hi');
});
