"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chat = _interopRequireDefault(require("assets/widget/chat.svg"));

var _community = _interopRequireDefault(require("assets/widget/community.svg"));

var _github = _interopRequireDefault(require("assets/widget/github.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  widgets: [{
    id: 1,
    iconSrc: _chat["default"],
    altText: 'Community',
    title: 'Join the Community',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.'
  }, {
    id: 2,
    iconSrc: _community["default"],
    altText: 'Chat',
    title: 'Chat Communication',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.'
  }, {
    id: 3,
    iconSrc: _github["default"],
    altText: 'Github',
    title: 'Github Access',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.'
  }],
  menuItem: [{
    path: '/',
    label: 'Home'
  }, {
    path: '/',
    label: 'Adversite'
  }, {
    path: '/',
    label: 'Supports'
  }, {
    path: '/',
    label: 'Marketing'
  }, {
    path: '/',
    label: 'Contact'
  }]
};
exports["default"] = _default;