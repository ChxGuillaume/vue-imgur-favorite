<template>
    <div class="about">
        <div class="row">
            <div class="col-3" v-for="img in favImages" :key="img.id">
                <ImageCard :image="img" @favChange="removeImg"></ImageCard>
            </div>
        </div>
    </div>
</template>

<script>
  import {store} from '../stores/fav-images.js';
  import ImageCard from "../components/ImageCard";

  export default {
    name: 'bookmarks',
    components: {ImageCard},
    data() {
      return {
        favImages: store.state.images,
      }
    },
    methods: {
      removeImg(img) {
        store.addImage(img);
      }
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
        color: #FFC107;
        transition: .2s ease;


        stroke: black;
        stroke-width: 30px;

        &:hover {
            color: #ffffff;
        }
    }
</style>
