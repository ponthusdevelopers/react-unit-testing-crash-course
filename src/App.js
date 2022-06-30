import './App.css'

import Users from './Components/Users'

function App() {

    const users = [
        {id: 1, name: 'John', age: 15},
        {id: 2, name: 'Kelly', age: 20}
    ]

    return (
        <>
            {users.map((user, index) => {
                return (
                    <Users
                        key={`users-${index}`}
                        user={user}
                    />
                )
            })}
        </>
    )
}

export default App
