<template>
    <div class="home">
        <div class="row mb-3">
            <div class="col-12">
                <input class="form-control" type="text" v-model="search" @keyup="searchImg">
            </div>
        </div>
        <div class="row">
            <div class="col-12" v-for="a in albums" :key="a.id">
                <div class="row">
                    <h2 class="col-12 mt-3 mb-4">{{ a.title }}</h2>
                    <div class="col-3" v-for="img in a.images" :key="img.id">
                        <ImageCard :image="img" @favChange="addFav"></ImageCard>
<!--                        <div class="card">-->
<!--                            <img class="card-img-top" :src="img.link" :alt="img.title">-->
<!--                            <fa-icon class="star" :class="{ 'selected': img.favorite }" :icon="['fas', 'star']"-->
<!--                                     @click="addFav(img)"/>-->
<!--                            <div class="card-body">-->
<!--                                <h5 class="card-title">{{ img.title }}</h5>-->
<!--                                <p class="card-text">{{ img.description }}</p>-->
<!--                                <a href="#" class="btn btn-primary">Go somewhere</a>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {store} from '../stores/fav-images.js';
  import ImageCard from "../components/ImageCard";

  export default {
    name: 'home',
    components: {ImageCard},
    data() {
      return {
        search: 'cats',
        albums: {},
        favImages: store.state.images
      }
    },
    methods: {
      searchImg(e) {
        if (e.code === 'Enter') this.axios
          .get(`https://api.imgur.com/3/gallery/search?q=${this.search}`, {
            headers: {'Authorization': `Client-ID ${process.env.VUE_APP_CLIENT_ID}`}
          })
          .then(resp => {
            this.albums = resp.data.data.map(e => {
              if (e.images) e.images.map(img => {
                if (this.favImages.find(sImg => sImg.id === img.id)) {
                  img.favorite = true;
                }
                return img;
              });

              return e;
            });
          })
      },
      addFav(img) {
        store.addImage(img);
      },
    },
    mounted() {
      this.searchImg({code: 'Enter'});
    }
  }
</script>

<style lang="scss" scoped>
    img {
        max-width: 90vw;
    }

    svg.star {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        color: #ffffff;
        transition: .2s ease;


        stroke: black;
        stroke-width: 30px;

        &:hover,
        &.selected {
            color: #FFC107;
        }
    }
</style>
