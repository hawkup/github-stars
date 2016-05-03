#!/bin/sh

cd angularjs && npm install && npm test && cd ..
cd angularjs2 && npm install && npm test -- --single-run && cd ..
cd emberjs && npm install && npm test && cd ..
cd reactjs-redux && npm install && npm test && cd ..
