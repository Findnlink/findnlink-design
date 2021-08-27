import React from 'react'
import { render, screen } from '@testing-library/react'
import { ButtonProps } from './Button.types'
import { Default, Primary, Disabled } from './Button.stories'

describe('Test Component', () => {
  let props: ButtonProps

  beforeEach(() => {})
  const onClickSpy = jest.fn()

  const renderComponent = () => render(<Default onClick={onClickSpy}>Default</Default>)

  it('should render Default text correctly', () => {
    const { getByTestId } = renderComponent()

    const component = screen.getByRole('button')
    component.click()

    expect(component).toHaveTextContent('Default')
    expect(onClickSpy).toHaveBeenCalled()
  })
})
