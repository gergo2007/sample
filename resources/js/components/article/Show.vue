<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Article</h4>
                </div>
                <div class="card-body">
                    <h1>{{ article.title }}</h1>

                    <p>{{ article.content }}</p>
                    <rating :rating="article.avg_rating"></rating>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from "../Rating.vue";

export default {
    name:"show",

    components: {
        Rating
    },

    data(){
        return {
            article: {
                'title': '',
                'content': '',
            }
        }
    },

    mounted(){
        this.showArticle()
    },

    methods:{
        showArticle() {
            axios.get(`/api/article/${this.$route.params.id}`).then(response=>{
                this.article = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
    }
}
</script>
