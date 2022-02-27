import React from 'react'
import { Card } from './Card'
import { Text } from '../Text/Text'
import { Spacer } from '../Spacer/Spacer'

export default {
  title: 'Card',
}

export const _Card = () => <Card>Card</Card>

export const CardWithText = () => (
  <Card>
    <Text weight="bold" scale="xl">
      Title
    </Text>
    <Spacer />
    <Text scale="l">Text</Text>
    <Spacer />
    <Text scale="s">Small Text</Text>
  </Card>
)
