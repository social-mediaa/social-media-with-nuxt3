export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
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
  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetchApi("/api/auth/user");
        setUser(data.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const initAuth = () => {
    // alert("first")
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        await refreshToken();
        await getUser();

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
