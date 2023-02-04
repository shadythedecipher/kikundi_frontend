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
                      <form @submit.prevent="loginuser()">
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <span class="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style="letter-spacing: 1px"
                        >
                          Welcome back to kikundi app
                        </h5>

                        <h4 class="badge text-bg-danger">
                          {{ this.$store.getters.login_error_message }}
                        </h4>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example17"
                            >Email address / Phone number</label
                          >
                          <input
                            type="text"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            v-model="email"
                            required
                          />
                        </div>

                        <div class="passwordContainer">
                          <input
                            id="Password"
                            type="password"
                            name="password"
                            class="form-control form-control-lg"
                            v-model="password"
                            required
                          />
                          <i
                            @click="hideAndShowPassword()"
                            class="bi bi-eye-fill greyColor"
                            id="eye"
                          ></i>
                        </div>
                        <div
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                            mb-4
                            mt-4
                          "
                        >
                          <!-- Checkbox -->
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="form1Example3"
                              
                            />
                            <label class="form-check-label" for="form1Example3">
                              Remember me
                            </label>
                          </div>
                          <router-link
                            to="/forgot_password"
                            style="color: #fcb713"
                          >
                            Forgot password?
                          </router-link>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-lg btn-block"
                            type="submit"
                            style="background-color: #fcb713; color: white"
                          >
                            <div
                              v-if="this.$store.getters.login_loader == true"
                            >
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                            <div v-else>Login</div>
                          </button>
                        </div>

                        <p class="mb-5 pb-lg-2" style="color: black">
                          Don't have an account?
                          <router-link to="/signup" style="color: #fcb713">
                            Sign Up
                          </router-link>
                        </p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
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
// Usually you only need to import ConfigProvider & CSS once in App.js/App.tsx
// CSS order is important!

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginuser() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
    },

    hideAndShowPassword() {
      var x = document.getElementById("Password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
  },
  computed: {
    login_loader() {
      return this.$store.getters.login_loader;
    },

    login_error_message() {
      return this.$store.getters.login_error_message;
    },
  },
};
</script>

<style>
.password-container {
  width: 400px;
  position: relative;
}
.password-container input[type="password"],
.password-container input[type="text"] {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}
.bi-eye-fill {
  position: absolute;
  top: 28%;
  right: 4%;
  cursor: pointer;
  color: lightgray;
}
</style>