import { render, screen, cleanup } from '@testing-library/react'
import Users from '../Users'

/* test('Should render Users component', () => {
    render(<Users />)
    const userElement = screen.getByTestId('user-1')
    expect(userElement).toBeInTheDocument()
    expect(userElement).toHaveTextContent('Hi')
}) */

test('Should render illegal user', () => {
    const user = {id: 1, name: 'John', age: 15}

    render(<Users user={user} />)
    const userElement = screen.getByTestId('user-1')
    expect(userElement).toBeInTheDocument()
    expect(userElement).toHaveTextContent('John')
})

test('Should render legal user', () => {
    const user = {id: 2, name: 'Kelly', age: 20}

    render(<Users user={user} />)
    const userElement = screen.getByTestId('user-2')
    expect(userElement).toBeInTheDocument()
    expect(userElement).toHaveTextContent('Kelly')
})