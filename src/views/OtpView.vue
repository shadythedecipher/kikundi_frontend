<template>
  <main>
    <div class="container">
      <section class="vh-100" style="background-color: ">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col col-xl-10">
              <div class="card" style="border-radius: 1rem">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="../assets/img/Picture1.jpg"
                      alt="login form"
                      class="img-fluid"
                      style="
                        border-radius: 50px;
                        padding-top: 30px;
                        padding-left: 30px;
                        padding-bottom: 30px;
                        padding-right: 20px;
                        height: 650px;
                      "
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <div class="pt-4 pb-2">
                        <h5 class="card-title pb-0 fs-4">Check Your phone number</h5>
                        <p class="small">
                          We,ve sent a 4-digit confirmation code to
                          <span style="color: #febf00">+{{
                            this.$store.getters.phone
                          }}</span>
                          Make sure you enter correct code.
                        </p>
                      </div>

                      <h4 class="badge text-bg-danger">
                        {{ this.$store.getters.otp_error_message }}
                      </h4>

                      <form @submit.prevent="verifyOTP()">
                        <div class="row my-3">
                          <div class="col-md-2">
                            <div class="form-outline">
                              <input
                                type="numeric"
                                id="typeText"
                                class="form-control"
                                v-model="otp_digit_1"
                              />
                              <label class="form-label" for="typeText"></label>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="form-outline">
                              <input
                                type="numeric"
                                v-model="otp_digit_2"
                                class="form-control"
                              />
                              <label class="form-label" for="typeText"></label>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="form-outline">
                              <input
                                type="numeric"
                                id="typeText"
                                class="form-control"
                                v-model="otp_digit_3"
                              />
                              <label class="form-label" for="typeText"></label>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="form-outline">
                              <input
                                type="numeric"
                                id="typeText"
                                class="form-control"
                                v-model="otp_digit_4"
                              />
                              <label class="form-label" for="typeText"></label>
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <button
                            class="btn w-100 ;"
                            type="submit"
                            style="background-color: #febf00; color: white"
                          >
                            <div v-if="this.$store.getters.otp_loader == true">
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                            <div v-else>Verify</div>
                          </button>
                        </div>
                      </form>
                      <!-- Resend OTP -->
                      <div class="col-12">
                        <button
                          @click="resendOTP()"
                          class="btn w-100 ;"
                          type="submit"
                          style="
                            background-color: #c8c8c8;
                            color: white;
                            margin-top: 20px;
                          "
                        >
                          <div
                            v-if="this.$store.getters.otp_resend_loader == true"
                          >
                            <div
                              class="spinner-border spinner-border-sm"
                              role="status"
                            >
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                          <div v-else>Resend OTP code</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "OtpView",
  data() {
    return {
      otp_digit_1: "",
      otp_digit_2: "",
      otp_digit_3: "",
      otp_digit_4: "",
      otp: "",
    };
  },

  methods: {
    verifyOTP() {
      this.otp =
        this.otp_digit_1 +
        this.otp_digit_2 +
        this.otp_digit_3 +
        this.otp_digit_4;
      this.$store.dispatch("registrationOTP", {
        email: this.$store.getters.email,
        otp: this.otp,
      });
    },

    resendOTP() {
      this.$store.dispatch("resendOTP", {
        email: this.$store.getters.email,
      });
    },
  },

  computed: {
    email() {
      return this.$store.getters.email;
    },
    username() {
      return this.$store.getters.username;
    },
    otp_loader() {
      return this.$store.getters.otp_loader;
    },
    otp_error_message() {
      return this.$store.getters.otp_error_message;
    },
    otp_resend_loader() {
      return this.$store.getters.otp_resend_loader;
    },
    otp_resend_error_message() {
      return this.$store.getters.otp_resend_error_message;
    },
  },
};
</script>

<style>
</style>