<template>
  <section class="section profile">
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body pt-3">
            <!-- Bordered Tabs -->
            <ul class="nav nav-tabs nav-tabs-bordered">
              <li class="nav-item">
                <button
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-overview"
                >
                  Overview
                </button>
              </li>

              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-edit"
                >
                  Edit Profile
                </button>
              </li>

              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-settings"
                >
                  Wallets
                </button>
              </li>

              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-change-password"
                >
                  Change Password
                </button>
              </li>
            </ul>
            <div class="tab-content pt-2">
              <div
                class="tab-pane fade show active profile-overview"
                id="profile-overview"
              >
                <h5 class="card-title">Profile Details</h5>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Full Name</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile.full_name !==
                        undefined && this.$store.getters.user_profile !== null
                        ? this.$store.getters.user_profile.full_name
                        : "----"
                    }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Gender</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile !== undefined &&
                      this.$store.getters.user_profile !== null
                        ? this.$store.getters.user_profile.gender
                        : "----"
                    }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Groups</div>
                  <div class="col-lg-9 col-md-8">
                    <!-- {{
                      this.$store.getters.user_profile.groups
                        ? this.$store.getters.user_profile.groups
                        : "----"
                    }} -->
                    ----
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Country</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile.address !== undefined &&
                      this.$store.getters.user_profile !== null
                        ? this.$store.getters.user_profile.address.country
                        : "----"
                    }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Address</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile.address != undefined &&
                      this.$store.getters.user_profile !== null
                        ? this.$store.getters.user_profile.address
                            .street_address
                        : "----"
                    }}
                    ,
                    {{
                      this.$store.getters.user_profile.address !== undefined &&
                      this.$store.getters.user_profile !== null
                        ? this.$store.getters.user_profile.address.city
                        : ""
                    }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Phone</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile.phone_number ?? "-----"
                    }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Email</div>
                  <div class="col-lg-9 col-md-8">
                    {{ this.$store.getters.user_profile.email ?? "-----" }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Wallet 1</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile.wallets
                        ? "-----"
                        : "----"
                    }}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Wallet 2</div>
                  <div class="col-lg-9 col-md-8">
                    {{
                      this.$store.getters.user_profile.wallets
                        ? "-----"
                        : "----"
                    }}
                  </div>
                </div>
              </div>

              <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
                <!-- Profile Edit Form -->
                <form
                  @submit.prevent="seeUpdatedData()"
                  enctype="multipart/form-data"
                >
                  <div class="row mb-3">
                    <div class="row mb-3 align-items-center">
                      <label
                        for="validationDefault03"
                        class="col-md-2 col-lg-2 col-form-label"
                        >Profile Image
                      </label>

                    <div class="col-md-1 col-lg-1">
                      <img
                        :src="edited_userbo.profile_photo"
                        alt="profile image"
                      />
                    </div>


                      <div class="col-md-7 col-lg-7">
                        <input
                          @change="uploadProfile"
                          class="form-control form-control-sm"
                          id="formFileSm"
                          type="file"
                          accept="image/png,image/jpg"
                          placeholder="Select Signature"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="fullName"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Full Name</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="fullName"
                        type="text"
                        class="form-control"
                        id="fullName"
                        v-model="edited_userbo.full_name"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="inputState"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Gender</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <select
                        v-model="edited_userbo.gender"
                        id="inputState"
                        class="form-select"
                      >
                        <option value="Female" selected>Female</option>
                        <option value="Male">Male</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      for="Country"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Country</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <select
                        v-model="edited_address.country"
                        required
                        class="form-control"
                      >
                        <option
                          v-for="country in this.countries"
                          v-bind:key="country.name"
                          :value="country.name"
                          class="greyColor"
                        >
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="Address"
                      class="col-md-4 col-lg-3 col-form-label"
                    >
                      City</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="city"
                        type="text"
                        class="form-control"
                        id="Address"
                        v-model="edited_address.city"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="Address"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Address</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="address"
                        type="text"
                        class="form-control"
                        id="Address"
                        v-model="edited_address.street_address"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="Address"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Postal code</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="address"
                        type="text"
                        class="form-control"
                        id="Address"
                        v-model="edited_address.postal_code"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="Phone" class="col-md-4 col-lg-3 col-form-label"
                      >Phone</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        disabled
                        name="phone"
                        type="text"
                        class="form-control"
                        id="Phone"
                        v-model="edited_userbo.phone_number"
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="Email" class="col-md-4 col-lg-3 col-form-label"
                      >Email</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        disabled
                        name="email"
                        type="email"
                        class="form-control"
                        id="Email"
                        v-model="edited_userbo.email"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      for="inputState"
                      class="col-md-4 col-lg-3 col-form-label"
                      >Type of ID</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <select
                        v-model="edited_userbo.id_type"
                        id="inputState"
                        class="form-select"
                      >
                        <option value="NIDA">NIDA</option>
                        <option value="Driver License">Driver license</option>
                        <option value="Insuarance">Insuarance</option>
                      </select>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label
                      for="Facebook"
                      class="col-md-4 col-lg-3 col-form-label"
                      >ID Number</label
                    >
                    <div class="col-md-8 col-lg-9">
                      <input
                        name="facebook"
                        type="text"
                        class="form-control"
                        id="Facebook"
                        v-model="edited_userbo.id_number"
                      />
                    </div>
                  </div>

                  <div class="row mb-3 align-items-center">
                    <label
                      for="validationDefault03"
                      class="col-md-2 col-lg-2 col-form-label"
                      >Signature</label
                    >
                       <div class="col-md-1 col-lg-1">
                      <img
                        :src="edited_userbo.signature_photo"
                        alt="profile image"
                      />
                    </div>
                    <div class="col-md-7 col-lg-7">
                      <input
                        @change="uploadSignature"
                        class="form-control form-control-sm"
                        id="formFileSm"
                        type="file"
                        accept="image/png,image/jpg"
                        placeholder="Select Signature"
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn"
                      style="background-color: #fcb713; color: white"
                    >
                      <div
                        v-if="
                          this.$store.getters.user_profile_update_loader == true
                        "
                      >
                        <div
                          class="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                      <div v-else>Save changes</div>
                    </button>
                  </div>
                </form>
                <!-- End Profile Edit Form -->
              </div>

              <div class="tab-pane fade pt-3" id="profile-settings">
                <!-- Settings Form -->
                <div class="col-12">
                  <div>
                    <div class="card-body">
                      <div
                        class="
                          dataTable-wrapper dataTable-loading
                          no-footer
                          sortable
                          searchable
                          fixed-columns
                        "
                      >
                        <div class="dataTable-top">
                          <div class="dataTable-search">
                            <div class="input-group rounded">
                              <a
                                href="#Add-wallets"
                                data-bs-toggle="modal"
                                data-bs-target="#addWalletModal"
                                ><span
                                  class="badge"
                                  style="
                                    font-size: 16px;
                                    background-color: #28e288;
                                    margin: 10px;
                                  "
                                  >Add New Wallet</span
                                ></a
                              >
                            </div>
                          </div>
                        </div>

                        <!-- Mobile Money -->
                        <h5>MOBILE MONEY WALLETS</h5>
                        <div>
                          <div class="dataTable-container">
                            <table
                              class="
                                table table-borderless
                                datatable
                                dataTable-table
                              "
                            >
                              <thead>
                                <tr>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 7.6251%"
                                  >
                                    <a href="#" class="dataTable-sorter">#</a>
                                  </th>

                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 12.5496%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Wallet Status</a
                                    >
                                  </th>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 11.5965%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Carrier</a
                                    >
                                  </th>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 11.5965%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Phone Number</a
                                    >
                                  </th>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 11.5965%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Action</a
                                    >
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                v-if="
                                  edited_userbo.mobileWallets == null ||
                                  edited_userbo.mobileWallets.lenght == 0 ||
                                  edited_userbo.mobileWallets == undefined
                                "
                              >
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td>No Mobile wallets found</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                              <tbody v-else>
                                <tr
                                  v-for="mobile_wallet in edited_userbo.mobileWallets"
                                  :key="mobile_wallet.id"
                                >
                                  <th scope="row">
                                    <a href="#">#{{ mobile_wallet.id }}</a>
                                  </th>
                                  <td>
                                    {{
                                      mobile_wallet.walletStatus === false
                                        ? "Not Active"
                                        : "Active"
                                    }}
                                  </td>
                                  <td style="font-weight: 600">
                                    {{ mobile_wallet.carrier ?? "-----" }}
                                  </td>
                                  <td style="font-weight: 600">
                                    {{ mobile_wallet.phoneNumber ?? "-----" }}
                                  </td>
                                  <td>
                                    <a
                                      style="cursor: pointer"
                                      @click="
                                        deleteMobileWallet(
                                          mobile_wallet.phoneNumber
                                        )
                                      "
                                      ><span
                                        class="badge"
                                        style="
                                          font-size: 16px;
                                          background-color: #f53c3c;
                                        "
                                      >
                                        Delete
                                      </span></a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <!-- BANK CARD WALLETS -->
                        <h5>BANK CARD WALLETS</h5>
                        <div>
                          <div class="dataTable-container">
                            <table
                              class="
                                table table-borderless
                                datatable
                                dataTable-table
                              "
                            >
                              <thead>
                                <tr>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 7.6251%"
                                  >
                                    <a href="#" class="dataTable-sorter">#</a>
                                  </th>

                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 12.5496%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Wallet Status</a
                                    >
                                  </th>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 11.5965%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Expiration Date</a
                                    >
                                  </th>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 11.5965%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Account Number</a
                                    >
                                  </th>
                                  <th
                                    scope="col"
                                    data-sortable=""
                                    style="width: 11.5965%"
                                  >
                                    <a href="#" class="dataTable-sorter"
                                      >Action</a
                                    >
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                v-if="
                                  edited_userbo.bankWallets == null ||
                                  edited_userbo.bankWallets.lenght <= 1 ||
                                  edited_userbo.bankWallets == undefined
                                "
                              >
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td>No Bank wallets found</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                              <tbody v-else>
                                <tr
                                  v-for="bank_wallet in edited_userbo.bankWallets"
                                  :key="bank_wallet.id"
                                >
                                  <th scope="row">
                                    <a href="#">#{{ bank_wallet.id }}</a>
                                  </th>
                                  <td>
                                    {{
                                      bank_wallet.walletStatus === null
                                        ? "Not Active"
                                        : "Active"
                                    }}
                                  </td>
                                  <td style="font-weight: 600">
                                    {{ bank_wallet.expire_date ?? "-----" }}
                                  </td>
                                  <td style="font-weight: 600">
                                    {{ bank_wallet.accountNumber ?? "-----" }}
                                  </td>
                                  <td>
                                    <a
                                      style="cursor: pointer"
                                      @click="
                                        deleteBankWallet(
                                          bank_wallet.accountNumber
                                        )
                                      "
                                      ><span
                                        class="badge"
                                        style="
                                          font-size: 16px;
                                          background-color: #f53c3c;
                                        "
                                      >
                                        <div
                                          v-if="
                                            this.$store.getters
                                              .add_bank_wallet_loader == true
                                          "
                                        >
                                          <div
                                            class="
                                              spinner-border spinner-border-sm
                                            "
                                            role="status"
                                          >
                                            <span class="visually-hidden"
                                              >Loading...</span
                                            >
                                          </div>
                                        </div>
                                        <div v-else>Delete</div>
                                      </span></a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <!-- <div v-else>
                          No records found
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade pt-3" id="profile-change-password">
              <!-- Change Password Form -->
              <form @submit.prevent="changePassword()">
                <div class="row mb-3">
                  <label
                    for="newPassword"
                    class="col-md-4 col-lg-3 col-form-label"
                    >New Password</label
                  >
                  <div class="passwordContainer">
                    <input
                      id="Password"
                      type="text"
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
                </div>

                <!-- Password Validator Message -->
                <div v-if="validationMessage == 'Password is weak'">
                  <div class="mt-2" style="font-weight: bold; color: red">
                    {{ validationMessage }}
                  </div>
                </div>

                <div v-else-if="(validationMessage = 'Password is strong')">
                  <div class="mt-2" style="font-weight: bold; color: green">
                    {{ validationMessage }}
                  </div>
                </div>

                <div class="text-center">
                  <button
                    type="submit"
                    class="btn"
                    style="background-color: #fcb713; color: white"
                  >
                    Change Password
                  </button>
                </div>
              </form>
              <!-- End Change Password Form -->
            </div>
          </div>
          <!-- End Bordered Tabs -->
        </div>
      </div>
    </div>

    <!-- Add wallet model -->
    <div
      class="modal fade"
      id="addWalletModal"
      tabindex="-1"
      aria-labelledby="addWalletModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" style="border-radius: 0px">
            <h1
              class="modal-title fs-5"
              id="addWalletModal"
              style="font-weight: bold"
            >
              ADD WALLET
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <section id="Add-wallets">
              <form class="row g-3">
                <div class="col-md-12">
                  <label for="inputState" class="form-label"
                    >ADD WALLET TYPE</label
                  >
                  <select
                    v-model="wallet_type"
                    id="inputState"
                    class="form-select"
                  >
                    <option selected>Bank Card</option>
                    <option>Mobile Money</option>
                  </select>
                </div>

                <div class="row mt-3" v-if="wallet_type === 'Bank Card'">
                  <form @submit.prevent="addBankWallet()">
                    <div class="col-md-12">
                      <label for="inputName5" class="form-label"
                        >BANK CARD NUMBER</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        placeholder="1223495069"
                        v-model="bank_wallet.card_number"
                        required
                      />
                    </div>
                    <div class="col-md-12 mt-2">
                      <label for="inputName5" class="form-label"
                        >EXPIRATION DATE</label
                      >
                      <input
                        v-model="bank_wallet.expiration_date"
                        type="date"
                        class="form-control"
                        id="inputName5"
                        required
                      />
                    </div>
                    <div class="col-md-12 mt-3">
                      <label for="inputPassword5" class="form-label"
                        >CARD CVV</label
                      >
                      <input
                        v-model="bank_wallet.cvv"
                        type="text"
                        class="form-control"
                        id="inputPassword5"
                        placeholder="234"
                        required
                      />
                    </div>
                    <div class="col-md-12 mt-3">
                      <button
                        type="submit"
                        class="btn"
                        style="background-color: #fcb713; color: white"
                      >
                        Add Bank wallet
                      </button>
                    </div>
                  </form>
                </div>

                <div class="row" v-else>
                  <form @submit.prevent="addMobileWallet()">
                    <div class="col-md-12 mt-3">
                      <label for="inputPassword5" class="form-label"
                        >ISSUER/CARRIER</label
                      >
                      <select
                        v-model="mobile_wallet.issuer"
                        id="inputState"
                        class="form-select"
                        required
                      >
                        <option selected value="Tigo pesa">Tigo pesa</option>
                        <option value="Mpesa">Mpesa</option>
                        <option value="Airtel money">Airtel money</option>
                        <option value="T-pesa">T-pesa</option>
                        <option value="Halopesa">Halopesa</option>
                      </select>
                    </div>
                    <div class="col-md-12 mt-2">
                      <label for="inputName5" class="form-label"
                        >PHONE NUMBER</label
                      >
                      <input
                        v-model="mobile_wallet.phone_number"
                        type="text"
                        placeholder="255712343214"
                        class="form-control"
                        id="inputName5"
                        required
                      />
                    </div>
                    <div class="col-md-12 mt-3">
                      <button
                        type="submit"
                        class="btn"
                        style="background-color: #fcb713; color: white"
                      >
                        Add Mobile wallet
                      </button>
                    </div>
                  </form>
                </div>
              </form>
              <!-- End settings Form -->
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SettingsView",
  data() {
    return {
      savedEmail: "",
      countries: [{ name: "Tanzania, United Republic of", code: "TZ" }],

      //   Profile Editing Variables
      edited_full_name: "",
      edited_country: "",

      edited_gender: "",
      edited_groups: [],

      edited_address: {},
      edited_userbo: {},
      edited_idverif: {},

      hideAndShowWalletForm: true,
      wallet_type: "Bank Card",
      bank_wallet: {},
      mobile_wallet: {},
      validationMessage: "",
      password: "",

      edited_phone_number: "",
      edited_email: "",
      edited_wallets: {},
      edited_ID_type: "",
      edited_ID_number: "",
      edited_signature_photo: "",
      edited_profile_photo: "",
    };
  },
  mounted() {
    this.savedEmail = localStorage.getItem("email");
    this.$store.dispatch("getUserProfile", {
      email: this.savedEmail,
    });

    this.edited_groups = this.$store.getters.user_profile.groups
      ? this.$store.getters.user_profile.groups
      : {};

    this.edited_profile_photo = this.$store.getters.user_profile.profile_photo
      ? this.$store.getters.user_profile.profile_photo
      : "";
    this.edited_signature_photo = this.$store.getters.user_profile
      .signature_photo
      ? this.$store.getters.user_profile.signature_photo
      : "";
  },

  methods: {
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

    // == Change password ==
    changePassword() {
      this.savedEmail = localStorage.getItem("email");

      this.$store.dispatch("changeUserPassword", {
        email: this.savedEmail,
        new_password: this.password,
      });
    },

    // == Deleting Mobile Wallet ==

    deleteMobileWallet(mobile_wallet_phone_number) {
      this.savedEmail = localStorage.getItem("email");

      this.$store.dispatch("deleteMobileWallet", {
        email: this.savedEmail,
        specific_wallet: mobile_wallet_phone_number,
      });
    },

    // == Deleting Bank Wallet ==
    deleteBankWallet(bank_wallet_account_number) {
      this.savedEmail = localStorage.getItem("email");

      this.$store.dispatch("deleteBankWallet", {
        email: this.savedEmail,
        specific_wallet: bank_wallet_account_number,
      });
    },

    // == Adding Mobile Wallet ==
    addMobileWallet() {
      this.savedEmail = localStorage.getItem("email");
      this.$store.dispatch("addNewMobileWallet", {
        email: this.savedEmail,
        phone_number: this.mobile_wallet.phone_number,
        issuer: this.mobile_wallet.issuer,
      });
    },

    // == Adding Bank wallet ==
    addBankWallet() {
      this.savedEmail = localStorage.getItem("email");
      this.$store.dispatch("addNewBankWallet", {
        email: this.savedEmail,
        card_number: this.bank_wallet.card_number,
        expiration_date: this.bank_wallet.expiration_date,
        cvv: this.bank_wallet.cvv,
      });
    },

    // == uploading the signature ==
    uploadSignature(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onloadend = () => {
        this.edited_userbo.signature_photo = reader.result;
        // console.log("RESULT", reader.result);
        console.log(this.edited_userbo.signature_photo);
      };
      reader.readAsDataURL(file);
    },

    // == uploading the profile photo ==
    uploadProfile(e) {
      var file = e.target.files[0];
      var filesize = e.target.files[0].size;

      var reader = new FileReader();
      reader.onloadend = () => {
        this.edited_userbo.profile_photo = reader.result;
        // console.log("RESULT", reader.result);
        console.log(this.edited_userbo.profile_photo);
      };
      reader.readAsDataURL(file);
    },

    seeUpdatedData() {
      // console.log(this.edited_userbo);
      this.savedEmail = localStorage.getItem("email");
      this.$store.dispatch("updateUserProfile", {
        address: this.edited_address,
        userbo: {
          firstName: this.edited_userbo.full_name,
          gender: this.edited_userbo.gender,
        },
        userimage: {
          profilePhoto: this.edited_userbo.profile_photo,
          signature: this.edited_userbo.signature_photo,
        },
        idverif: {
          type_of_id: this.edited_userbo.id_type,
          name_of_id: this.edited_userbo.id_number,
        },
        email: this.savedEmail,
      });
    },
  },

  computed: {
    edited_phone_number() {
      return (this.edited_phone_number = this.$store.getters.user_profile
        .phone_number
        ? this.$store.getters.user_profile.phone_number
        : "");
    },

    edited_address() {
      return (this.edited_address = this.$store.getters.user_profile.address
        ? this.$store.getters.user_profile.address
        : {});
    },

    edited_userbo() {
      return (this.edited_userbo = this.$store.getters.user_profile
        ? this.$store.getters.user_profile
        : {});
    },

    user_profile_update_loader() {
      return this.$store.getters.user_profile_update_loader;
    },

    user_profile() {
      return this.$store.getters.user_profile;
    },

    add_bank_wallet_loader() {
      return this.$store.getters.add_bank_wallet_loader;
    },
    // Patch form
  },
};
</script>

<style>
</style>