export default (url,options={})=>{
    const {useAuthToken} = useAuth()

    return{
        ...options,
        headers:{
            ...options.headers,
            Authorization:`Bearer ${useAuthToken().value}`
        }
    }
}