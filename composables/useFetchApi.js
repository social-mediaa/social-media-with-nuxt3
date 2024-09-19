export default (url,options={})=>{
    console.log("options😜",options);
    const {useAuthToken} = useAuth()

    return $fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${useAuthToken().value}`
        }
    })
}

