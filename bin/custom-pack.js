#!/usr/bin/env node
const Compiler = require('../lib/Compiler')
// 开头第一行代表指定用哪个解释器来执行脚本
new Compiler().start();