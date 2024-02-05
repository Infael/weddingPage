<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import MyLoading from '@/components/MyLoading.vue';
import TimeLine from '@/components/TimeLine.vue';
import ScheduleList from '@/components/ScheduleList.vue';
import InviteUnauthorized from '@/components/InviteUnauthorized.vue';
import MyFooter from '@/components/MyFooter.vue';
import ErrorView from '@/components/ErrorView.vue';
import type { GuestInvite } from '@/models/GuestInvite';
import { getUrlParam } from '@/utils/getUrlParam';
import { useFetch } from '@/utils/useFetch';
import { onMounted, ref } from 'vue';

// Variables
const key = ref<string | null>(null);

// Scrolling
const onScroll = () => {
  // when the first screen is scrolled down parallax blur should be enhanced
  if (window.scrollY > 0 && window.scrollY < window.innerHeight) {
    const blur = 5 + (window.scrollY / window.innerHeight) * 10;
    const brightness = 1 - (window.scrollY / window.innerHeight) * 0.2;
    const background = document.querySelector('.parallax') as HTMLElement;
    if (background) background.style.filter = `blur(${blur}px) brightness(${brightness})`;
  }
};
window.addEventListener('scroll', onScroll);

key.value = getUrlParam('key');

// Hooks
const {
  data: guestInviteData,
  isLoading: guestInviteLoading,
  isError: guestInviteError,
  error: guestInviteErrorData,
  isSuccess: guestInviteSuccess,
  trigger: triggerGuestInvite
} = useFetch<GuestInvite>(`${import.meta.env.VITE_API_ENDPOINT}/guest-invite/`);

onMounted(() => {
  if (key.value) {
    triggerGuestInvite({ headers: { Authorization: key.value }, method: 'GET' });
  }
});

const onGuestAnswer = (accepted: boolean) => {
  if (key.value) {
    triggerGuestInvite({
      headers: { Authorization: key.value },
      method: 'PUT',
      body: JSON.stringify({ ...guestInviteData.value!, invite_accepted: accepted })
    });
  }
};

console.log(!key.value);
</script>

<template>
  <main>
    <!-- Error -->
    <div v-if="guestInviteError">
      <ErrorView
        :error-text="`${guestInviteErrorData?.status}: ${guestInviteErrorData?.message}`"
      />
    </div>
    <!-- Loading -->
    <div v-else-if="!guestInviteLoading">
      <MyLoading />
    </div>
    <!-- With api -->
    <div
      v-else-if="guestInviteSuccess && guestInviteData && guestInviteData.invite_accepted !== false"
    >
      <div
        class="parallax"
        :class="{
          parallaxBeforeAccept: guestInviteData.invite_accepted === null
        }"
      ></div>
      <div class="content">
        <MainHeader
          :guest-accepted="guestInviteData.invite_accepted ?? undefined"
          @update-guest-accepted="onGuestAnswer"
        />
        <Transition name="content">
          <div v-if="guestInviteData.invite_accepted !== null" class="guestAcceptedContent">
            <TimeLine />
            <ScheduleList />
            <InviteUnauthorized />
          </div>
        </Transition>
      </div>
    </div>
    <!-- Without api or declined -->
    <div v-else>
      <div
        class="parallax"
        :class="{
          parallaxUnauthorized: !key,
          parallaxDeclined: guestInviteData && guestInviteData.invite_accepted === false
        }"
      ></div>
      <div class="content">
        <MainHeader unauthorized />
        <TimeLine />
        <InviteUnauthorized
          v-if="guestInviteData === null || guestInviteData.invite_accepted !== false"
        />
      </div>
    </div>
    <MyFooter v-if="!key || (guestInviteData && guestInviteData.invite_accepted !== null)" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background-image: url('@/assets/images/headerPhoto.jpg');
  z-index: -1;

  /* Set a specific height */
  min-height: 620vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);

  transition: min-height 1.6s ease-in-out;

  /* big desktop */
  @media (min-width: 1999px) {
    min-height: 550vh;
  }
}

.parallaxBeforeAccept {
  min-height: 100vh;
}

.parallaxDeclined {
  min-height: 400vh;
  /* big desktop */
  @media (min-width: 1920px) {
    min-height: 350vh;
  }
}

.parallaxUnauthorized {
  min-height: 480vh;
  /* big desktop */
  @media (min-width: 1920px) {
    min-height: 400vh;
  }
}
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: clamp(270px, 80%, 1023px);
}

.guestAcceptedContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20vh;

  width: 100%;
}

.content-enter-active,
.content-leave-active {
  transition: opacity 1s;
}
.content-enter-from,
.content-leave-to {
  opacity: 0;
}
</style>
