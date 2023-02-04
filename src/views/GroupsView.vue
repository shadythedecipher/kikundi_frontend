<template>
  <section class="section dashboard">
    <div class="container">
      <div class="row">
        <!-- <h1>Group view page</h1> -->
        <!-- <div> -->
        <ul class="nav nav-tabs nav-tabs-bordered mb-5">
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#my-groups"
            >
              My Groups
            </button>
          </li>

          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#added-to"
            >
              Added to
            </button>
          </li>
        </ul>

        <div class="tab-content pt-2">
          <div class="tab-pane fade show active my-groups" id="my-groups">
            <div class="row">
              <div v-if="this.$store.getters.all_groups_loader === true">
                <div
                  style="width: 70vw; height: 70vh"
                  class="d-flex justify-content-center align-items-center"
                >
                  <div class="d-flex justify-content-center align-items-center">
                    <div
                      class="
                        spinner-border spinner-border-xxl
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <h4></h4>
              </div>
              <div v-else>
                <div v-if="this.$store.getters.all_groups.admin.length === 0">
                  <div
                    style="width: 70vw; height: 70vh"
                    class="d-flex justify-content-center align-items-center"
                  >
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <h4>You have no groups</h4>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="row">
                    <div
                      class="
                        align-items-center
                        col-xxl-4
                        col-xl-4
                        col-lg-4
                        col-md-4
                        col-sm-12
                        col-xs-12
                        col-12
                      "
                      v-for="group in this.$store.getters.all_groups.admin"
                      v-bind:key="group.name"
                    >
                      <router-link to="/groupdetails">
                        <div class="card" style="width: 24rem">
                          <!-- <img src="..." class="card-img-top" alt="..."  /> -->
                          <div style="height: 100px; background-color: orange">
                            <div
                              style="height: 100px"
                              class="
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <span
                                style="
                                  font-weight: bold;
                                  font-size: 2.5em;
                                  color: black;
                                "
                                >{{ group.group_name.slice(0, 2) }}</span
                              >
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title" style="font-weight: bold">
                              {{ group.group_name }}
                            </h5>
                            <p class="card-text">
                              {{
                                group.group_description.length > 150
                                  ? group.group_description.substring(0, 145) +
                                    " ..."
                                  : group.group_description
                              }}
                            </p>
                            <span class="badge rounded-pill text-bg-dark"
                              >Members : {{ group.total_members }}</span
                            >
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade added-to" id="added-to">
            <div class="row">
              <div v-if="this.$store.getters.all_groups_loader === true">
                <div
                  style="width: 70vw; height: 70vh"
                  class="d-flex justify-content-center align-items-center"
                >
                  <div class="d-flex justify-content-center align-items-center">
                    <div
                      class="
                        spinner-border spinner-border-xxl
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <h4></h4>
              </div>
              <div v-else>
                <div v-if="this.$store.getters.all_groups.member.length === 0">
                  <div
                    style="width: 70vw; height: 70vh"
                    class="d-flex justify-content-center align-items-center"
                  >
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <h4>You dont belong in any group</h4>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div
                    class="
                      align-items-center
                      col-xxl-4
                      col-xl-4
                      col-lg-4
                      col-md-4
                      col-sm-12
                      col-xs-12
                      col-12
                    "
                    v-for="group in this.$store.getters.all_groups.member"
                    v-bind:key="group.name"
                  >
                    <router-link to="/groupdetails">
                      <div class="card" style="width: 24rem">
                        <!-- <img src="..." class="card-img-top" alt="..."  /> -->
                        <div style="height: 100px; background-color: orange">
                          <div
                            style="height: 100px"
                            class="
                              d-flex
                              align-items-center
                              justify-content-center
                            "
                          >
                            <span
                              style="
                                font-weight: bold;
                                font-size: 2.5em;
                                color: black;
                              "
                              >{{ group.group_name.slice(0, 2) }}</span
                            >
                          </div>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title" style="font-weight: bold">
                            {{ group.group_name }}
                          </h5>
                          <p class="card-text">
                            {{
                              group.group_description.length > 150
                                ? group.group_description.substring(0, 145) +
                                  " ..."
                                : group.group_description
                            }}
                          </p>
                          <span class="badge rounded-pill text-bg-dark"
                            >Members : {{ group.total_members }}</span
                          >
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- </div> -->
      </div>
    </div>

    <!-- This button will change according to the subscrption
    If the user is normal/basic they get to add one group that pops up add group modal
    But if the have reached the end of their subscription limit of adding more groups
    they will have a subscription buttom that pops up a subscription modal
    -->
    <div
      v-if="
        this.$store.getters.subscription_details.group_left !== 0 &&
        this.$store.getters.subscription_details.subscription_status ===
          'active'
      "
    >
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#subscribedUsers"
        class="float align-item-center justify-content-center"
      >
        <i class="bi bi-plus my-float"></i>
      </a>
    </div>
    <div v-else>
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#subscription"
        class="float align-item-center justify-content-center"
      >
        <i class="bi bi-plus my-float"></i>
      </a>
    </div>

    <!-- Modal Section -->
    <!-- For those who already have a subscription -->
    <div
      class="modal fade"
      id="subscribedUsers"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              style="font-weight: bold; font-size: 5em"
              class="modal-title fs-5"
              id="staticBackdropLabel"
            >
              Add a group<br />
              <p class="greyColor" style="font-size: 0.7em">
                {{
                  "You have " +
                  this.$store.getters.subscription_details.group_left +
                  " groups left"
                }}
              </p>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-12 col-md-offset-3">
                      <form @submit.prevent="addNewGroup()" id="msform">
                        <fieldset>
                          <div class="row 12">
                            <div class="col-6">
                              <h1
                                class="card-title"
                                style="font-size: 30px; text-align: left"
                              >
                                General Information
                              </h1>
                              <p class="fs-subtitle" style="text-align: left">
                                Enter the required information below to add a
                                group you manage. You can change it anytime you
                                want.
                              </p>
                              <p
                                for="validationDefault03"
                                class="form-label"
                                style="text-align: left"
                              >
                                Group Name
                              </p>
                              <input
                                type="text"
                                class="form-control"
                                id="validationDefault03"
                                placeholder=""
                                required
                                v-model="groupName"
                              />
                              <div class="row">
                                <div class="col-md-6">
                                  <p
                                    for="validationDefault03"
                                    class="form-label"
                                    style="text-align: left"
                                  >
                                    Group Abbreviation
                                  </p>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                    v-model="group_name_abv"
                                  />
                                </div>
                                <div class="col-md-6">
                                  <p
                                    for="validationDefault03"
                                    class="form-label"
                                    style="text-align: left"
                                  >
                                    TIN Number
                                  </p>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                    v-model="group_tin_number"
                                  />
                                </div>

                                <div class="col-md-6">
                                  <p
                                    for="validationDefault03"
                                    class="form-label"
                                    style="text-align: left"
                                  >
                                    Group phone number
                                  </p>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                    v-model="group_phone_number"
                                  />
                                </div>

                                <div class="col-md-6">
                                  <p
                                    for="validationDefault03"
                                    class="form-label"
                                    style="text-align: left"
                                  >
                                    Group email
                                  </p>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                    v-model="group_email"
                                  />
                                </div>
                              </div>
                              <div>
                                <p
                                  for="validationDefault03"
                                  class="form-label"
                                  style="text-align: left"
                                >
                                  What describes your group?
                                </p>

                                <div class="form-floating mb-3">
                                  <select
                                    class="form-select"
                                    id="floatingSelect"
                                    v-model="what_describe_group"
                                  >
                                    <option selected value="Friends Saving">
                                      Friends Saving
                                    </option>
                                    <option value="Individual Group">
                                      Individual Group
                                    </option>
                                    <option value="Business Loans">
                                      Business Loans
                                    </option>
                                    <option value="Others">Others</option>
                                  </select>
                                </div>
                              </div>
                              <p
                                for="validationDefault03"
                                class="form-label"
                                style="text-align: left"
                              >
                                About Group
                              </p>
                              <div class="form-floating">
                                <textarea
                                  class="form-control"
                                  placeholder="Address"
                                  id="floatingTextarea"
                                  style="height: 100px"
                                  v-model="group_description"
                                ></textarea>
                                <label for="floatingTextarea"
                                  >Add Description</label
                                >
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="form-floating">
                                <p
                                  for="validationDefault03"
                                  class="form-label"
                                  style="text-align: center"
                                ></p>
                              </div>

                              <h5
                                for="validationDefault03"
                                class="form-label"
                                style="
                                  text-align: left;
                                  font-weight: 600;
                                  padding-bottom: 15px;
                                  padding-top: 5px;
                                "
                              >
                                Uploads Documents
                              </h5>

                              <div>
                                <p
                                  for="validationDefault03"
                                  class="form-label"
                                  style="text-align: left"
                                >
                                  SERA YA UWEKEZAJI
                                </p>

                                <input
                                  class="form-control form-control-sm"
                                  id="formFileSm"
                                  accept="application/pdf"
                                  type="file"
                                  @change="seraYaUwekezaji"
                                />
                              </div>
                              <div>
                                <p
                                  for="validationDefault03"
                                  class="form-label"
                                  style="text-align: left"
                                >
                                  SERA YA MIKOPO
                                </p>

                                <input
                                  class="form-control form-control-sm"
                                  id="formFileSm"
                                  accept="application/pdf"
                                  type="file"
                                  @change="seraYaMikopo"
                                />
                              </div>

                              <div>
                                <p
                                  for="validationDefault03"
                                  class="form-label"
                                  style="text-align: left"
                                >
                                  MASHARTI YA CHAMA
                                </p>

                                <input
                                  class="form-control form-control-sm"
                                  id="formFileSm"
                                  type="file"
                                  accept="application/pdf"
                                  @change="mashartiYaChama"
                                />
                              </div>
                              <div>
                                <p
                                  for="validationDefault03"
                                  class="form-label"
                                  style="text-align: left"
                                >
                                  UDHIBITI YA MAJANGA
                                </p>

                                <input
                                  class="form-control form-control-sm"
                                  id="formFileSm"
                                  accept="application/pdf"
                                  type="file"
                                  @change="udhibitiYaMajanga"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div class="col-md-12 mt-3">
                          <button
                            type="submit"
                            class="btn"
                            style="background-color: #fcb713; color: white"
                          >
                                <div
                              v-if="this.$store.getters.all_groups_loader == true"
                            >
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                            <div v-else>Create group</div>
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
      </div>
    </div>

    <!-- Add Group Subscription and Payment Model for those who have no subscription plans -->
    <div
      class="modal fade"
      id="subscription"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              style="font-weight: bold; font-size: 5em"
              class="modal-title fs-5"
              id="staticBackdropLabel"
            >
              Subscription and Payment
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <!-- Tabs -->
                <ul
                  class="
                    nav nav-tabs nav-tabs-bordered
                    justify-content-between
                    mt-5
                  "
                >
                  <li
                    class="nav-item"
                    style="font-weight: 700; font-size: 1.3em"
                  >
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#select-subscription"
                    >
                      1.Select your subscription
                    </button>
                  </li>

                  <li
                    class="nav-item"
                    style="font-weight: 700; font-size: 1.3em"
                  >
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#group-details"
                    >
                      2.Add group details
                    </button>
                  </li>

                  <li
                    class="nav-item"
                    style="font-weight: 700; font-size: 1.3em"
                  >
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#payment-details"
                    >
                      3.Payment details
                    </button>
                  </li>

                  <li
                    class="nav-item"
                    style="font-weight: 700; font-size: 1.3em"
                  >
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#complete"
                    >
                      4.Complete
                    </button>
                  </li>
                </ul>

                <!-- Tab Content Section -->
                <div class="tab-content pt-2 mt-5">
                  <div
                    class="tab-pane fade show active select-subscription"
                    id="select-subscription"
                  >
                    <div class="row">
                      <div
                        class="
                          align-items-center
                          col-xxl-4
                          col-xl-4
                          col-lg-4
                          col-md-4
                          col-sm-12
                          col-xs-12
                          col-12
                        "
                      >
                        <div class="card" style="width: 24rem">
                          <!-- <img src="..." class="card-img-top" alt="..."  /> -->
                          <div style="height: 300px; background-color: orange">
                            <div
                              style="height: 300px"
                              class="
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <span style="font-weight: bold; font-size: 2.5em"
                                >Basic</span
                              >
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title" style="font-weight: bold">
                              Basic Plan (Free)
                            </h5>
                            <div class="card-text">
                              <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    1 Group
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    30 Group members
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    2 Wallets
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    5 Products
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-x-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    Generate Automatic Reports
                                  </p>
                                </div>
                                <button
                                  class="btn btn-light mt-4"
                                  style="background-color: #cecece"
                                >
                                  Free
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          align-items-center
                          col-xxl-4
                          col-xl-4
                          col-lg-4
                          col-md-4
                          col-sm-12
                          col-xs-12
                          col-12
                        "
                      >
                        <div class="card" style="width: 24rem">
                          <!-- <img src="..." class="card-img-top" alt="..."  /> -->
                          <div style="height: 300px; background-color: orange">
                            <div
                              style="height: 300px"
                              class="
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <span style="font-weight: bold; font-size: 2.5em"
                                >Standard</span
                              >
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title" style="font-weight: bold">
                              Standard Plan
                            </h5>
                            <div class="card-text">
                              <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    5 Groups
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    50 Group members
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    5 Wallets
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    10 Products
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-x-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    Generate Automatic Reports
                                  </p>
                                </div>
                                <button
                                  class="btn btn-light mt-4"
                                  style="background-color: #cecece"
                                >
                                  Buy for $4.99
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          align-items-center
                          col-xxl-4
                          col-xl-4
                          col-lg-4
                          col-md-4
                          col-sm-12
                          col-xs-12
                          col-12
                        "
                      >
                        <div class="card" style="width: 24rem">
                          <!-- <img src="..." class="card-img-top" alt="..."  /> -->
                          <div style="height: 300px; background-color: orange">
                            <div
                              style="height: 300px"
                              class="
                                d-flex
                                align-items-center
                                justify-content-center
                              "
                            >
                              <span style="font-weight: bold; font-size: 2.5em"
                                >Premium</span
                              >
                            </div>
                          </div>
                          <div class="card-body">
                            <h5 class="card-title" style="font-weight: bold">
                              Premium Plan
                            </h5>
                            <div class="card-text">
                              <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    5+ Group
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    50+ Group members
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    10+ Wallets
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    10+ Products
                                  </p>
                                </div>
                                <div class="d-flex align-items-center">
                                  <i
                                    style="font-size: 1.5em"
                                    class="bi bi-check-circle"
                                  ></i>
                                  <p
                                    style="font-size: 1.3em; margin-bottom: 0px"
                                    class="mx-2"
                                  >
                                    Generate Automatic Reports
                                  </p>
                                </div>

                                <button
                                  class="btn btn-light mt-4"
                                  style="background-color: #cecece"
                                >
                                  Buy for $8.99
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade group-details" id="group-details">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-md-12 col-md-offset-3">
                            <form id="msform">
                              <fieldset>
                                <div class="row 12">
                                  <div class="col-6">
                                    <h1
                                      class="card-title"
                                      style="font-size: 30px; text-align: left"
                                    >
                                      General Information
                                    </h1>
                                    <p
                                      class="fs-subtitle"
                                      style="text-align: left"
                                    >
                                      Enter the required information below to
                                      add a group you manage. You can change it
                                      anytime you want.
                                    </p>
                                    <p
                                      for="validationDefault03"
                                      class="form-label"
                                      style="text-align: left"
                                    >
                                      Group Name
                                    </p>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationDefault03"
                                      placeholder=""
                                      required
                                    />
                                    <div class="row">
                                      <div class="col-md-6">
                                        <p
                                          for="validationDefault03"
                                          class="form-label"
                                          style="text-align: left"
                                        >
                                          Group Abbreviation
                                        </p>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom01"
                                          value="John"
                                          required
                                        />
                                      </div>
                                      <div class="col-md-6">
                                        <p
                                          for="validationDefault03"
                                          class="form-label"
                                          style="text-align: left"
                                        >
                                          TIN Number
                                        </p>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="validationCustom02"
                                          value="Doe"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <p
                                        for="validationDefault03"
                                        class="form-label"
                                        style="text-align: left"
                                      >
                                        What describes your group?
                                      </p>

                                      <div class="form-floating mb-3">
                                        <select
                                          class="form-select"
                                          id="floatingSelect"
                                        >
                                          <option selected>
                                            Friends Saving
                                          </option>
                                          <option value="1">
                                            Individual Group
                                          </option>
                                          <option value="2">
                                            Business Loans
                                          </option>
                                          <option value="3">Others</option>
                                        </select>
                                      </div>
                                    </div>
                                    <p
                                      for="validationDefault03"
                                      class="form-label"
                                      style="text-align: left"
                                    >
                                      About Group
                                    </p>
                                    <div class="form-floating">
                                      <textarea
                                        class="form-control"
                                        placeholder="Address"
                                        id="floatingTextarea"
                                        style="height: 100px"
                                      ></textarea>
                                      <label for="floatingTextarea"
                                        >Add Description</label
                                      >
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="form-floating">
                                      <p
                                        for="validationDefault03"
                                        class="form-label"
                                        style="text-align: center"
                                      ></p>
                                    </div>

                                    <h5
                                      for="validationDefault03"
                                      class="form-label"
                                      style="
                                        text-align: left;
                                        font-weight: 600;
                                        padding-bottom: 15px;
                                        padding-top: 5px;
                                      "
                                    >
                                      Uploads Documents
                                    </h5>

                                    <div>
                                      <p
                                        for="validationDefault03"
                                        class="form-label"
                                        style="text-align: left"
                                      >
                                        SERA YA UWEKEZAJI
                                      </p>

                                      <input
                                        class="form-control form-control-sm"
                                        id="formFileSm"
                                        type="file"
                                      />
                                    </div>
                                    <div>
                                      <p
                                        for="validationDefault03"
                                        class="form-label"
                                        style="text-align: left"
                                      >
                                        SERA YA MIKOPO
                                      </p>

                                      <input
                                        class="form-control form-control-sm"
                                        id="formFileSm"
                                        type="file"
                                      />
                                    </div>

                                    <div>
                                      <p
                                        for="validationDefault03"
                                        class="form-label"
                                        style="text-align: left"
                                      >
                                        MASHARTI YA CHAMA
                                      </p>

                                      <input
                                        class="form-control form-control-sm"
                                        id="formFileSm"
                                        type="file"
                                      />
                                    </div>
                                    <div>
                                      <p
                                        for="validationDefault03"
                                        class="form-label"
                                        style="text-align: left"
                                      >
                                        UDHIBITI YA MAJANGA
                                      </p>

                                      <input
                                        class="form-control form-control-sm"
                                        id="formFileSm"
                                        type="file"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade payment-details"
                    id="payment-details"
                  >
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-md-12 col-md-offset-3">
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

                              <div
                                class="row mt-3"
                                v-if="wallet_type === 'Bank Card'"
                              >
                                <form>
                                  <div class="col-md-12">
                                    <label for="inputName5" class="form-label"
                                      >BANK CARD NUMBER</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="inputName5"
                                      placeholder="1223495069"
                                      required
                                    />
                                  </div>
                                  <div class="col-md-12 mt-2">
                                    <label for="inputName5" class="form-label"
                                      >EXPIRATION DATE</label
                                    >
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="inputName5"
                                      required
                                    />
                                  </div>
                                  <div class="col-md-12 mt-3">
                                    <label
                                      for="inputPassword5"
                                      class="form-label"
                                      >CARD CVV</label
                                    >
                                    <input
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
                                      style="
                                        background-color: #fcb713;
                                        color: white;
                                      "
                                    >
                                      Add Bank wallet
                                    </button>
                                  </div>
                                </form>
                              </div>

                              <div class="row" v-else>
                                <form>
                                  <div class="col-md-12 mt-3">
                                    <label
                                      for="inputPassword5"
                                      class="form-label"
                                      >ISSUER/CARRIER</label
                                    >
                                    <select
                                      id="inputState"
                                      class="form-select"
                                      required
                                    >
                                      <option selected value="Tigo pesa">
                                        Tigo pesa
                                      </option>
                                      <option value="Mpesa">Mpesa</option>
                                      <option value="Airtel money">
                                        Airtel money
                                      </option>
                                      <option value="T-pesa">T-pesa</option>
                                      <option value="Halopesa">Halopesa</option>
                                    </select>
                                  </div>
                                  <div class="col-md-12 mt-2">
                                    <label for="inputName5" class="form-label"
                                      >PHONE NUMBER</label
                                    >
                                    <input
                                      type="text"
                                      placeholder="255712343214"
                                      class="form-control"
                                      id="inputName5"
                                      required
                                    />
                                  </div>
                                  <!-- <div class="col-md-12 mt-3">
                      <button
                        type="submit"
                        class="btn"
                        style="background-color: #fcb713; color: white"
                      >
                        Add Mobile wallet
                      </button>
                    </div> -->
                                </form>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade complete" id="complete">
                    <div class="row">
                      <div
                        class="
                          align-items-center
                          col-xxl-12
                          col-xl-12
                          col-lg-12
                          col-md-12
                          col-sm-12
                          col-xs-12
                          col-12
                        "
                      >
                        <h4>Terms and Conditions</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer vehicula facilisis tellus faucibus
                          vulputate. Proin maximus metus vel arcu ultrices
                          aliquet. Fusce ornare nec odio non imperdiet. Cras sit
                          amet aliquet mauris, id dapibus diam. Aenean sed felis
                          cursus, finibus lectus blandit, elementum nibh. Donec
                          velit neque, rutrum eget commodo interdum, cursus ut
                          erat. Pellentesque a nunc sed tellus bibendum
                          efficitur sit amet vel tortor. Vestibulum consectetur,
                          sapien id sodales facilisis, massa erat venenatis
                          massa, vitae imperdiet diam turpis at ex. Curabitur
                          egestas semper ipsum eget rutrum. Integer luctus
                          iaculis vehicula. Donec facilisis odio ac auctor
                          hendrerit. Vestibulum dui diam, convallis sed sem a,
                          mattis fermentum libero. Sed placerat nec urna a
                          sodales. Integer laoreet erat semper, molestie nibh
                          quis, tristique sapien. Etiam cursus eget elit quis
                          rhoncus. Integer faucibus, metus at elementum
                          fermentum, metus leo fermentum nulla, id euismod massa
                          risus hendrerit ante. Proin pretium tempor tellus eget
                          euismod. Mauris mollis finibus nibh, ac accumsan nibh
                          posuere in. Donec elit diam, pulvinar sit amet erat
                          condimentum, luctus consequat nisi. Sed vel ipsum at
                          tortor bibendum vestibulum. Donec non aliquet diam.
                          Mauris cursus ac risus sed congue. Curabitur mattis
                          ornare aliquam. Nulla non orci vel massa cursus
                          vestibulum vel quis quam. Proin eget ex vehicula,
                          blandit urna a, hendrerit orci. Orci varius natoque
                          penatibus et magnis dis parturient montes, nascetur
                          ridiculus mus. Vestibulum sed vestibulum metus, a
                          vulputate risus. Mauris porttitor metus vel purus
                          semper molestie. Donec rhoncus turpis ac eros
                          hendrerit varius. Morbi egestas vehicula lorem. Cras
                          aliquet porta vulputate. Sed nec elementum lectus, id
                          ultrices nisl. Aliquam dignissim, dui id rutrum
                          pretium, magna urna consectetur elit, ac blandit nulla
                          enim et lectus. Nullam scelerisque diam aliquam tellus
                          aliquet pharetra. Suspendisse imperdiet, enim ornare
                          ultrices blandit, mi mi egestas velit, et scelerisque
                          risus orci eget massa. Maecenas ultrices odio eget
                          pharetra scelerisque. Quisque porta lorem dapibus
                          feugiat varius. Morbi in scelerisque urna. Orci varius
                          natoque penatibus et magnis dis parturient montes,
                          nascetur ridiculus mus. Praesent dictum gravida metus
                          nec convallis. Fusce vitae tellus rutrum, tempor
                          tortor eu, porttitor nisi. Curabitur rutrum, est id
                          facilisis scelerisque, sem justo tempus neque, ut
                          varius felis est ut eros. Donec sit amet euismod
                          velit. Phasellus id porta lectus. Quisque dignissim
                          dolor ut libero pharetra posuere id eu odio. Quisque
                          pretium velit nec turpis malesuada imperdiet. Quisque
                          laoreet, justo eu pretium rutrum, turpis nulla
                          venenatis urna, non vestibulum risus augue quis velit.
                          Aenean elit metus, malesuada ac ex sed, vehicula
                          commodo massa.
                        </p>

                        <div class="d-flex flex-row align-items-center">
                          <input type="checkbox" class="form-input mx-2" />
                          <span
                            >I agree to the terms and conditions set by
                            <span
                              style="
                                margin-bottom: 0px !important;
                                font-weight: bold;
                                color: orange;
                              "
                              >Kikundi</span
                            ></span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Completion button -->
                    <div class="col-md-12 mt-3">
                      <button
                        type="submit"
                        class="btn"
                        style="background-color: #fcb713; color: white"
                      >
                        Complete Registration
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GroupsView",
  data() {
    return {
      // Group Data
      email: localStorage.getItem("email"),
      groupName: "",
      group_phone_number: "",
      group_name_abv: "",
      group_tin_number: "",
      what_describe_group: "",
      group_description: "",
      group_email: "",

      // Group Data - PDF files
      sera_ya_uwekezaji: "",
      sera_ya_mkopo: "",
      mashariti_ya_chama: "",
      sera_ya_majanga: "",

      wallet_type: "Bank Card",
    };
  },
  methods: {
    // Upload Sera ya uwekezaji
    seraYaUwekezaji(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onloadend = () => {
        this.sera_ya_uwekezaji = reader.result;
        // console.log("RESULT", reader.result);
        console.log(this.sera_ya_uwekezaji);
      };
      reader.readAsDataURL(file);
    },

    // Upload Sera ya mikopo
    seraYaMikopo(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onloadend = () => {
        this.sera_ya_mkopo = reader.result;
        // console.log("RESULT", reader.result);
        console.log(this.sera_ya_mkopo);
      };
      reader.readAsDataURL(file);
    },


    // Upload Masharti ya chama
    mashartiYaChama(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onloadend = () => {
        this.mashariti_ya_chama = reader.result;
        // console.log("RESULT", reader.result);
        console.log(this.mashariti_ya_chama);
      };
      reader.readAsDataURL(file);
    },

    // Upload Udhibiti ya majanga
    udhibitiYaMajanga(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onloadend = () => {
        this.sera_ya_majanga = reader.result;
        // console.log("RESULT", reader.result);
        // console.log(this.sera_ya_majanga);
      };
      reader.readAsDataURL(file);
    },

    addNewGroup(){
      this.$store.dispatch("createNewGroup",{
      email: localStorage.getItem("email"),
      groupName:this.groupName ,
      group_phone_number: this.group_phone_number,
      group_name_abv: this.group_name_abv,
      group_tin_number:this.group_tin_number,
      what_describe_group: this.what_describe_group,
      group_description: this.group_description,
      group_email:this.group_email,

      // Group Data - PDF files
      sera_ya_uwekezaji: this.sera_ya_uwekezaji,
      sera_ya_mkopo: this.seraYaMikopo,
      mashariti_ya_chama: this.mashariti_ya_chama,
      sera_ya_majanga: this.sera_ya_majanga,
      })
    }


  },
  mounted() {
    this.$store.dispatch("getUserSubscription", {
      email: this.savedEmail,
    });
  },
  beforeMount() {
    this.savedEmail = localStorage.getItem("email");
    this.$store.dispatch("getAllGroups", {
      email: this.savedEmail,
    });
  },
  computed: {
    all_groups() {
      return this.$store.getters.all_groups;
    },

    all_groups_loader() {
      return this.$store.getters.all_groups_loader;
    },
    subscription_details() {
      return this.$store.getters.subscription_details;
    },
  },
};
</script>

<style scoped>
i {
  font-weight: bolder;
  font-size: 3em;
}
.float {
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 40px;
  right: 40px;
  background-color: #fcb713;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #fcb713;
}

.my-float {
  margin-top: 22px;
}
</style>