import React from 'react'
import { render } from '@testing-library/react'

import Column from './Column'
import ColumnProps from './Column.types'

describe('Card Component', () => {
  const renderComponent = () =>
    render(<Column items={[{ value: 'hallo', id: 'awd' }]} color={'blue'} />)

  it('', () => {})
})
