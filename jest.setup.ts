import '@testing-library/jest-dom'
var enzyme = require('enzyme')
var Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })
