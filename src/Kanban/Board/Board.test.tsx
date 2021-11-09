import React from 'react'
import { render } from '@testing-library/react'

import Board from './Board'
import { BoardProps } from './Board.types'

describe('Board Component', () => {
  //@ts-ignore
  const renderComponent = () => render(<Board title={'foo'} />)

  it('', () => {})
})
