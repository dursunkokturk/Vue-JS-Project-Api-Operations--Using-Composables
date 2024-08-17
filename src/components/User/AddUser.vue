<template>
    <div v-if="loading">

    </div>
    <form class="mt-4" @submit.prevent="submitForm" v-if="!loading">
        <div class="mb-3">
            <label class="form-label">
                Adınız
            </label>
            <input type="text" class="form-control" v-model="user.firstName">
        </div>
        <div class="mb-3">
            <label class="form-label">
                Soyadınız
            </label>
            <input type="text" class="form-control" v-model="user.lastName">
        </div>
        <button @click="submitForm" type="submit" class="btn btn-primary">
            Submit
        </button>
    </form>
</template>

<script setup>

    import postUser from '@/composables/postUser';
    import {reactive} from '@vue'

    const user = reactive({
        firstName:'',
        lastName:''
    })

    const {loading,submitForm} = postUser()
</script>