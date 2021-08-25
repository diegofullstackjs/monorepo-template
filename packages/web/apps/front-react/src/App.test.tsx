import React from 'react'
import { render, screen } from '@testing-library/react'
import ExampleComponent from '@diegojs/components/src/example/example.component'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<ExampleComponent />)
  expect(getByText(/Exemplo/i)).toBeInTheDocument()
})
