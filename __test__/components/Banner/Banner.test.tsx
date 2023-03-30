import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from '@/components/Banner/Banner'

describe('Banner component', () => {
    beforeEach(() => {
        render(<Banner />)
    })

    it('Should render a paragraph text', () => {
        const text = screen.getByRole('paragraph')
        const paragraphText = "We are offering discounts up to 50% off selected products"
        expect(text).toHaveTextContent(paragraphText)
    })

    it('Should have a close button', () => {
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })

    it('Should render an empty div', () => {
        const emptyDivElement = screen.getByTestId("emptyDiv")
        expect(emptyDivElement).toBeEmptyDOMElement()
    })
})