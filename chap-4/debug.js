//? set NODE_DEBUG=myall,* or my* to show the number of the currency process
const util = require('node:util')
const debug = util.debuglog('myapp')
debug('myapp debug message [%d]', 123)
