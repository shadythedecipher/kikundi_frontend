import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router';


let baseUrl = 'http://102.37.159.187:8080/api/'


let networkError = ": Check your internet connection ⚠️"
let headers = {
    "Content-type": "application/json; charset=UTF-8",
}
let authorized_document_header = {
    'Content-Type': 'multipart/form-data; application/json',

}


export default createStore({
    state: {

        // ============= REGISTRATION(SIGNUP) VARIABLE STATES =============
        username: '',
        token: '',
        email: '',
        phone: '',
        signup_loader: false,
        signup_error_message: "",


        // ============= OTP VARIABLE STATES =============
        otp_loader: false,
        otp_error_message: "",
        otp_resend_loader: false,
        otp_resend_error_message: "",


        // ============= LOGIN VARIABLE STATES =============
        login_username: "",
        login_password: "",
        login_loader: false,
        login_error_message: "",
        login_access_token: "",

        // ============= FORGOT PASSWORD VARIABLE STATES =============
        forgot_password_loader: false,
        forgot_password_message: "",
        forgot_password_email: "",


        // ============= RESET PASSWORD VARIABLE STATES =============
        reset_password_loader: false,
        reset_password_message: "",


        // ============= PROFILE VARIABLE STATES =============
        user_profile: [],
        user_profile_loader: false,
        user_profile_update_loader: false,
        user_profile_message: "",

        // ============= WALLETS VARIABLE STATES =============
        // == Bank wallet ==
        add_bank_wallet_loader: false,
        add_bank_wallet_message: "",


        // ============= GROUPS VARIABLE STATES =============
        all_groups: [],
        all_groups_loader: false,

        // ============= SUBSCRIPTION DETAILS VARIABLE STATES =============
        subscription_details: {},

        // ============= CREATE GROUP VARIABLE STATES =============
        create_group_loader: false,

    },
    mutations: {
        // ============= CREATE GROUP LOADER MUTATIONS =============
        SET_CREATE_GROUP_LOADER(state, create_group_loader) {
            state.create_group_loader = create_group_loader
        },


        // ============= SUBSCRIPTION DETAILS MUTATIONS =============
        SET_SUBSCRIPTION_DETAILS(state, subscription_details) {
            state.subscription_details = subscription_details
        },

        // ============= GROUPS MUTATIONS =============
        SET_ALL_GROUPS(state, all_groups) {
            state.all_groups = all_groups
        },
        SET_ALL_GROUPS_LOADER(state, all_groups_loader) {
            state.all_groups_loader = all_groups_loader
        },


        // ============= PROFILE MUTATIONS =============
        SET_USER_PROFILE(state, user_profile) {
            state.user_profile = user_profile
        },
        SET_USER_PROFILE_LOADER(state, user_profile_loader) {
            state.user_profile_loader = user_profile_loader
        },
        SET_USER_PROFILE_UPDATE_LOADER(state, user_profile_update_loader) {
            state.user_profile_update_loader = user_profile_update_loader
        },
        SET_USER_PROFILE_MESSAGE(state, user_profile_message) {
            state.user_profile_message = user_profile_message
        },



        // ============= REGISTRATION(SIGNUP) MUTATIONS =============
        SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USERNAME(state, username) {
            state.username = username
        },

        SET_EMAIL(state, email) {
            state.email = email
        },

        SET_PHONE(state, phone) {
            state.phone = phone
        },

        SET_SIGNUP_LOADER(state, signup_loader) {
            state.signup_loader = signup_loader
        },

        SET_SIGNUP_ERROR_MESSAGE(state, signup_error_message) {
            state.signup_error_message = signup_error_message
        },



        // ============= OTP MUTATIONS =============
        SET_OTP_LOADER(state, otp_loader) {
            state.otp_loader = otp_loader
        },

        SET_OTP_ERROR_MESSAGE(state, otp_error_message) {
            state.otp_error_message = otp_error_message
        },

        SET_OTP_RESEND_LOADER(state, otp_resend_loader) {
            state.otp_resend_loader = otp_resend_loader
        },

        SET_OTP_RESEND_ERROR_MESSAGE(state, otp_resend_error_message) {
            state.otp_resend_error_message = otp_resend_error_message
        },



        // ============= LOGIN MUTATIONS =============
        SET_LOGIN_ACCESS_TOKEN(state, login_access_token) {
            state.login_access_token = login_access_token
        },

        SET_LOGIN_USERNAME(state, login_username) {
            state.login_username = login_username
        },

        SET_LOGIN_PASSWORD(state, login_password) {
            state.login_password = login_password
        },

        SET_LOGIN_LOADER(state, login_loader) {
            state.login_loader = login_loader
        },

        SET_LOGIN_ERROR_MESSAGE(state, login_error_message) {
            state.login_error_message = login_error_message
        },

        // ============= FORGOT PASSWORD MUTATIONS =============
        SET_FORGOT_PASSWORD_LOADER(state, forgot_password_loader) {
            state.forgot_password_loader = forgot_password_loader
        },

        SET_FORGOT_PASSWORD_MESSAGE(state, forgot_password_message) {
            state.forgot_password_message = forgot_password_message
        },

        SET_FORGOT_PASSWORD_EMAIL(state, forgot_password_email) {
            state.forgot_password_email = forgot_password_email
        },


        // ============= RESET PASSWORD MUTATIONS =============
        SET_RESET_PASSWORD_LOADER(state, reset_password_loader) {
            state.reset_password_loader = reset_password_loader
        },

        SET_RESET_PASSWORD_MESSAGE(state, reset_password_message) {
            state.reset_password_message = reset_password_message
        },

        // ============= WALLET MUTATIONS =============
        SET_ADD_BANK_WALLET_LOADER(state, add_bank_wallet_loader) {
            state.add_bank_wallet_loader = add_bank_wallet_loader
        },
        SET_ADD_BANK_WALLET_MESSAGE(state, add_bank_wallet_message) {
            state.add_bank_wallet_message = add_bank_wallet_message
        },

    },
    actions: {
        // ============= SUBSCRIPTION DETAILS ACTIONS =============
        // == Check user's subscription status ==
        getUserSubscription({ commit }, { email }) {
            axios.post(baseUrl + "user/check/subscription", {
                "email": email,
            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'Subscription details') {

                    let subscription_details = response.data.responseObject
                    commit('SET_SUBSCRIPTION_DETAILS', subscription_details)

                } else {

                    // let subscription_details = {}
                    // commit('SET_SUBSCRIPTION_DETAILS', subscription_details)

                }
            }).catch((e) => {
                // let subscription_details = {}
                // commit('SET_SUBSCRIPTION_DETAILS', subscription_details)

                if (e.response == undefined) {
                    // let subscription_details = {}
                    // commit('SET_SUBSCRIPTION_DETAILS', subscription_details)
                } else {
                    // let subscription_details = {}
                    // commit('SET_SUBSCRIPTION_DETAILS', subscription_details)

                }
            })
        },

        // == Create new group ==
        changeUserPassword({ commit }, { email, new_password }) {
            let add_bank_wallet_loader = true
            commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

            axios.post(baseUrl + "user/profile/change_password", {
                "email": email,
                "new_password": new_password,

            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {

                    // let user_profile = response.data.responseObject
                    // commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })

                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                } else {
                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)


                }
            }).catch((e) => {
                let add_bank_wallet_loader = false
                commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },



        // ============= GROUPS ACTIONS =============
        // == Get All Groups ==
        getAllGroups({ commit }, { email }) {
            let all_groups_loader = true
            commit('SET_ALL_GROUPS_LOADER', all_groups_loader)

            axios.post(baseUrl + "user/group/getgroups", {
                "email": email,
            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {

                    let all_groups = response.data.responseObject
                    commit('SET_ALL_GROUPS', all_groups)

                    let all_groups_loader = false
                    commit('SET_ALL_GROUPS_LOADER', all_groups_loader)

                } else {
                    let all_groups_loader = false
                    commit('SET_ALL_GROUPS_LOADER', all_groups_loader)


                }
            }).catch((e) => {
                let all_groups_loader = false
                commit('SET_ALL_GROUPS_LOADER', all_groups_loader)

                if (e.response == undefined) {
                    console.log(e.response)
                } else {
                    console.log(e.response)

                }
            })
        },


        // == Create new group ==
        createNewGroup({ commit }, { email, groupName, group_phone_number, group_name_abv, group_tin_number, what_describe_group, group_description, group_email, sera_ya_uwekezaji, sera_ya_mkopo, mashariti_ya_chama, sera_ya_majanga }) {
            let create_group_loader = true
            commit('SET_CREATE_GROUP_LOADER', create_group_loader)
            axios.post(baseUrl + "user/group/create", {
                "email": email,
                "groupName":groupName,
                "group_phone_number":group_phone_number,
                "group_name_abv":group_name_abv,
                "group_tin_number":group_tin_number,
                "what_describe_group": what_describe_group,
                "group_description":group_description,
                "group_email":group_email,
                "sera_ya_uwekezaji":sera_ya_uwekezaji,
                "sera_ya_mkopo":sera_ya_mkopo,
                "mashariti_ya_chama":mashariti_ya_chama,
                "sera_ya_majanga":sera_ya_majanga
            }, { authorized_document_header }).then((response) => {
                // console.log(response.data)
                if (response.data.successMessage = 'Group created') {

                    let all_groups = response.data.responseObject
                    commit('SET_ALL_GROUPS', all_groups)

                    let all_groups_loader = false
                    commit('SET_ALL_GROUPS_LOADER', all_groups_loader)

                    // == Fetch all groups ==
                    this.dispatch("getAllGroups", {
                        email: email
                    })

                    // == Fetch subscription information ==
                    this.dispatch("getUserSubscription",{
                        email:email
                    })
                    
                    location.reload()

                } else {
                    let all_groups_loader = false
                    commit('SET_ALL_GROUPS_LOADER', all_groups_loader)


                }
            }).catch((e) => {
                let all_groups_loader = false
                commit('SET_ALL_GROUPS_LOADER', all_groups_loader)

                if (e.response == undefined) {
                    console.log(e.response)
                } else {
                    console.log(e.response)

                }
            })
        },




        // ============= WALLET ACTION =============
        // == Change password inside the dashboard
        changeUserPassword({ commit }, { email, new_password }) {
            let add_bank_wallet_loader = true
            commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

            axios.post(baseUrl + "user/profile/change_password", {
                "email": email,
                "new_password": new_password,

            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {

                    // let user_profile = response.data.responseObject
                    // commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })

                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                } else {
                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)


                }
            }).catch((e) => {
                let add_bank_wallet_loader = false
                commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },

        // == Delete a mobile wallet ==
        deleteMobileWallet({ commit }, { email, specific_wallet }) {
            let add_bank_wallet_loader = true
            commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

            axios.post(baseUrl + "user/profile/delete/mobilewallet", {
                "email": email,
                "wallet": 'mobile',
                "specific_wallet": specific_wallet,
            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {

                    // let user_profile = response.data.responseObject
                    // commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })

                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                } else {
                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)


                }
            }).catch((e) => {
                let add_bank_wallet_loader = false
                commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },

        // == Delete a bank wallet ==
        deleteBankWallet({ commit }, { email, specific_wallet }) {
            let add_bank_wallet_loader = true
            commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

            axios.post(baseUrl + "user/profile/delete/bankwallet", {
                "email": email,
                "wallet": 'bank',
                "specific_wallet": specific_wallet,
            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {

                    // let user_profile = response.data.responseObject
                    // commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })

                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                } else {
                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)


                }
            }).catch((e) => {
                let add_bank_wallet_loader = false
                commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },


        // == Add new mobile wallet ==
        addNewMobileWallet({ commit }, { email, phone_number, issuer }) {
            let add_bank_wallet_loader = true
            commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

            axios.post(baseUrl + "user/profile/edit/mobilewallet", {
                "email": email,
                "phone_number": phone_number,
                "issuer": issuer,
            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {


                    // let user_profile = response.data.responseObject
                    // commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })


                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                } else {
                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)


                }
            }).catch((e) => {
                let add_bank_wallet_loader = false
                commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },


        // == Add new bank wallet ==
        addNewBankWallet({ commit }, { email, cvv, expiration_date, card_number }) {
            let add_bank_wallet_loader = true
            commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

            axios.post(baseUrl + "user/profile/edit/bankwallet", {
                "email": email,
                "bank_card_number": card_number,
                "bank_card_expire_date": expiration_date,
                "cvv": cvv
            }, { headers }).then((response) => {
                console.log(response.data)
                if (response.data.successMessage = 'created successfully') {

                    // let user_profile = response.data.responseObject
                    // commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })


                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                } else {
                    let add_bank_wallet_loader = false
                    commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)


                }
            }).catch((e) => {
                let add_bank_wallet_loader = false
                commit('SET_ADD_BANK_WALLET_LOADER', add_bank_wallet_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },




        // ============= PROFILE ACTION =============
        // == Fetch user profile ==
        getUserProfile({ commit }, { email }) {
            let user_profile_loader = true
            commit('SET_USER_PROFILE_LOADER', user_profile_loader)

            axios.post(baseUrl + "user/profile", {
                "email": email,
            }, { headers }).then((response) => {
                if (response.data.successMessage = 'created successfully') {

                    let user_profile = response.data.responseObject
                    commit('SET_USER_PROFILE', user_profile)

                    let user_profile_loader = false
                    commit('SET_USER_PROFILE_LOADER', user_profile_loader)


                } else {
                    let user_profile_loader = false
                    commit('SET_USER_PROFILE_LOADER', user_profile_loader)


                }
            }).catch((e) => {
                let user_profile_loader = false
                commit('SET_USER_PROFILE_LOADER', user_profile_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e.response.data.errors
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },

        // == Update user profile ==
        updateUserProfile({ commit }, { address, userbo, userimage, idverif, email }) {
            let user_profile_update_loader = true
            commit('SET_USER_PROFILE_UPDATE_LOADER', user_profile_update_loader)

            axios.post(baseUrl + "user/profile/edit", {
                "address": address,
                "userbo": userbo,
                "userimage": userimage,
                "idverif": idverif,
                "email": email,
            }, { headers }).then((response) => {
                if (response.data.successMessage = 'created successfully') {

                    let user_profile = response.data.responseObject
                    commit('SET_USER_PROFILE', user_profile)

                    // To refetch the user profile
                    this.dispatch("getUserProfile", {
                        email: email
                    })

                    let user_profile_update_loader = false
                    commit('SET_USER_PROFILE_UPDATE_LOADER', user_profile_update_loader)



                } else {
                    let user_profile_update_loader = false
                    commit('SET_USER_PROFILE_UPDATE_LOADER', user_profile_update_loader)


                }
            }).catch((e) => {
                let user_profile_update_loader = false
                commit('SET_USER_PROFILE_UPDATE_LOADER', user_profile_update_loader)

                if (e.response == undefined) {
                    let user_profile_message = networkError
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                } else {
                    let user_profile_message = e.response.data.errors
                    commit('SET_USER_PROFILE_MESSAGE', user_profile_message)
                }
            })
        },



        // ============= REGISTRATION(SIGNUP) ACTION =============
        registerUser({ commit }, { fullName, email, phoneNumber, password }) {
            let signup_loader = true
            commit('SET_SIGNUP_LOADER', signup_loader)

            axios.post(baseUrl + "user/create", {
                "firstName": fullName,
                "phone": phoneNumber,
                "email": email,
                "password": password
            }, { headers }).then((response) => {
                if (response.data.successMessage = 'created successfully') {
                    let username = response.data.responseObject.firstName
                    let token = response.data.responseObject.password
                    let email = response.data.responseObject.email
                    let phone = response.data.responseObject.phone
                    let signup_loader = false

                    commit('SET_USERNAME', username)
                    commit('SET_TOKEN', token)
                    commit('SET_EMAIL', email)
                    commit('SET_PHONE', phone)
                    commit('SET_SIGNUP_LOADER', signup_loader)

                    router.push('otp')
                } else {
                    let signup_loader = false
                    commit('SET_SIGNUP_LOADER', signup_loader)


                    let signup_error_message = "Failed to create profile"
                    commit('SET_SIGNUP_ERROR_MESSAGE', signup_error_message)
                }
            }).catch((e) => {
                let signup_loader = false
                commit('SET_SIGNUP_LOADER', signup_loader)

                if (e.response == undefined) {
                    let signup_error_message = networkError
                    commit('SET_SIGNUP_ERROR_MESSAGE', signup_error_message)
                } else {
                    let signup_error_message = e.response.data.errors
                    commit('SET_SIGNUP_ERROR_MESSAGE', signup_error_message)
                }

            })
        },


        // ============= OTP ACTIONS =============
        // ===== VERIFY OTP =====
        registrationOTP({ commit }, { email, otp }) {
            let otp_loader = true
            commit('SET_OTP_LOADER', otp_loader)

            axios.post(baseUrl + "user/verifyOTP", {
                "email": email,
                "otp": otp
            }, { headers }).then((response) => {
                if (response.data.successMessage = 'Phone number verified successfully') {
                    let otp_loader = false
                    commit('SET_OTP_LOADER', otp_loader)

                    router.push('home')
                } else {
                    let otp_loader = false
                    commit('SET_OTP_LOADER', otp_loader)


                    let otp_error_message = "Failed to create profile"
                    commit('SET_OTP_ERROR_MESSAGE', otp_error_message)
                }
            }).catch((e) => {
                let otp_loader = false
                commit('SET_OTP_LOADER', otp_loader)

                if (e.response == undefined) {
                    let otp_error_message = networkError
                    commit('SET_OTP_ERROR_MESSAGE', otp_error_message)
                } else {
                    let otp_error_message = e.response.data.errors
                    commit('SET_OTP_ERROR_MESSAGE', otp_error_message)
                }


            })
        },

        // ===== RESEND OTP =====
        resendOTP({ commit }, { email }) {
            let otp_resend_loader = true
            commit('SET_OTP_RESEND_LOADER', otp_resend_loader)

            axios.post(baseUrl + "user/resendVerifyOTP", {
                "email": email
            }, { headers }).then((response) => {
                if (response.data.successMessage = 'Phone number verified successfully') {
                    let otp_resend_loader = false
                    commit('SET_OTP_RESEND_LOADER', otp_resend_loader)

                    // router.push('home')
                } else {
                    let otp_resend_loader = false
                    commit('SET_OTP_RESEND_LOADER', otp_resend_loader)


                    let otp_error_message = "Failed to create profile"
                    commit('SET_OTP_ERROR_MESSAGE', otp_error_message)
                }
            }).catch((e) => {
                let otp_resend_loader = false
                commit('SET_OTP_RESEND_LOADER', otp_resend_loader)

                if (e.response == undefined) {
                    let otp_error_message = networkError
                    commit('SET_OTP_ERROR_MESSAGE', otp_error_message)
                } else {
                    let otp_error_message = e.response.data.errors
                    commit('SET_OTP_ERROR_MESSAGE', otp_error_message)
                }


            })
        },



        // ============= LOGIN ACTION =============
        loginUser({ commit }, { email, password }) {
            let login_loader = true
            commit('SET_LOGIN_LOADER', login_loader)

            axios.post(baseUrl + "user/login", {
                "email": email,
                "password": password
            }, { headers }).then((response) => {
                console.log('Here we are')
                console.log(response)
                if (response.data.successMessage = 'created successfully') {
                    let login_username = response.data.responseObject.email
                    let login_access_token = response.data.responseObject.token


                    let login_loader = false

                    // Save the email in the localStorage
                    localStorage.setItem("email", login_username)


                    commit('SET_LOGIN_USERNAME', login_username)
                    commit('SET_LOGIN_ACCESS_TOKEN', login_access_token)
                    commit('SET_LOGIN_LOADER', login_loader)

                    // Initializing authentication state
                    var authenticated = true
                    localStorage.setItem("authenticated", authenticated)

                    router.push('home')
                } else {
                    let login_loader = false
                    commit('SET_LOGIN_LOADER', login_loader)


                    let login_error_message = "Failed to create profile"
                    commit('SET_LOGIN_ERROR_MESSAGE', login_error_message)
                }
            }).catch((e) => {
                let login_loader = false
                commit('SET_LOGIN_LOADER', login_loader)

                if (e.response == undefined) {
                    let login_error_message = networkError
                    commit('SET_LOGIN_ERROR_MESSAGE', login_error_message)
                } else {

                    let login_error_message = e.response.data.errors
                    commit('SET_LOGIN_ERROR_MESSAGE', login_error_message)
                }

            })
        },


        // ============= FORGOT PASSWORD ACTION =============
        forgotPassword({ commit }, { email }) {
            let forgot_password_loader = true
            commit('SET_FORGOT_PASSWORD_LOADER', forgot_password_loader)

            // Capturing the email for the password reset screen
            let forgot_password_email = email
            commit('SET_FORGOT_PASSWORD_EMAIL', forgot_password_email)

            axios.post(baseUrl + "user/reset-password-request", {
                "email": email
            }, { headers }).then((response) => {
                console.log(response)
                if (response.data.successMessage = 'Email to reset password has been sent') {
                    let forgot_password_loader = false
                    commit('SET_FORGOT_PASSWORD_LOADER', forgot_password_loader)

                    router.push('new_password')
                } else {
                    let forgot_password_loader = false
                    commit('SET_FORGOT_PASSWORD_LOADER', forgot_password_loader)

                    let forgot_password_message = "This email is invalid"
                    commit('SET_FORGOT_PASSWORD_MESSAGE', forgot_password_message)
                }
            }).catch((e) => {
                let forgot_password_loader = false
                commit('SET_FORGOT_PASSWORD_LOADER', forgot_password_loader)

                if (e.response == undefined) {
                    let forgot_password_message = networkError
                    commit('SET_FORGOT_PASSWORD_MESSAGE', forgot_password_message)
                } else {
                    let forgot_password_message = e.response.data.errors
                    commit('SET_FORGOT_PASSWORD_MESSAGE', forgot_password_message)
                }


            })
        },


        // ============= RESET PASSWORD ACTION =============
        resetPassword({ commit }, { email, otp, new_password }) {
            let reset_password_loader = true
            commit('SET_RESET_PASSWORD_LOADER', reset_password_loader)

            axios.post(baseUrl + "user/saveNewPassword", {
                "email": email,
                "otp": otp,
                "new_password": new_password
            },
                { headers }).then((response) => {
                    if (response.data.successMessage = 'Phone number verified successfully') {
                        let reset_password_loader = false
                        commit('SET_RESET_PASSWORD_LOADER', reset_password_loader)

                        let reset_password_message = ""
                        commit('SET_RESET_PASSWORD_MESSAGE', reset_password_message)

                        router.push('/')
                    } else {
                        let reset_password_loader = false
                        commit('SET_RESET_PASSWORD_LOADER', reset_password_loader)

                        let reset_password_message = "This email is invalid"
                        commit('SET_RESET_PASSWORD_MESSAGE', reset_password_message)
                    }
                }).catch((e) => {
                    let reset_password_loader = false
                    commit('SET_RESET_PASSWORD_LOADER', reset_password_loader)

                    if (e.response == undefined) {
                        let reset_password_message = networkError
                        commit('SET_RESET_PASSWORD_MESSAGE', reset_password_message)
                    } else {
                        let reset_password_message = e.response.data.errors
                        commit('SET_RESET_PASSWORD_MESSAGE', reset_password_message)
                    }



                })
        },



    },
    getters: {
        // ============== SUBSCRIPTION GETTERS ===============
        subscription_details(state) {
            return state.subscription_details
        },

        // ============== GROUPS GETTERS ===============
        all_groups(state) {
            return state.all_groups
        },

        all_groups_loader(state) {
            return state.all_groups_loader
        },

        // ============== WALLET LOADER ===============
        add_bank_wallet_loader(state) {
            return state.add_bank_wallet_loader
        },

        // ============== USER PROFILE GETTERS ==============
        user_profile(state) {
            return state.user_profile
        },
        user_profile_loader(state) {
            return state.user_profile_loader
        },
        user_profile_update_loader(state) {
            return state.user_profile_update_loader
        },

        // ============= REGISTRATION(SIGNUP) GETTERS =============
        token(state) {
            return state.token
        },
        username(state) {
            return state.username
        },
        email(state) {
            return state.email
        },
        phone(state) {
            return state.phone
        },
        signup_loader(state) {
            return state.signup_loader
        },
        signup_error_message(state) {
            return state.signup_error_message
        },

        // ============= OTP GETTERS =============
        otp_loader(state) {
            return state.otp_loader
        },

        otp_error_message(state) {
            return state.otp_error_message
        },

        otp_resend_loader(state) {
            return state.otp_resend_loader
        },

        otp_resend_error_message(state) {
            return state.otp_resend_error_message
        },


        // ============= LOGIN GETTERS =============
        login_loader(state) {
            return state.login_loader
        },
        login_error_message(state) {
            return state.login_error_message
        },

        // ============= FORGOT PASSWORD GETTERS =============
        forgot_password_loader(state) {
            return state.forgot_password_loader
        },
        forgot_password_message(state) {
            return state.forgot_password_message
        },

        forgot_password_email(state) {
            return state.forgot_password_email
        },


        // ============= RESET PASSWORD GETTERS =============
        reset_password_loader(state) {
            return state.reset_password_loader
        },
        reset_password_message(state) {
            return state.reset_password_message
        },

    },

})