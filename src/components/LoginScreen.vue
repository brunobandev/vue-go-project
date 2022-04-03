<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-5">Login</h1>
                <hr>
                <form-tag @myevent="submitHandler" name="myform" event="myevent">
                    <text-input 
                        v-model="email"
                        label="E-mail"
                        type="email"
                        name="email"
                        required="true" />

                    <text-input 
                        v-model="password"
                        label="Password"
                        type="password"
                        name="password"
                        required="true" />
                    <hr>
                    <input type="submit" class="btn btn-primary" value="Login">
                </form-tag>
            </div>
        </div>
    </div>
</template>

<script>
import FormTag from '../components/forms/FormTag.vue';
import TextInput from '../components/forms/TextInput.vue';
export default {
    name: "LoginScreen",
    components: {
        FormTag,
        TextInput,
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        submitHandler() {
            console.log("fired")
        }
    }
}
</script>