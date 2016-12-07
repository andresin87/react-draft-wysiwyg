import bold from '../icons/bold.gif';
import italic from '../icons/italic.gif';
import underline from '../icons/underline.gif';
import strikethrough from '../icons/strikethrough.gif';
import subscript from '../icons/subscript.gif';
import superscript from '../icons/superscript.gif';
import eraser from '../icons/erase.gif';
import left from '../icons/left-align.gif';
import right from '../icons/right-align.gif';
import center from '../icons/center-align.gif';
import justify from '../icons/justify.gif';
import ordered from '../icons/ordered.gif';
import unordered from '../icons/unordered.gif';
import indent from '../icons/indent.gif';
import outdent from '../icons/outdent.gif';
import link from '../icons/link.gif';
import unlink from '../icons/unlink.gif';
import image from '../icons/image.gif';
import undo from '../icons/undo.gif';
import redo from '../icons/redo.gif';

import brackets from '../icons/brackets.svg';

export const sampleToolbar = {
  inline: {
    bold: { icon: bold, className: 'demo-option-custom' },
    italic: { icon: italic, className: 'demo-option-custom' },
    underline: { icon: underline, className: 'demo-option-custom' },
    strikethrough: { icon: strikethrough, className: 'demo-option-custom' },
    monospace: { className: 'demo-option-custom' },
    superscript: { icon: superscript, className: 'demo-option-custom' },
    subscript: { icon: subscript, className: 'demo-option-custom' },
  },
  blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  fontSize: { className: 'demo-option-custom-medium' },
  list: {
    unordered: { icon: unordered, className: 'demo-option-custom' },
    ordered: { icon: ordered, className: 'demo-option-custom' },
    indent: { icon: indent, className: 'demo-option-custom' },
    outdent: { icon: outdent, className: 'demo-option-custom' },
  },
  textAlign: {
    left: { icon: left, className: 'demo-option-custom' },
    center: { icon: center, className: 'demo-option-custom' },
    right: { icon: right, className: 'demo-option-custom' },
    justify: { icon: justify, className: 'demo-option-custom' },
  },
  fontFamily: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  colorPicker: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  link: {
    popupClassName: 'demo-popup-custom',
    link: { icon: link, className: 'demo-option-custom' },
    unlink: { icon: unlink, className: 'demo-option-custom' },
  },
  emoji: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  embedded: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  image: { icon: image, className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  remove: { icon: eraser, className: 'demo-option-custom' },
  history: {
    undo: { icon: undo, className: 'demo-option-custom' },
    redo: { icon: redo, className: 'demo-option-custom' },
  },
};

export const sampleToolbar2 = {
  inline: {
    bold: { icon: null, className: 'ico ico-android' },
    italic: { icon: null, className: 'ico ico-apple' },
    underline: { icon: null, className: 'ico ico-beta' },
    strikethrough: { icon: null, className: 'ico ico-cake' },
    monospace: { className: 'demo-option-custom' },
    superscript: { icon: superscript, className: 'demo-option-custom' },
    subscript: { icon: subscript, className: 'demo-option-custom' },
  },
  blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  fontSize: { className: 'demo-option-custom-medium' },
  list: {
    unordered: { icon: unordered, className: 'demo-option-custom' },
    ordered: { icon: ordered, className: 'demo-option-custom' },
    indent: { icon: indent, className: 'demo-option-custom' },
    outdent: { icon: outdent, className: 'demo-option-custom' },
  },
  textAlign: {
    left: { icon: left, className: 'demo-option-custom' },
    center: { icon: center, className: 'demo-option-custom' },
    right: { icon: right, className: 'demo-option-custom' },
    justify: { icon: justify, className: 'demo-option-custom' },
  },
  fontFamily: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  colorPicker: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  link: {
    popupClassName: 'demo-popup-custom',
    link: { icon: link, className: 'demo-option-custom' },
    unlink: { icon: unlink, className: 'demo-option-custom' },
  },
  emoji: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  embedded: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  image: { icon: image, className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  remove: { icon: eraser, className: 'demo-option-custom' },
  history: {
    undo: { icon: undo, className: 'demo-option-custom' },
    redo: { icon: redo, className: 'demo-option-custom' },
  },
};

export const sampleToolbar3 = {
  inline: {
    bold: { icon: null, className: 'fa fa-bold' },
    italic: { icon: null, className: 'fa fa-italic' },
    underline: { icon: null, className: 'fa fa-underline' },
    strikethrough: { icon: null, className: 'fa fa-strikethrough' },
    monospace: { icon: brackets, className: 'fa' },
    superscript: { icon: null, className: 'fa fa-superscript' },
    subscript: { icon: null, className: 'fa fa-subscript' },
  },
  blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  fontSize: { className: 'demo-option-custom-medium' },
  list: {
    unordered: { icon: null, className: 'fa fa-list-ul' },
    ordered: { icon: null, className: 'fa fa-list-ol' },
    indent: { icon: null, className: 'fa fa-indent' },
    outdent: { icon: null, className: 'fa fa-outdent' },
  },
  textAlign: {
    left: { icon: null, className: 'fa fa-align-left' },
    center: { icon: null, className: 'fa fa-align-center' },
    right: { icon: null, className: 'fa fa-align-right' },
    justify: { icon: null, className: 'fa fa-align-justify' },
  },
  fontFamily: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
  colorPicker: { icon: null, className: 'fa fa-pencil', popupClassName: 'demo-popup-custom' },
  link: {
    popupClassName: 'demo-popup-custom',
    link: { icon: null, className: 'fa fa-chain' },
    unlink: { icon: null, className: 'fa fa-unlink' },
  },
  emoji: { icon: null, className: 'fa fa-smile-o', popupClassName: 'demo-popup-custom' },
  embedded: { className: 'demo-option-custom', popupClassName: 'demo-popup-custom' },
  image: { icon: null, className: 'fa fa-picture-o', popupClassName: 'demo-popup-custom' },
  remove: { icon: null, className: 'fa fa-eraser' },
  history: {
    undo: { icon: null, className: 'fa fa-undo' },
    redo: { icon: null, className: 'fa fa-repeat' },
  },
};
