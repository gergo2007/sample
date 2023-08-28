<template>
    <div class="rating-wrapper">
        <template v-for="number in 5">
            <i v-if="number <= rating" class="fas fa-star"></i>
            <i v-else class="far fa-star"></i>
        </template>
    </div>
</template>

<script>
export default {
    name: "rating",

    props: [
        'rating'
    ],

    data(){
        return {
        }
    },

}
</script>
