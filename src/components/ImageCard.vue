<template>
    <div class="card">
        <img class="card-img-top" :src="image.link" :alt="image.title">
        <fa-icon class="star" :class="{ 'selected': image.favorite }" :icon="['fas', 'star']" @click="addImage(image)"/>
        <div class="card-body">
            <h5 class="card-title">{{ image.title }}</h5>
            <p class="card-text">{{ image.description }}</p>
            <a href="#" class="btn btn-primary" v-clipboard:copy="image.link">Copy</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ImageCard",
    props: {
      image: {
        type: Object,
        required: true,
      }
    },
    methods: {
      addImage() {
        this.$emit('favChange', this.image);
      }
    }
  };
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

        &:hover {
            color: #FFC107;
        }

        &.selected {
            color: #FFC107;

            &:hover {
                color: #ffffff;
            }
        }
    }
</style>
