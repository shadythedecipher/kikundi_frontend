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
                        <h5 class="card-title pb-0 fs-4">Forgot Password</h5>
                        <p class="small">
                          Enter the email of your account and we will send the
                          email to reset your password.
                        </p>
                      </div>

                      <h4 class="badge text-bg-danger">{{ this.$store.getters.forgot_password_message }}</h4>


                      <form
                        class="row g-3 needs-validation"
                        @submit.prevent="forgotpassword()"
                      >
                        <div class="col-12">
                          <label for="yourEmail" class="form-label"
                            >Your Email</label
                          >
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            v-model="email"
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter a valid Email adddress!
                          </div>
                        </div>

                        <div class="col-12">
                          <button
                            class="btn w-100 ;"
                            type="submit"
                            style="background-color: #febf00; color: white"
                          >
                            <div
                              v-if="
                                this.$store.getters.forgot_password_loader ==
                                true
                              "
                            >
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                            <div v-else>Next</div>
                          </button>
                        </div>
                      </form>
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
  name: "ForgotPasswordView",
  data() {
    return {
      email: "",
    };
  },
  computed: {
    forgot_password_loader() {
      return this.$store.getters.forgot_password_loader;
    },

    forgot_password_message() {
      return this.$store.getters.forgot_password_message;
    },
  },
  methods: {
    forgotpassword() {
      this.$store.dispatch("forgotPassword", {
        email: this.email,
      });
    },
  },
};
</script>

<style>
</style>