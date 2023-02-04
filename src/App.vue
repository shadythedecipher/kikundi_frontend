<template>
  <div
    v-if="
      ![
        'login',
        'signup',
        'forgot_password',
        'new_password',
        'otp',
 
      ].includes($route.name)
    "
  >
    <Sidebar></Sidebar>
  </div>
  <div v-else-if="['login'].includes($route.name)">
    <LoginView></LoginView>
  </div>
  <div v-else-if="['signup'].includes($route.name)">
    <RegistrationView></RegistrationView>
  </div>
  <div v-else-if="['forgot_password'].includes($route.name)">
    <ForgotPasswordView></ForgotPasswordView>
  </div>
  <div v-else-if="['new_password'].includes($route.name)">
    <NewPasswordView></NewPasswordView>
  </div>
  <div v-else-if="['otp'].includes($route.name)">
    <OtpView></OtpView>
  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import LoginView from "@/views/LoginView.vue";
import OtpView from "@/views/OtpView.vue";
import NewPasswordView from "@/views/NewPasswordView.vue";
import RegistrationView from "@/views/RegistrationView.vue";


export default {
  components: {
    Sidebar,
    LoginView,
    RegistrationView,
    ForgotPasswordView,
    NewPasswordView,
    OtpView,

  },
};
</script>
<style scoped>
</style>
