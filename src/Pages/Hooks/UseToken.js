import { useEffect, useState } from 'react';

const UseToken = user => {
    const [token, setToken] = useState("")
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            const url = `http://localhost:5000/user/${email}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token
                    localStorage.setItem('access', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token]
};

export default UseToken;