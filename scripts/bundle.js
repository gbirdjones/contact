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

var store = {};

butt.on('click', storeInfo);

function storeInfo(e) {
	e.preventDefault();
	var box1 = $('#box1');
	var box2 = $('#box2');
	var box3 = $('#box3');
	var box4 = $('#box4');

	store.name = box1.val();
	console.log(store.name);

	store.email = box2.val();
	console.log(store.email);

	store.website = box3.val();
	console.log(store.website);

	store.message = box4.val();
	console.log(store.message);

	if (store.email.indexOf('@') == -1) {
		error2.show();
	} else if (store.website.indexOf('http://') == -1) {
		error3.show();
	} else if (store.name === '') {
		console.log('name undefined');
		error1.show();
	} else if (store.email === '') {
		console.log('email undefined');
		error1.show();
	} else if (store.website === '') {
		console.log('website undefined');
		error1.show();
	} else if (store.message === '') {
		console.log('message undefined');
		error1.show();
	} else {
		console.log(store.name);
		sucInner.html('thanks ' + store.name + ' we have received your info');
		success.show();
		sucInner.show();
	}
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map