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
            name="Emmanuel Daniel"
            designation="Fullstack Developer"
            testimonial="I would like to express my heartfelt appreciation to Jobba for their 
            outstanding services and unwavering commitment to connecting talented individuals 
            with exceptional job opportunities. Jobba has truly been a game-changer in the 
            world of job searching and talent acquisition."
            img-ulr="testimonial1.jpg"
          />
        </div>
        <div class="carousel-item">
          <TestimonialItem
            name="Nick Simeon"
            designation="Graphic Designer"
            testimonial="Jobba's user-friendly platform and intuitive interface have made the job 
            search process not only efficient but also enjoyable. Their extensive database of job listings, 
            tailored recommendations, and helpful filters have made it 
            significantly easier for me to find the perfect job that aligns with my skills, interests, and career goals."
            img-ulr="testimonial2.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
