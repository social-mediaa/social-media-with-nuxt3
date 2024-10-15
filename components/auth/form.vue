<template>
    <div class="w-full">
        <div class="flex justify-center ">
            <div class="w-10 h-10">
                <LogoTwitter/>
            </div>
        </div>
        <div class="pt-5 space-y-6">
            user:{{ data.username }}
            pass:{{ data.password }}
            <UIInput value="" label="Username" placeholder="@username" v-model="data.username" />
            <UIInput value="" label="Password" placeholder="********" type="password" v-model="data.password" />
            <UIButton liquid :disabled="isButtonDisabled" @click="handleLogin">
                Login
            </UIButton>
        </div>
    </div>
</template>

<script setup>
const data = reactive({
    username: '',
    password: '',
    loading:false
})


async function handleLogin(){
    const {InformToastify} = useToastify()
    InformToastify('infooooooooo')
    const {login} = useAuth()

    data.loading = true
    try {
        await login ({
            username:data.username,
            password:data.password
        })
    } catch (error) {
        console.log(error);
    }finally{
        data.loading = false 
    }
}

const isButtonDisabled = computed(()=>{
    return (!data.username || !data.password) || (data.loading)
})
</script>