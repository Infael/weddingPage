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
import type { Question } from '@/models/Question';
import QuestionList from '@/components/questions/QuestionList.vue';

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

const {
  data: questionsData,
  isLoading: questionsLoading,
  isError: questionsIsError,
  error: questionsError,
  isSuccess: questionsIsSuccess,
  trigger: triggerGetQuestions
} = useFetch<Question[]>(`${import.meta.env.VITE_API_ENDPOINT}/questions/`);

onMounted(() => {
  if (key.value) {
    triggerGuestInvite({ headers: { Authorization: key.value }, method: 'GET' });
    triggerGetQuestions({ headers: { Authorization: key.value }, method: 'GET' });
  }
});

const onGuestAnswer = (accepted: boolean) => {
  if (key.value) {
    triggerGuestInvite({
      headers: { Authorization: key.value, 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({ ...guestInviteData.value!, invite_accepted: accepted })
    });
  }
};
</script>

<template>
  <main>
    <!-- Errors -->
    <div v-if="guestInviteError">
      <ErrorView
        :error-text="`${guestInviteErrorData?.status}: ${guestInviteErrorData?.message}`"
      />
    </div>
    <div v-else-if="questionsIsError">
      <ErrorView :error-text="`${questionsError?.status}: ${questionsError?.message}`" />
    </div>
    <!-- Loading -->
    <div v-else-if="guestInviteLoading || questionsLoading">
      <MyLoading />
    </div>
    <!-- With api -->
    <div
      v-else-if="
        guestInviteSuccess &&
        guestInviteData &&
        guestInviteData.invite_accepted !== false &&
        questionsIsSuccess &&
        questionsData
      "
    >
      <div class="parallax"></div>
      <div class="content">
        <MainHeader
          :guest-accepted="guestInviteData.invite_accepted ?? undefined"
          @update-guest-accepted="onGuestAnswer"
        />
        <Transition name="content">
          <div v-if="guestInviteData.invite_accepted !== null" class="guestAcceptedContent">
            <TimeLine />
            <ScheduleList />
            <div v-if="questionsData" class="questions">
              <QuestionList :questions="questionsData" :auth="key ?? ''" />
            </div>
            <InviteUnauthorized />
          </div>
        </Transition>
      </div>
    </div>
    <!-- Without api or declined -->
    <div v-else>
      <div class="parallax"></div>
      <div class="content">
        <MainHeader unauthorized />
        <TimeLine />
        <InviteUnauthorized
          v-if="guestInviteData === null || guestInviteData.invite_accepted !== false"
        />
      </div>
    </div>
    <MyFooter
      v-if="
        !key || (guestInviteData && guestInviteData.invite_accepted !== null && questionsIsSuccess)
      "
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.parallax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background-image: url('@/assets/images/headerPhoto.jpg');
  z-index: -1;

  /* Set a specific height */
  min-height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
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

.questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
