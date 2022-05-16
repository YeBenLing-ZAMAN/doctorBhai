import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            console.log('user jeta pachi', user);
            fetch(`https://sheltered-earth-75473.herokuapp.com/user/${email}`,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('data inside useToken', data);
                const accesstoken = data.token;
                localStorage.setItem('accesstoken',accesstoken);
                setToken (accesstoken);
            })
        }

    }, [user])
    return [token];
}

export default useToken;