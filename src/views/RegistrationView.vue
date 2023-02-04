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
                        <h5 class="card-title pb-0 fs-4">
                          Register your account
                        </h5>
                        <p class="small">
                          Fill the details bellow to submit register account.
                        </p>
                      </div>

                      <h4 class="badge text-bg-danger">
                        {{ this.$store.getters.signup_error_message }}
                      </h4>

                      <form @submit.prevent="registeruser()">
                        <div class="row g-3">
                          <div class="col-12">
                            <label for="yourName" class="form-label"
                              >Your Name</label
                            >
                            <input
                              type="text"
                              name="name"
                              v-model="fullname"
                              class="form-control"
                              required
                            />
                            <div class="invalid-feedback">
                              Please, enter your name!
                            </div>
                          </div>

                          <div class="col-12">
                            <label for="yourEmail" class="form-label"
                              >Your Email</label
                            >
                            <input
                              type="email"
                              name="email"
                              v-model="email"
                              class="form-control"
                              required
                            />
                            <div class="invalid-feedback">
                              Please enter a valid Email adddress!
                            </div>
                          </div>

                          <div class="col-12">
                            <label for="yourUsername" class="form-label"
                              >Phone Number</label
                            >

                            <!-- <div class="input-group has-validation">
                              <input
                                type="text"
                                name="username"
                                class="form-control"
                                v-model="phonenumber"
                                placeholder="+255"
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div> -->

                            <MazPhoneNumberInput
                              v-model="phonenumber"
                              show-code-on-list
                              color="success"
                              :preferred-countries="[
                                'FR',
                                'BE',
                                'DE',
                                'US',
                                'GB',
                              ]"
                              :ignored-countries="['AC']"
                              :success="results?.isValid"
                            />
                          </div>

                          <div class="col-12">
                            <label for="yourPassword" class="form-label"
                              >Password</label
                            ><br />
                            <span
                              style="
                                margin-top: 0px;
                                font-size: 0.7em;
                                color: grey;
                              "
                              >Special character, lowercase, uppercase, number
                            </span>
                            <div class="passwordContainer">
                              <input
                                id="Password"
                                type="password"
                                name="password"
                                class="form-control form-control-lg"
                                v-model="password"
                                required
                                @keyup="validatePassword()"
                              />
                              <i
                                @click="hideAndShowPassword()"
                                class="bi bi-eye-fill greyColor"
                                id="eye"
                              ></i>
                            </div>

                            <!-- Password Validator Message -->
                            <div v-if="validationMessage == 'Password is weak'">
                              <div
                                class="mt-2"
                                style="font-weight: bold; color: red"
                              >
                                {{ validationMessage }}
                              </div>
                            </div>

                            <div
                              v-else-if="
                                (validationMessage = 'Password is strong')
                              "
                            >
                              <div
                                class="mt-2"
                                style="font-weight: bold; color: green"
                              >
                                {{ validationMessage }}
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                name="terms"
                                type="checkbox"
                                value=""
                              />
                              <label class="form-check-label" for="acceptTerms"
                                >I agree and accept the
                                <a href="#">terms and conditions</a></label
                              >
                              <div class="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <button
                              type="submit"
                              class="btn w-100 ;"
                              style="background-color: #febf00; color: white"
                            >
                              <div
                                v-if="this.$store.getters.signup_loader == true"
                              >
                                <div
                                  class="spinner-border spinner-border-sm"
                                  role="status"
                                >
                                  <span class="visually-hidden"
                                    >Loading...</span
                                  >
                                </div>
                              </div>
                              <div v-else>Create Account</div>
                            </button>
                          </div>
                          <div class="col-12">
                            <p class="small mb-0">
                              Already have an account?

                              <router-link to="/"> Log in </router-link>
                            </p>
                          </div>
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

<script >
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
export default {
  name: "RegistrationView",
  components: {
    MazPhoneNumberInput,
  },
  data() {
    return {
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
      validationMessage: "",
      validationMessageState: false,
      passwordShow: true,
      passwordInputType: "password",

      // Obtained user information
    };
  },
  methods: {
    registeruser() {
      this.$store.dispatch("registerUser", {
        fullName: this.fullname,
        phoneNumber: this.phonenumber.slice(1),
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

    validatePassword() {
      // console.log(this.password);
      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/;

      if (this.password.match(passw)) {
        this.validationMessage = "Password is strong";
        this.validationMessageState = true;
        return true;
      } else {
        // console.log("Wrong...!");
        this.validationMessage = "Password is weak";
        this.validationMessageState = false;
        return false;
      }
    },
  },
  computed: {
    validationMessage() {
      return this.validationMessage;
    },
    signup_loader() {
      return this.$store.getters.signup_loader;
    },
    signup_error_message() {
      return this.$store.getters.signup_error_message;
    },
  },
};
</script>

<style scoped>
.password-container {
  width: 400px;
  position: relative;
}
.password-container input[type="password"],
.password-container input[type="text"] {
  width: 100%;
  padding: 12px 36px 12px 12px;
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