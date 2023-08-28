<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Article</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Avg Rating</th>
                                    <th># Rated</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="articles.length > 0">
                                <tr v-for="(article,key) in articles" :key="key">
                                    <td>{{ article.id }}</td>
                                    <td>{{ article.title }}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <router-link
                                            :to='{name:"articleShow",params:{id:article.id}}'
                                            class="btn btn-success"
                                        >
                                            View
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Artiles Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"categories",

    data(){
        return {
            articles: []
        }
    },

    mounted(){
        this.getCategories()
    },

    methods:{
        getCategories() {
            axios.get('/api/article').then(response=>{
                this.articles = response.data
            }).catch(error=>{
                console.log(error)
                this.articles = []
            })
        },
    }
}
</script>
