export const userTranformer = (user)=>{
    return{
        id:user.id,
        name:user.name,
        email:user.name,
        username:user.username,
        profileImage:user.profileImage,
        handle:'@' + user.username
    }
}