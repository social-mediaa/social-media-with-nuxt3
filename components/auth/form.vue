<template>
    <div>
        <div class="pt-5 space-y-6">
            user:{{ data.username }}
            pass:{{ data.password }}
            <UIInput value="" label="Username" placeholder="@username" v-model="data.username" />
            <UIInput value="" label="Password" placeholder="********" type="password" v-model="data.password" />
            <div>
                <button @click="handleLogin">login</button>
            </div>
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
</script>