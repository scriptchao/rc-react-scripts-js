/*
 * @Author: 托尼
 * @Date: 2020-07-21 20:02:05
 * @LastEditors: 托尼
 * @LastEditTime: 2020-07-22 16:10:38
 */ 
import 'core-js'
import '@babel/runtime/regenerator'
import React from 'react'
import ReactDOM from 'react-dom'
import Example from './Example'

ReactDOM.render(<Example />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
