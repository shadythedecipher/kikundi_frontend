<template>
      <section class="section dashboard">
        <div class="row">
          <!-- Left side columns -->

          <!-- Left side columns -->
          <div class="col-lg-12">
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
                    <h5 class="card-title">Savings <span>| Today</span></h5>

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
                        <i class="bi bi-currency-dollar"></i>
                      </div>
                      <div class="ps-3">
                        <h6>100,000,000</h6>
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
                    <h5 class="card-title">Loans <span>| This Month</span></h5>

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
                        <i class="bi bi-currency-dollar"></i>
                      </div>
                      <div class="ps-3">
                        <h6>40,000,000</h6>
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
                    <h5 class="card-title">Shares <span>| This Year</span></h5>

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
                        <h6>30,000,000</h6>
                        <span class="text-danger small pt-1 fw-bold">12%</span>
                        <span class="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Customers Card -->
            </div>
          </div>
          <!-- End Left side columns -->

          <!-- Reports -->
          <div class="col-12">
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
                <h5 class="card-title">Reports <span>/Today</span></h5>

                <!-- Line Chart -->
                <div id="reportsChart"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="col-12">
        <div class="card recent-sales overflow-auto">
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
            <h5 class="card-title">All Groups <span>| Active Groups</span></h5>

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
                <span> <p style="padding-top: 10px">entries per page</p></span>

                <div class="dataTable-search">
                  <div class="input-group rounded">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="bi bi-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dataTable-container">
              <table class="table table-borderless datatable dataTable-table">
                <thead>
                  <tr>
                    <th scope="col" data-sortable="" style="width: 7.6251%">
                      <a href="#" class="dataTable-sorter">#</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 16.6799%">
                      <a href="#" class="dataTable-sorter">Group Name</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 12.4702%">
                      <a href="#" class="dataTable-sorter">Total Share</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 12.5496%">
                      <a href="#" class="dataTable-sorter">Total Loans</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 13.1056%">
                      <a href="#" class="dataTable-sorter">Total Saving</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 13.1056%">
                      <a href="#" class="dataTable-sorter">Loans</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 12.8674%">
                      <a href="#" class="dataTable-sorter">Savings</a>
                    </th>
                    <th scope="col" data-sortable="" style="width: 11.5965%">
                      <a href="#" class="dataTable-sorter">Shares</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>PSLA</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #f9d737"
                          >Request</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #fcb713"
                          >Pay</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #c4c4c4"
                          >Buy</span
                        ></a
                      >
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>MTAI</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #f9d737"
                          >Request</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #fcb713"
                          >Pay</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #c4c4c4"
                          >Buy</span
                        ></a
                      >
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>NATO</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #f9d737"
                          >Request</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #fcb713"
                          >Pay</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #c4c4c4"
                          >Buy</span
                        ></a
                      >
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>NSSA</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #f9d737"
                          >Request</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #fcb713"
                          >Pay</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #c4c4c4"
                          >Buy</span
                        ></a
                      >
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>WALE</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td style="font-weight: 600">100,000,000</td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #f9d737"
                          >Request</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #fcb713"
                          >Pay</span
                        ></a
                      >
                    </td>
                    <td>
                      <a href=""
                        ><span
                          class="badge"
                          style="font-size: 16px; background-color: #c4c4c4"
                          >Buy</span
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="dataTable-bottom">
        <div class="dataTable-info">Showing 1 to 5 of 5 entries</div>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Previous</a
              >
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
   

    <footer id="footer" class="footer">
      <div class="copyright">
        &copy; Copyright <strong><span>KikundiApp2023</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits"></div>
    </footer>

    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>


 
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
</style>