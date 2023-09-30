<script setup lang="ts">
import TestimonialItem from "./TestimonialItem.vue";
</script>

<template>
  <div class="px-5 mb-3">
    <div class="pt-2 d-flex justify-content-start">
      <h3 class="ms-3">Testimonials.</h3>
    </div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <TestimonialItem
            name="Emmanuella Daniel"
            designation="Fullstack Developer"
            testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          reprehenderit est minus fugiat vel incidunt, cupiditate iusto quasi
          veniam ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Velit reprehenderit est minus fugiat vel incidunt, cupiditate
          iusto quasi veniam ducimus."
            img-ulr="hero-image.png"
          />
        </div>
        <div class="carousel-item">
          <TestimonialItem
            name="Blessings Oyedika"
            designation="Graphic Designer"
            testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          reprehenderit est minus fugiat vel incidunt, cupiditate iusto quasi
          veniam ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Velit reprehenderit est minus fugiat vel incidunt, cupiditate
          iusto quasi veniam ducimus."
            img-ulr="hero-image.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
