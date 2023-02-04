<template>
  <main>
    <div class="container">
      <section class="vh-100" style="background-col">
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
                        <h5 style="font-size: 30px">Create New Password</h5>
                        <p class="small">
                          Enter the new password for your account.
                        </p>
                      </div>

                      <h4 class="badge text-bg-danger">
                        {{ this.$store.getters.reset_password_message }}
                      </h4>

                      <form @submit.prevent="resetpassword()" id="passwordForm">
                        <input
                          type="text"
                          class="input-lg form-control mb-4"
                          placeholder="Email OTP code"
                          autocomplete="off"
                          required
                          v-model="email_otp"
                        />
                        <!-- <div class="row">
                          <div class="col-sm-6">
                            <span
                              id="8char"
                              class="glyphicon glyphicon-remove"
                              style="color: #ff0004"
                            ></span>
                            8 Characters Long<br />
                            <span
                              id="ucase"
                              class="glyphicon glyphicon-remove"
                              style="color: #ff0004"
                            ></span>
                            One Uppercase Letter
                          </div>
                          <div class="col-sm-6">
                            <span
                              id="lcase"
                              class="glyphicon glyphicon-remove"
                              style="color: #ff0004"
                            ></span>
                            One Lowercase Letter<br />
                            <span
                              id="num"
                              class="glyphicon glyphicon-remove"
                              style="color: #ff0004"
                            ></span>
                            One Number
                          </div>
                        </div> -->
                        <input
                          type="password"
                          class="input-lg form-control mb-4"
                          name="password2"
                          id="password2"
                          placeholder="New password"
                          autocomplete="off"
                          required
                          v-model="password"
                        />
                        <!-- <div class="row">
                          <div class="col-sm-12">
                            <span
                              id="pwmatch"
                              class="glyphicon glyphicon-remove"
                              style="color: #ff0004"
                            ></span>
                            Passwords Match
                          </div>
                        </div> -->
                        <div class="col-12">
                          <button
                            class="btn w-100 ;"
                            type="submit"
                            style="background-color: #febf00; color: white"
                          >
                            <div
                              v-if="
                                this.$store.getters.reset_password_loader == true
                              "
                            >
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                            <div v-else>Reset</div>
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
  name: "NewPasswordView",
  data() {
    return {
      password: "",
      email_otp: "",
    };
  },
  computed: {
    forgot_password_email() {
      return this.$store.getters.forgot_password_email;
    },
    reset_password_loader() {
      return this.$store.getters.reset_password_loader;
    },
    reset_password_message() {
      return this.$store.getters.reset_password_message;
    },
  },
  methods: {
    resetpassword() {
      this.$store.dispatch("resetPassword", {
        email: this.$store.getters.forgot_password_email,
        otp: this.email_otp,
        new_password: this.password,
      });
    },
  },
};
</script>

<style>
</style>