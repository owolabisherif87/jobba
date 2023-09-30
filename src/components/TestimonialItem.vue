<script setup lang="ts">
const props = defineProps<{
  name: string;
  designation: string;
  testimonial: string;
  imgUlr: string;
}>();

const img = new URL(`../assets/images/${props.imgUlr}`, import.meta.url).href;
</script>

<template>
  <div class="single-item bg-light">
    <div class="row align-items-center">
      <div class="col-md-5">
        <div class="profile">
          <div class="img-area">
            <img :src="img" :alt="props.imgUlr" />
          </div>
          <div class="bio">
            <h1>{{ props.name }}</h1>
            <p>{{ props.designation }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="content">
          {{ props.testimonial }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.single-item {
  background: #fff;
  color: #111;
  padding: 15px;
  margin: 10px 15px;
}
.profile {
  margin-bottom: 30px;
  text-align: center;
}
.img-area {
  margin: 0 15px 15px 15px;
}
.img-area img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 7px solid blueviolet;
}
.content {
  font-size: 18px;
  text-align: justify;
}
.content p {
  text-align: justify;
}
.content p span {
  font-size: 48px;
  margin-right: 20px;
  color: blueviolet;
}

.bio h4 {
  font-family: "Berkshire Swash", cursive;
}
</style>
