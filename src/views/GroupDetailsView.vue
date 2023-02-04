<template>
  <div class="container">
    <div class="row">
      <h6 style="color: grey">Groups / Details</h6>
    </div>
    <div class="row">
      <section class="section dashboard">
        <div class="row">
          <!-- Left side columns -->
          <div class="col-lg-8">
            <div class="row">
              <!-- Sales Card -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"
                      ><i class="bi bi-three-dots"></i
                    ></a>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end dropdown-menu-arrow
                      "
                    >
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Number of Groups</h5>

                    <div class="d-flex align-items-center">
                      <div
                        class="
                          card-icon
                          rounded-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                      >
                        <i class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>145</h6>
                        <span class="text-success small pt-1 fw-bold">12%</span>
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Sales Card -->

              <!-- Revenue Card -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"
                      ><i class="bi bi-three-dots"></i
                    ></a>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end dropdown-menu-arrow
                      "
                    >
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Number of Users <span>| Active</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div
                        class="
                          card-icon
                          rounded-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                      >
                        <i class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>2900</h6>
                        <span class="text-success small pt-1 fw-bold">8%</span>
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Revenue Card -->

              <!-- Customers Card -->
              <div class="col-xxl-4 col-xl-12">
                <div class="card info-card customers-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"
                      ><i class="bi bi-three-dots"></i
                    ></a>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end dropdown-menu-arrow
                      "
                    >
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Number of Users <span>| Inactive</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div
                        class="
                          card-icon
                          rounded-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                      >
                        <i class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>1244</h6>
                        <span class="text-danger small pt-1 fw-bold">12%</span>
                        <span class="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Customers Card -->

              <!-- Reports -->
              <div class="col-12">
                <div class="card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"
                      ><i class="bi bi-three-dots"></i
                    ></a>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end dropdown-menu-arrow
                      "
                    >
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Reports <span>/Today</span></h5>

                    <!-- Line Chart -->
                    <div id="reportsChart"></div>

                    <!-- End Line Chart -->
                  </div>
                </div>
              </div>
              <!-- End Reports -->

              <!-- Recent Sales -->
              <div class="col-12">
                <div class="card recent-sales overflow-auto">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"
                      ><i class="bi bi-three-dots"></i
                    ></a>
                    <ul
                      class="
                        dropdown-menu dropdown-menu-end dropdown-menu-arrow
                      "
                    >
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      All Users <span>| Active members</span>
                    </h5>

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
                        <div class="dataTable-dropdown">
                          <select id="inputState" class="form-select">
                            <option selected>10</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>25</option>
                          </select>
                        </div>
                        <span>
                          <p style="padding-top: 10px">entries per page</p>
                        </span>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add-group-member"
                          ><span
                            class="badge"
                            style="
                              font-size: 16px;
                              background-color: #28e288;
                              margin: 10px;
                            "
                            >Add New Member</span
                          ></a
                        >

                        <div class="dataTable-search">
                          <div class="input-group rounded">
                            <input
                              type="search"
                              class="form-control rounded"
                              placeholder="Search"
                              aria-label="Search"
                              aria-describedby="search-addon"
                            />
                            <span
                              class="input-group-text border-0"
                              id="search-addon"
                            >
                              <i class="bi bi-search"></i>
                            </span>
                          </div>
                        </div>
                      </div>
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
                                style="width: 16.6799%"
                              >
                                <a href="#" class="dataTable-sorter"
                                  >Full Name</a
                                >
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                style="width: 12.4702%"
                              >
                                <a href="#" class="dataTable-sorter"
                                  >Total Share</a
                                >
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                style="width: 12.5496%"
                              >
                                <a href="#" class="dataTable-sorter"
                                  >Total Loans</a
                                >
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                style="width: 13.1056%"
                              >
                                <a href="#" class="dataTable-sorter"
                                  >Total Saving</a
                                >
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                style="width: 13.1056%"
                              >
                                <a href="#" class="dataTable-sorter">Status</a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                style="width: 12.8674%"
                              >
                                <a href="#" class="dataTable-sorter">Role</a>
                              </th>
                              <th
                                scope="col"
                                data-sortable=""
                                style="width: 11.5965%"
                              >
                                <a href="#" class="dataTable-sorter">Delete</a>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #28e288;
                                    "
                                    >Active</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #fcb713;
                                    "
                                    >Admin</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Delete</span
                                  ></a
                                >
                              </td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #28e288;
                                    "
                                    >Active</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #fcb713;
                                    "
                                    >Admin</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Delete</span
                                  ></a
                                >
                              </td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Inactive</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #fcb713;
                                    "
                                    >User</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Delete</span
                                  ></a
                                >
                              </td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #28e288;
                                    "
                                    >Active</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #fcb713;
                                    "
                                    >User</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Delete</span
                                  ></a
                                >
                              </td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="#">#2457</a></th>
                              <td>Brandon Jacob</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td style="font-weight: 600">100,000,000</td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Inactive</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #fcb713;
                                    "
                                    >Finance</span
                                  ></a
                                >
                              </td>
                              <td>
                                <a href=""
                                  ><span
                                    class="badge"
                                    style="
                                      font-size: 16px;
                                      background-color: #f53c3c;
                                    "
                                    >Delete</span
                                  ></a
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="dataTable-bottom">
                        <div class="dataTable-info">
                          Showing 1 to 5 of 5 entries
                        </div>
                        <nav aria-label="...">
                          <ul class="pagination">
                            <li class="page-item disabled">
                              <a
                                class="page-link"
                                href="#"
                                tabindex="-1"
                                aria-disabled="true"
                                >Previous</a
                              >
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item active" aria-current="page">
                              <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                        <!-- End Recent Sales -->

                        <!-- Top Selling -->
                        <!-- End Top Selling -->
                      </div>
                    </div>
                    <!-- End Left side columns -->

                    <!-- Right side columns -->
                    <div class="col-lg-4">
                      <!-- Recent Activity -->
                      <!-- End Recent Activity -->

                      <!-- Budget Report -->
                      <!-- End Budget Report -->

                      <!-- Website Traffic -->
                      <!-- End Website Traffic -->

                      <!-- News & Updates Traffic -->
                      <!-- End News & Updates -->
                    </div>
                    <!-- End Right side columns -->
                  </div>
                </div>
              </div>
              <!-- End Recent Sales -->

              <!-- Top Selling -->
              <!-- End Top Selling -->
            </div>
          </div>
          <!-- End Left side columns -->

          <!-- Right side columns -->
          <div class="col-lg-4">
            <!-- Recent Activity -->
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Recent Activity <span>| Today</span></h5>

                <div class="activity">
                  <div class="activity-item d-flex">
                    <div class="activite-label">32 min</div>
                    <i
                      class="
                        bi bi-circle-fill
                        activity-badge
                        text-success
                        align-self-start
                      "
                    ></i>
                    <div class="activity-content">
                      Quia quae rerum
                      <a href="#" class="fw-bold text-dark"
                        >explicabo officiis</a
                      >
                      beatae
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">56 min</div>
                    <i
                      class="
                        bi bi-circle-fill
                        activity-badge
                        text-danger
                        align-self-start
                      "
                    ></i>
                    <div class="activity-content">
                      Voluptatem blanditiis blanditiis eveniet
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 hrs</div>
                    <i
                      class="
                        bi bi-circle-fill
                        activity-badge
                        text-primary
                        align-self-start
                      "
                    ></i>
                    <div class="activity-content">
                      Voluptates corrupti molestias voluptatem
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">1 day</div>
                    <i
                      class="
                        bi bi-circle-fill
                        activity-badge
                        text-info
                        align-self-start
                      "
                    ></i>
                    <div class="activity-content">
                      Tempore autem saepe
                      <a href="#" class="fw-bold text-dark"
                        >occaecati voluptatem</a
                      >
                      tempore
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 days</div>
                    <i
                      class="
                        bi bi-circle-fill
                        activity-badge
                        text-warning
                        align-self-start
                      "
                    ></i>
                    <div class="activity-content">
                      Est sit eum reiciendis exercitationem
                    </div>
                  </div>
                  <!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">4 weeks</div>
                    <i
                      class="
                        bi bi-circle-fill
                        activity-badge
                        text-muted
                        align-self-start
                      "
                    ></i>
                    <div class="activity-content">
                      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                    </div>
                  </div>
                  <!-- End activity item-->
                </div>
              </div>
            </div>
            <!-- End Recent Activity -->

            <!-- Budget Report -->
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body pb-0">
                <h5 class="card-title">
                  Budget Report <span>| This Month</span>
                </h5>

                <div
                  id="budgetChart"
                  style="min-height: 400px"
                  class="echart"
                ></div>
              </div>
            </div>
            <!-- End Budget Report -->

            <!-- Website Traffic -->
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <!-- <div class="card-body pb-0">
              <h5 class="card-title">Website Traffic <span>| Today</span></h5>

              <div id="trafficChart" style="min-height: 400px;" class="echart"></div>

           

            </div> -->
            </div>
            <!-- End Website Traffic -->

            <!-- News & Updates Traffic -->
            <!-- End News & Updates -->
          </div>
          <!-- End Right side columns -->
        </div>
      </section>
    </div>
    <div
      class="modal fade"
      id="add-group-member"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              class="modal-title fs-5"
              id="add-group-member"
              style="font-weight: bold"
            >
              Add group member
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row mb-3">
              <label for="fullName" class="col-md-4 col-lg-3 col-form-label"
                >Email</label
              >
              <div class="col-md-8 col-lg-9">
                <input
                  name="fullName"
                  type="text"
                  class="form-control"
                  id="fullName"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="fullName" class="col-md-4 col-lg-3 col-form-label"
                >Phone number</label
              >
              <div class="col-md-8 col-lg-9">
                <input
                  name="fullName"
                  type="text"
                  class="form-control"
                  id="fullName"
                />
              </div>
            </div>
   <div class="col-md-12 mt-3">
                          <button
                            type="submit"
                            class="btn"
                            style="background-color: #fcb713; color: white"
                          >
                            Add member
                          </button>
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
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupDetailsView",
};
</script>

<style>
</style>