<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

import iconGeo from "~/components/icons/geo.vue";
import iconPhone from "~/components/icons/phone.vue";
import iconMail from "~/components/icons/mail.vue";
import iconFacebook from "~/components/icons/facebook.vue";
import iconTwitter from "~/components/icons/twitter.vue";
import iconLinkedin from "~/components/icons/linkedin.vue";
import iconInstagram from "~/components/icons/instagram.vue";
import iconSearch from "~/components/icons/search.vue";
import iconCart from "~/components/icons/iconCart.vue";
import iconCheck from "~/components/icons/iconCheck.vue";
import iconStar from "~/components/icons/iconStar.vue"
import iconStarFill from "~/components/icons/iconStarFill.vue"
import iconPlus from "~/components/icons/iconPlus.vue"
import iconPlay from "~/components/icons/iconPlay.vue"
import iconArrowLeft from "~/components/icons/iconArrowLeft.vue"
import iconArrowRight from "~/components/icons/iconArrowRight.vue"

const scrolled = ref(false);

const slides = ref([
  'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/10/slide1-1.jpg',
  'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/10/slide1-1.jpg',
  'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/10/slide1-1.jpg',
]);

const projects = ref([
  {
    title: "White living room",
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/p1-380x475.jpg"
  },
  {
    title: "White living room",
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/p1-380x475.jpg"
  },
  {
    title: "White living room",
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/p1-380x475.jpg"
  },
  {
    title: "White living room",
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/p1-380x475.jpg"
  },
  {
    title: "White living room",
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/p1-380x475.jpg"
  },
  {
    title: "White living room",
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/p1-380x475.jpg"
  }
])

const products = ref([
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 35,
    rating: 4
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 23.4503,
    rating: 4
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 35,
    rating: 4
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 35,
    rating: 4
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 35,
    rating: 5
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 35,
    rating: 3
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 34,
    rating: 2
  },
  {
    img: "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/6.jpg",
    title: "Dining chair",
    price: 24,
    rating: 1
  }
])

const services = ref([
  {
    status: true,
    title: "Interior decorating",
    text: "Dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet elit magnis nulla.",
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/1-1.jpg'
  },
  {
    status: false,
    title: "Interior decorating",
    text: "Dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet elit magnis nulla.",
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/1-1.jpg'
  },
  {
    status: false,
    title: "Interior decorating",
    text: "Dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet elit magnis nulla.",
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/06/1-1.jpg'
  },
])

const brands = ref([
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
  "https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/client-logo-3.png",
])


const team = ref([
  {
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/review-design-3.png',
    title: 'Excellent work',
    rating: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Fiona Williams",
    city: "New York, NY"
  },
  {
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/review-design-3.png',
    title: 'Excellent work',
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Fiona Williams",
    city: "New York, NY"
  },
  {
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/review-design-3.png',
    title: 'Excellent work',
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Fiona Williams",
    city: "New York, NY"
  },
  {
    img: 'https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/review-design-3.png',
    title: 'Excellent work',
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Fiona Williams",
    city: "New York, NY"
  },
])

const formatNumber = (num) => {
  return parseFloat(num).toFixed(2);
};

const handleScroll = () => {
  scrolled.value = window.scrollY >= 35;
}

const changeServiceStatus = (el) => {
  services.value.map(el => el.status = false);
  el.status = true;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
  <div class="bg-white">
    <header class="header fixed w-full top-0 left-o text-white z-[1000]"
      :class="{
        active: scrolled
      }">
      <div class="border-b border-[#ffffff26]">
        <div class="flex justify-between items-center container max-w-[900px]">
          <div class="flex gap-5">
            <div class="flex gap-1.5 items-center">
              <div>
                <icon-geo />
              </div>
              <h3 class="museo text-sm font-medium text-white"> 49 Street, Los Angeles </h3>
            </div>
            <a href="#"
              class="flex gap-1.5 items-center header__contact-link">
              <div>
                <icon-phone />
              </div>
              <h3 class="museo text-sm font-medium text-white">(222) 400-630</h3>
            </a>
            <a href="#"
              class="flex gap-1.5 items-center header__contact-link">
              <div>
                <icon-mail />
              </div>
              <h3 class="museo text-sm font-medium text-white">contact@etalon.com</h3>
            </a>
          </div>
          <div class="flex border-x border-[#ffffff26] py-2.5">
            <a href="#"
              class="px-4 py-1 border-r border-[#ffffff26] header-social">
              <icons-facebook />
            </a>
            <a href="#"
              class="px-4 py-1 border-r border-[#ffffff26] header-social">
              <icons-twitter />
            </a>
            <a href="#"
              class="px-4 py-1 border-r border-[#ffffff26] header-social">
              <icons-linkedin />
            </a>
            <a href="#"
              class="px-4 py-1 border-r border-[#ffffff26] header-social">
              <icons-instagram />
            </a>
          </div>
        </div>
      </div>
      <div class="container flex justify-between items-center">
        <div class="h-full flex">
          <a href="#"
            class="leading-[90px] text-inherit text-[22px] museo font-black">
            Artroom
          </a>
        </div>
        <div class="flex items-center">
          <ul class="flex">
            <li>
              <a href="#"
                class="py-9 px-4 text-base inherit font-bold leading-[16px]">Home</a>
            </li>
            <li>
              <a href="#"
                class="py-9 px-4 text-base inherit font-bold leading-[16px]">About Us</a>
            </li>
            <li>
              <a href="#"
                class="py-9 px-4 text-base inherit font-bold leading-[16px]">Services</a>
            </li>
            <li>
              <a href="#"
                class="py-9 px-4 text-base inherit font-bold leading-[16px]">Shop</a>
            </li>
            <li>
              <a href="#"
                class="py-9 px-4 text-base inherit font-bold leading-[16px]">Blog</a>
            </li>
            <li>
              <a href="#"
                class="py-9 px-4 text-base inherit font-bold leading-[16px]">Contact</a>
            </li>
          </ul>
          <div>
            <div class="w-9 h-9 flex items-center justify-center cursor-pointer">
              <icon-search />
            </div>
          </div>
          <div>
            <div class="w-9 h-9 flex items-center justify-center cursor-pointer">
              <icon-cart />
            </div>
          </div>
          <button type="button"
            :class="{
        active: scrolled
      }"
            class="header-button font-bold text-base inherit border-2 py-4 px-6 border-[#ffffff] ml-4">Make
            Appointment</button>
        </div>
      </div>

    </header>
    <main>
      <Swiper class="banner-swiper"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="1"
        :speed=1000
        :navigation="true"
        :simulate-touch="false"
        :loop="true"
        :autoplay="{
        delay: 7000,
        disableOnInteraction: true,
      }">
        <SwiperSlide class="relative !flex items-center justify-center"
          :style="{
        backgroundImage: `url(${slide})`
      }"
          v-for="(slide, index) in slides"
          :key="index">
          <div class="">
            <h3 class="text-white text-[44px] py-2.5 font-bold leading-[130%] text-center">
              Get inspired. <br> Design a beautiful home
            </h3>
            <div class="flex gap-2 justify-center mt-6">
              <a href="#"
                class="button">Style Quiz</a>
              <a href="#"
                class="button second !max-w-[175px]">Design Consult</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
    <section class="services pt-[80px] pb-[35px]">
      <div class="container">
        <div class="flex gap-[15px] mb-[30px]">
          <div v-for="(item, index) in services"
            :key="index"
            class="services__item 2xl:h-[370.5px] h-[306.5px] float-left relative overflow-hidden flex"
            @mouseenter="changeServiceStatus(item)"
            @click="changeServiceStatus(item)"
            :class="{
        active: item.status
      }">
            <div class="h-full services__item-img max-w-[370.5px] max-[1535px]:max-w-[306.5px]">
              <img class="object-cover w-full h-full block"
                :src="item.img"
                alt="service image">
            </div>
            <div
              class="absolute left-[306.5px] 2xl:left-[370.5px] bg-[#f3f3f3] h-full max-w-[400px] w-[306.5px] 2xl:w-[370.5px] p-10">
              <h4 class="2xl:text-2xl text-base font-bold mb-5 museo text-[#2f2f2f]">{{ item.title }}</h4>
              <p class="font-bold text-sm 2xl:text-xl text-[#9e9e9e] museo">{{ item.text }}</p>
              <button type="button"
                class="button mt-[25px]">Read More</button>
            </div>
          </div>
        </div>
        <div class="py-[45px] flex justify-between items-center">
          <div>
            <h3 class="text-left text-2xl	leading-[1.4] tracking-tighter text-[#2f2f2f] font-bold">Book an appointment
              today</h3>
            <p class="leading-[1.4] text-sm	text-[#9e9e9e] text-left">Booking an appointment online is the quickest and
              easiest way to schedule.</p>
          </div>
          <button type="button"
            class="button">View All Services</button>
        </div>
      </div>
    </section>
    <section class="video py-[80px] bg-[#f7f7f7]">
      <div class="container flex">
        <div class="w-1/2">
          <h3 class="mt-5 mb-2.5 text-[34px] text-[#2f2f2f] font-bold leading-[45px] max-w-[485px]">Work one-on-one with
            your interior
            designer</h3>
          <p class="museo mt-[25px] mb-10 text-base text-[#9e9e9e] max-w-[485px]">Mus accumsan venenatis hac curabitur
            per quis
            parturient
            vel ut a
            sit scelerisque a
            sociis
            posuere
            penatibus. Nunc risus est nulla morbi, egestas lobortis dui maecenas lacinia qui adipiscing, evget purus
            venenatis hac curabitur per morbi.</p>
          <button type="button"
            class="button">Get Started</button>
        </div>
        <div class="w-1/2">
          <div class="aspect-[650/350] overflow-hidden video-box relative">
            <img class="w-full h-full object-cover"
              src="https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/video-1.jpg"
              alt="image">
            <button type="button"
              class="w-[80px] h-[80px] rounded-full bg-[#FF5959] absolute left-1/2 top-1/2 duration-200 hover:scale-110 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
              <icon-play fill="#ffffff"
                class="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="projects pt-[80px]">
      <h2 class="title text-center">Client projects</h2>
      <p class="subtitle">Browse styles and get inspired with our favorite home redesign projects.</p>
      <div class="mt-[50px]"></div>
      <Swiper class="projects__swiper"
        :modules="[SwiperAutoplay]"
        :slides-per-view="5">
        <SwiperSlide v-for="(el, index) in projects"
          :key="index">
          <div class="project__swiper-item">
            <img :src="el.img"
              alt="">
            <div class="project__swiper-box">
              <div class="project__swiper-inner">
                <h3 class="project__swiper-title">{{ el.title }}</h3>
                <a href="#"
                  class="project__swiper-btn button">READ MORE</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="brand py-[80px]">
      <div class="container">
        <Swiper :slides-per-view="5">
          <SwiperSlide v-for="(el, index) in brands"
            :key="index">
            <div
              class="brand-item overflow-hidden after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:h-[28px] after:w-[2px] after:bg-[#dadada] after:right-[-1px] flex justify-center items-center h-[62px]">
              <img :src="el"
                class="aspect-ratio-[150/62] w-[135px] duration-200 select-none"
                alt="brand item">
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="statistics">
      <div class="relative pt-[100px] pb-[340px]">
        <div
          class="bg-[url('https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/parallax2-1.jpg')] w-full h-full top-0 left-0 absolute">

        </div>
        <div class="container relative z-10">
          <h3 class="font-bold text-[34px] leading-[45px] tracking-tighter text-center text-[#ffffff]">Rely on an expert
            eye</h3>
          <p class="museo mt-2.5 text-center m-auto max-w-[650px] font-light text-[#ffffff] mb-[50px]">Let your designer
            do the hard
            work and find the right pieces for you, your space and budget.</p>
        </div>
      </div>

      <div class="bg-[#f3f3f3] pb-[100px] relative">
        <div class="container h-[305px]">
          <div class="relative h-[605px] bg-[red] -translate-y-[305px] flex">
            <div class="w-1/2 h-full">
              <img class="w-full h-full object-cover"
                src="https://www.keydesign-themes.com/etalon/home-decor/wp-content/uploads/sites/9/2017/09/about-us.jpg"
                alt="statistics image">
            </div>
            <div class="w-1/2 bg-white h-full flex flex-col justify-center px-[70px]">
              <div class="flex items-center max-w-[440px] justify-between w-full">
                <div class="flex flex-col items-center gap-1.5">
                  <h3 class="text-[55px] leading-[48px] mb-2.5 text-center text-[#FF5959]">125</h3>
                  <h4 class="museo mt-[10px] text-center text-base font-semibold">Designers</h4>
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <h3 class="text-[55px] leading-[48px] mb-2.5 text-center text-[#FF5959]">350</h3>
                  <h4 class="museo mt-[10px] text-center text-base font-semibold">Projects</h4>
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <h3 class="text-[55px] leading-[48px] mb-2.5 text-center text-[#FF5959]">630</h3>
                  <h4 class="museo mt-[10px] text-center text-base font-semibold">Happy clients</h4>
                </div>
              </div>
              <p class="museo text-[#9e9e9e] text-sm mt-[50px] leading-6">Mus accumsan venenatis hac curabitur per quis parturient vel ut a sit scelerisque a sociis posuere
                penatibus. Nunc risus est nulla morbi, egestas lobortis dui maecenas lacinia qui adipiscing, evget purus
                venenatis hac curabitur per morbi.</p>
                <div class="button mt-[55px]">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="price pb-[80px] bg-[#f3f3f3]">
      <div class="container flex ">
        <div class="max-w-[415px] pl-[15px] w-1/3 mr-4">
          <div class="max-w-[300px] w-full">
            <h3 class="title text-left mt-[35px] mb-[10px]">
              Pricing plans and options
            </h3>
            <p class="mt-[25px] text-lg	text-[#9e9e9e] font-normal museo">
              Simple, flexible, and predictable pricing. Choose which package is best suited for you.
            </p>
            <button class="button other mt-[50px]"
              type="button">View All Plans</button>
            <a href="#"
              class="mt-[50px] inline-block text-[#2f2f2f] text-base font-bold hover:text-[#FF5959] duration-200">Need
              more? Let's get in touch!</a>
          </div>
        </div>
        <div class="price__box flex w-2/3">
          <div class="price__box-item bg-white w-1/2">
            <h3 class="pt-[40px] text-base text-[#2f2f2f] text-center museo font-bold relative z-10">AI Consult</h3>
            <div class="px-[30px] py-[40px] relative z-10">
              <div class="w-full flex justify-center flex-col items-center mb-[10px]">
                <span class="text-6xl	text-[#FF5959] relative tracking-tighter">
                  <span class="text-2xl absolute -top-[2px] -left-[12px] ">$</span>
                  0
                </span>
                <span class="museo text-sm font-bold leading-6">/room</span>
              </div>
              <div class="mb-[25px]">
                <ul class="flex flex-col price-list">
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :color="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Product recommendations</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :color="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Shopping service</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :color="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Initial style concept</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :color="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Unlimited revisions</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :color="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Post-design support</h3>
                  </li>
                </ul>
              </div>
              <a href="#"
                class="m-auto button">Get Started</a>
            </div>
          </div>
          <div class="bg-[#ebebeb] w-1/2">
            <h3 class="pt-[40px] text-base text-[#2f2f2f] text-center museo font-bold relative z-10">Premium</h3>
            <div class="px-[30px] py-[40px] relative z-10">
              <div class="w-full flex justify-center flex-col items-center mb-[10px]">
                <span class="text-6xl	text-[#FF5959] relative tracking-tighter">
                  <span class="text-2xl absolute -top-[2px] -left-[12px] ">$</span>
                  15
                </span>
                <span class="museo text-sm font-bold leading-6">/room</span>
              </div>
              <div class="mb-[25px]">
                <ul class="flex flex-col price-list">
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :fill="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Product recommendations</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :fill="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Shopping service</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :fill="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Initial style concept</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :fill="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Unlimited revisions</h3>
                  </li>
                  <li class="flex items-center justify-center gap-1 border-b border-[#0000001a] py-[10px]">
                    <iconCheck :fill="'#FF5959'" />
                    <h3 class="text-sm text-[#9e9e9e] leading-[21px] museo">Post-design support</h3>
                  </li>
                </ul>
              </div>
              <a href="#"
                class="m-auto button">Get Started</a>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="team py-[80px]">
      <div class="container">
        <h2 class="title text-center">In good company</h2>
        <p class="subtitle">We are very proud of the service we provide and stand by every product we carry. Read our
          testimonials from our happy customers.</p>
        <div class="mt-[50px]">
          <Swiper :modules="[SwiperNavigation]"
            :slides-per-view="3"
            :space-between="30"
            :navigation="{
        nextEl: '.team-swiper-next',
        prevEl: '.team-swiper-prev'
      }">
            <SwiperSlide v-for="(el, index) in team"
              :key="index"
              class="bg-[#f3f3f3] !flex flex-col items-center py-[35px] px-[40px]">
              <div class="w-[80px] h-[80px] rounded-full mb-[30px]">
                <img :src="el.img"
                  class="w-full h-full object-cover"
                  alt="person image">
              </div>
              <h3 class="uppercase text-[#2f2f2f] text-base	font-bold museo text-center mb-[15px]">{{ el.title }}</h3>
              <div class="flex gap-1.5 items-center">
                <div v-for="star in 5"
                  :key="star">
                  <component :color="'#FF5959'"
                    :is="star <= el.rating ? iconStarFill : iconStar" />
                </div>
              </div>
              <p class="py-[20px] text-center text-[#9e9e9e] text-sm leading-7 max-w-[310px] museo">
                {{ el.text }}
              </p>
              <h3 class="text-[#2f2f2f] text-base	font-bold museo text-center">{{ el.name }}</h3>
              <h4 class="text-[#9e9e9e] text-sm museo text-center">{{ el.city }}</h4>
            </SwiperSlide>
          </Swiper>
          <div class="flex justify-center gap-1.5 mt-[30px]">
            <button type="button"
              class="team-swiper-prev w-[26px] h-[28px] border-[2px] border-[#2f2f2f] flex items-center justify-center">
              <iconArrowLeft fill="#2f2f2f"
                width="12"
                height="12" />
            </button>
            <button type="button"
              class="team-swiper-next w-[26px] h-[28px] border-[2px] border-[#2f2f2f] flex items-center justify-center">
              <iconArrowRight fill="#2f2f2f"
                width="12"
                height="12" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="products pt-[80px] pb-[80px] bg-[#f3f3f3]">
      <div class="container">
        <h2 class="title text-center">Curated shopping</h2>
        <p class="subtitle">We have a large number of luxurious products designed especially for your home. Your
          interior designer will advise which are the best for you.
        </p>
        <div class="mt-[50px]">
          <ul class="grid grid-cols-4 gap-[30px] mb-[50px]">
            <li v-for="(el, index) in products"
              :key="index"
              class="w-full cursor-pointer max-h-max products__item">
              <a class="flex flex-col pb-[25px] bg-white duration-200 hover:shadow-2xl hover:-translate-y-[5px]"
                href="#">
                <div class="w-full mb-[25px]">
                  <img class="aspect-square w-full"
                    :src="el.img"
                    alt="product image">
                </div>
                <div class="flex items-start justify-between px-[30px]">
                  <div
                    class="text-[#2f2f2f] tracking-tight	text-base font-bold museo duration-300 products__item-title">{{
        el.title
      }}</div>
                  <div class="flex flex-col items-end">
                    <div class="flex items-center h-6">
                      <div v-for="star in 5"
                        :key="star">
                        <component :color="'#FF5959'"
                          :is="star <= el.rating ? iconStarFill : iconStar" />
                      </div>
                    </div>
                    <h3 class="museo font-black text-base products__item-price duration-300">${{ formatNumber(el.price)
                      }}</h3>
                  </div>
                </div>
              </a>

            </li>
          </ul>
          <button type="button"
            class="button min-w-[170px] !max-w-fit m-auto flex items-center gap-2 museo">
            View all products
            <icon-plus class="duration-300"
              fill="#ffffff" />
          </button>
        </div>
      </div>
    </section>
    <section class="contactus py-[80px]">
      <div class="container flex justify-between items-center">
        <div class="max-w-[485px]">
          <h3 class=" text-[34px] font-bold leading-[45px] text-[#2f2f2f] tracking-tighter">
            Have any questions? Let's get in touch!
          </h3>
          <p class="museo mt-[25px] text-[#9e9e9e] text-sm max-w-[380px]">
            Contact us if your are thinking of redesigning your home. Schedule a free consultation with a member of our
            design team.
          </p>
        </div>
        <div class="w-[500px]">
          <form class="flex flex-col gap-2.5 items-end">
            <div class="w-full">
              <input
                class="w-full outline-[#FF5959] museo font-black px-[25px] h-[50px] border-[2px] border-[#dfe5f1] text-sm placeholder:text-[#333333]"
                name="name"
                id="name"
                type="text"
                placeholder="Name">
            </div>
            <div class="w-full">
              <input
                class="w-full outline-[#FF5959] museo font-black px-[25px] h-[50px] border-[2px] border-[#dfe5f1] text-sm placeholder:text-[#333333]"
                name="email"
                id="email"
                type="email"
                placeholder="Email">
            </div>
            <textarea
              class="w-full resize-none outline-[#FF5959] museo font-black pt-[15px] px-[25px] border-[2px] border-[#dfe5f1] text-sm placeholder:text-[#333333]"
              name="message"
              id="message"
              cols="10"
              rows="7"
              placeholder="Message"></textarea>
            <button type="button"
              class="button !max-w-[200px]">Book Appointment</button>
          </form>
        </div>
      </div>
    </section>
    <footer class="footer bg-[#1f1f1f]">
      <div class="container ">
        <div class="!p-10 w-full flex items-center justify-between bg-[#1a1a1a]">
          <div class="flex gap-[30px] items-center">
            <h3 class="font-bold text-[#f0f8ff] text-sm museo">Find us on:</h3>
            <div>
              <ul class="flex gap-5">
                <li>
                  <a href="#"
                    class="w-10 h-10 bg-[#1f1f1f] flex items-center justify-center footer-social">
                    <icons-facebook fill="#FF5959" />
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="w-10 h-10 bg-[#1f1f1f] flex items-center justify-center footer-social">
                    <icons-twitter fill="#FF5959" />
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="w-10 h-10 bg-[#1f1f1f] flex items-center justify-center footer-social">
                    <icons-linkedin fill="#FF5959" />
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="w-10 h-10 bg-[#1f1f1f] flex items-center justify-center footer-social">
                    <icons-instagram fill="#FF5959" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex gap-6 footer-contact justify-end">
            <div class="max-w-[340px] w-full">
              <input
                class="bg-[#1f1f1f] museo w-full block px-[25px] h-10 outline-none text-sm placeholder:text-[#9e9e9e] text-[#ffffff]"
                type="text"
                name="subscribe"
                id="subscribe"
                placeholder="Subscribe to newsletter">
            </div>
            <button type="button"
              class="button h-10 !py-0 third">Subscribe</button>
          </div>

        </div>
        <div class="mt-[60px] flex gap-5">
          <div class="max-w-[280px] w-full">
            <h3 class="text-white text-sm font-bold leading-5 museo mb-5 uppercase">Etalon Theme</h3>
            <p class="text-sm museo text-[#9e9e9e]">Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas.
              Sapien nunc amet ultrices, dolores sit
              ipsum velit purus aliquet, massa fringilla leo orci.</p>
          </div>
          <div class="flex flex-col gap-5 max-w-[280px] w-full">
            <h3 class="text-white text-sm font-bold leading-5 museo uppercaseo">Services</h3>
            <ul class="flex flex-col">
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Commercial
                  design</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Consultation</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Office
                  design</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Home
                  redecorating</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Curated
                  shopping</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-5 max-w-[280px] w-full">
            <h3 class="text-white text-sm font-bold leading-5 museo uppercaseo">Additional links
            </h3>
            <ul class="flex flex-col">
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">About
                  us</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Terms
                  and conditions</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Privacy
                  policy</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">News</a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Contact
                  us</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-5 max-w-[320px] w-full">
            <h3 class="text-white text-sm font-bold leading-5 museo uppercaseo">Latest news</h3>
            <ul class="flex flex-col">
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Land
                  lights let be divided <span class="museo font-normal">- June 24, 2017</span></a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Seasons
                  over bearing air <span class="museo font-normal">- June 24, 2017</span></a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Signs
                  likeness for may <span class="museo font-normal">- January 25, 2016</span></a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Greater
                  open after grass <span class="museo font-normal">- January 25, 2016</span></a>
              </li>
              <li>
                <a href="#"
                  class="text-[#9e9e9e] font-bold leading-[30px] text-sm museo duration-200 hover:text-[#FF5959]">Gathered
                  was divide second <span class="museo font-normal">- February 15, 2015</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-[80px] bg-[#1a1a1a] pt-6 pb-5">
        <div class="container flex justify-between items-center">
          <h3 class="text-[#9e9e9e] text-sm museo">Artroom by SecureSector. All rights reserved.
          </h3>
          <div class="flex gap-5 items-center">
            <a href="#"
              class="font-bold text-sm text-[#ffffff] museo">Terms and conditions
            </a>
            <a href="#"
              class="font-bold text-sm text-[#ffffff] museo">Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style lang="scss">
.header {
  transition: margin-top 0.3s ease, color 0.3s, background-color 0.3s;

  &.active {
    margin-top: -45px;
    color: black;
    background-color: #ffffff;
  }

  &-button {
    &.active {
      border-color: #000000;
    }
  }
}

.footer {
  &-social {
    transition: all 250ms ease-in-out;

    svg {
      transition: all 250ms ease-in-out;
    }

    &:hover {
      background: #FF5959;

      svg {
        fill: #f0f8ff;
      }
    }
  }

  &-contact {
    width: calc(100% - 350px);
  }
}

.brand {
  &-item {
    &:hover {
      img {
        transform: scale(1.1)
      }
    }
  }
}

.services {
  &__item {
    width: 25%;
    transition: all 450ms ease-in-out;

    &.active {
      width: 50%;
    }
  }
}

.video {
  &-box {
    img {
      transition: .25s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.1)
      }
    }
  }
}

.title {
  font-size: 34px;
  margin-bottom: 10px;
  letter-spacing: -0.7px;
  color: #2f2f2f;
  font-weight: 700;
  line-height: 45px;
}

.subtitle {
  text-align: center;
  margin-top: 10px;
  max-width: 650px;
  margin: auto;
  font-weight: 300;
  font-size: 18px;
  color: #9e9e9e;
  font-family: 'Museo';
}

.products {
  &__item {
    &:hover {
      .products {
        &__item {

          &-title,
          &-price {
            color: #FF5959;
          }
        }
      }
    }
  }
}

.project {
  &__swiper {
    &-box {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: .3s all;
    }

    &-btn {
      margin: auto;
    }

    &-inner {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-title {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 20px);
      color: #ffffff;
      font-size: 16px;
      line-height: 50px;
      width: 100%;
      text-align: center;
      background: #1f1f1f;
      transition: all 0.4s ease-in-out;
      font-weight: 700;
    }

    &-item {
      position: relative;
      height: 400px;
      width: 100%;
      overflow: hidden;

      &:hover {
        .project__swiper {
          &-box {
            opacity: 1;
            visibility: visible;
          }

          &-title {
            transform: translate(-50%, 0);
          }
        }
      }

      &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: black;
      }
    }
  }
}

.price {
  &__box {

    &-item {
      position: relative;

      &::before {
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        top: -20px;
        height: calc(100% + 40px);
        z-index: 1;
        background-color: #ffffff;
      }
    }
  }

  &-list {
    &>li:last-child {
      border: none;
    }
  }
}

.button {
  border: 2px solid #FF5959;
  background-color: #FF5959;
  color: white;
  transition: .3s all;
  text-transform: uppercase;
  padding: 14px 24px;
  font-size: 12px;
  max-width: 170px;
  font-weight: 900;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Museo';
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #FF5959;
    background-color: transparent;

    svg {
      fill: #FF5959;
    }
  }

  &.other {
    color: #FF5959;
    background-color: transparent;

    svg {
      fill: #FF5959;
    }

    &:hover {
      color: white;
      background-color: #FF5959;

      svg {
        fill: white;
      }
    }
  }

  &.second {
    border: 2px solid #ffffff;
    background-color: #ffffff;
    color: #FF5959;

    &:hover {
      color: #ffffff;
      background-color: transparent;
    }
  }

  &.third {
    &:hover {
      border: 2px solid #ffffff;
      background-color: #ffffff;
      color: #FF5959;

    }
  }
}



.banner {
  &-swiper {
    height: 680px;

    .swiper-button-next,
    .swiper-button-prev {
      color: #ffffff;
      width: 40px;
      background-color: #FF5959;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        font-size: 20px;
      }
    }
  }
}

.header {
  &-social {
    &:last-child {
      border: none;
    }
  }
}

.header {
  &__contact {
    &-icon {
      transition: .3s all;
    }

    &-link {
      h3 {
        transition: .3s all;
      }

      &:hover {
        &>h3 {
          color: rgb(255, 89, 89);
        }

        .contact-icon {
          fill: rgb(255, 89, 89);
        }
      }
    }
  }
}
</style>