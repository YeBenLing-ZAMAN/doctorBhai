import { useEffect, useState } from "react"


const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        console.log(email);
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('admin data', data);
                    setAdmin(data.admin);
                })
        }
    }, [user])
    return [admin];
}

export default useAdmin;