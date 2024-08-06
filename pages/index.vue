<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperCore, { Autoplay, Navigation } from 'swiper';

// SwiperCore.use([Autoplay, Navigation]);

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


const formatNumber = (num) => {
  return parseFloat(num).toFixed(2);
};

const handleScroll = () => {
  scrolled.value = window.scrollY >= 35;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
  <div>
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
    <main class="pb-[80px]">
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
    <section class="projects pb-[20px]">
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
    <section class="price pt-[80px] pb-[80px] bg-[#f3f3f3]">
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
  font-weight: 900;
  max-width: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Museo';
  user-select: none;

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