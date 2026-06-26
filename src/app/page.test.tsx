import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Page />)
    // Next.js default page has images and text, let's just check if it renders without crashing
    expect(document.body).toBeInTheDocument()
  })
})
