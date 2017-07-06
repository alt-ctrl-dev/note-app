import React from 'react';
import ReactDOM from 'react-dom';
import {render,shallow} from 'enzyme';
import {Note} from './Note';
import ReactTestUtils from 'react-dom/test-utils'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Note />, div);
});

it('must contain two buttons', () => {
  const note = render(<Note/>);
  expect(note.find('button')).toHaveLength(2);
});

it('contains a close button with fa-times', () => {
  const note = render(<Note/>);
  var closeBtn = note.find('button.btn-close');
  expect(closeBtn).toHaveLength(1);
  expect(closeBtn.find("i.fa-times")).toBeDefined();
  expect(closeBtn.find("i.fa-times")).toHaveLength(1);
});

it('contains an edit button', () => {
  const note = render(<Note/>);
  var editBtn = note.find('button.btn-edit');
  expect(editBtn).toHaveLength(1);
  expect(editBtn.find("i.fa-pencil")).toBeDefined();
  expect(editBtn.find("i.fa-pencil")).toHaveLength(1);
});

it('contains a save button after selecting the edit button', () => {
  const note = shallow(<Note/>);
  var editBtn = note.find('button.btn-edit');
  expect(editBtn).toHaveLength(1);
  editBtn.simulate("click");
  var saveBtn = note.find('button.btn-save');
  expect(saveBtn).toHaveLength(1);
  expect(saveBtn.find("i.fa-check")).toBeDefined();
  expect(saveBtn.find("i.fa-check")).toHaveLength(1);
});

it('contains a note with a text value Hello when provided with a value Hello', () => {
  const note = render(<Note>Hello</Note>);
  expect(note.find('p').text().trim()).toEqual('Hello');
});

// it('should save a note a text value Hi after hitting save', () => {
//   var AppElement = ReactTestUtils.renderIntoDocument( <Note>Hello</Note> );
//   var DomElement = ReactDOM.findDOMNode(AppElement);
  
//   expect(DomElement.getElementsByTagName("p")).toHaveLength(1);
//   expect(DomElement.getElementsByTagName("p")[0].innerHTML.trim()).toEqual(expect.stringContaining('Hello'));

//   expect(DomElement.getElementsByClassName("btn-edit")).toHaveLength(1);
//   var editBtn = DomElement.getElementsByClassName("btn-edit")[0]
//   ReactTestUtils.Simulate.click(editBtn);

//   expect(DomElement.getElementsByTagName("textarea")).toHaveLength(1);
//   var textarea = DomElement.getElementsByTagName("textarea")[0]
//   expect(textarea.value.trim()).toEqual('Hello');
//   textarea.value="Hi"
//   ReactTestUtils.Simulate.change(textarea);
//   expect(textarea.value.trim()).toEqual('Hi');


//   expect(DomElement.getElementsByClassName("btn-save")).toHaveLength(1);
//   var saveBtn = DomElement.getElementsByClassName("btn-save")[0]
//   ReactTestUtils.Simulate.click(saveBtn);


//   expect(DomElement.getElementsByTagName("p")).toHaveLength(1);
//   expect(DomElement.getElementsByTagName("p")[0].innerHTML.trim()).toEqual(expect.stringContaining('Hi'));
// });