(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var success = $('#success');
success.hide();
var sucInner = $('#sucInner');
sucInner.hide();
var error1 = $('#error1');
error1.hide();
var error2 = $('#error2');
error2.hide();
var error3 = $('#error3');
error3.hide();
var error4 = $('#error4');
error4.hide();

var butt = $('#butt');

var store = [];

butt.on('click', storeInfo);

function storeInfo(e) {
	e.preventDefault();
	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');
	var box4 = $('#box4');

	store.push(box1.val());

	store.push(box2.val());

	store.push(box3.val());

	store.push(box4.val());

	if (!store[0]) {
		error1.show();
		store = [];
	}
	if (store[1].indexOf('@') == -1) {
		error2.show();
		store = [];
	}
	if (store[2].indexOf('http://') == -1) {
		error3.show();
		store = [];
	}
	if (!store[3]) {
		error4.show();
		store = [];
	}
	sucInner.html('thanks ' + store[0] + ' we have received your info');
	success.show();
	sucInner.show();
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map