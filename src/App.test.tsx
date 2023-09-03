import App from "./App"
import {render, screen} from '@testing-library/react'

describe('App', () => {

    beforeEach(()=> {
        render(<App></App>)
    })

    test('should show title', () => {
        expect(screen.queryAllByText(/mi app/i)).toBeDefined()
    })
})