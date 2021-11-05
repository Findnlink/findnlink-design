import React from 'react'
import { render } from '@testing-library/react'

import Card from './Card'
import { CardProps } from './Card.types'

describe('Card Component', () => {
  const renderComponent = () =>
    render(<Card items={[{ value: 'hallo', id: 'awd' }]} color={'blue'} />)

  it('', () => {})
})
