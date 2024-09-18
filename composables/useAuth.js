// import jwt_decode from "jwt-decode"
import { jwtDecode } from "jwt-decode";



export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () =>useState("auth_user");
  const useAuthLoaing = () => useState("auth_loading", ()=>true);

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    console.log("🚀 ~ setUser ~ newUser🤦‍♂️:", newUser)
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (value) => {
    const authLoading = useAuthLoaing();
    authLoading.value = value;
  };

  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        console.log('MMMMMMMMM',data);
        setToken(data.access_token);
        setUser(data.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/refresh");
        setToken(data.access_token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  const getUser =async () => {
    // return new Promise(async (resolve, reject) => {
      try {
        console.log("enteredd get userrrrr");
        const data = await useFetch("/api/auth/user",{
      
        });
        
        // const data = await $fetch("/api/auth/user",{
        //   method: "GET",
        // });
        console.log('ssssssssssss',data.data);
        
        setUser(data.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    // });
  };
  

  const reRefreshAccessToken  = ()=>{
    const authToken = useAuthToken()
    if(!authToken.value){
        return
    }
    const jwt = jwtDecode(authToken.value)
    const newRefreshTime = jwt.exp - 60000
    setTimeout(async () => {
        await refreshToken()
        reRefreshAccessToken()
    }, newRefreshTime);
  }

  const initAuth = () => {
    // alert("first")
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        await refreshToken();
        console.log('hereeeeeeeeeeeeeeeeeeee');
        await getUser();

        reRefreshAccessToken()

        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  };

  return {
    login,
    useAuthToken,
    initAuth,
    useAuthUser,
    useAuthLoaing
  };
};
