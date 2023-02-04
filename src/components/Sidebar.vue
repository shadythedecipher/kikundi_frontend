<template>
  <body>
    <!-- Sidebar section -->
    <aside
      id="sidebar"
      class="sidebar"
      style="border-radius: 50px; margin-bottom: 20px; margin-left: 20px"
    >
      <ul class="sidebar-nav" id="sidebar-nav">
        <li>
          <img
            src="../assets/img/logosidebar.png"
            alt=""
            style="height: 90px"
          />
        </li>

        <router-link to="/home">
          <li class="nav-item">
            <a class="nav-link">
              <i class="bi bi-grid"></i>
              <span>Home</span>
            </a>
          </li>
        </router-link>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-menu-button-wide"></i><span>My Loans</span>
          </a>
        </li>
        <!-- End Components Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-journal-text"></i><span>My Savings</span>
          </a>
        </li>
        <!-- End Forms Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-layout-text-window-reverse"></i
            ><span>My Shares</span>
          </a>
        </li>
        <!-- End Tables Nav -->
        <router-link to="/groups">
          <li class="nav-item">
            <a class="nav-link">
              <i class="bi bi-people-fill"></i><span>Groups</span>
            </a>
          </li>
        </router-link>

        <!-- End Charts Nav -->

        <li class="nav-item">
          <a class="nav-link collapsed" href="#">
            <i class="bi bi-people"></i>
            <span>Create Group</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#">
            <i class="bi bi-chat-dots"></i>
            <span>My Messages</span>
          </a>
        </li>

        <!-- End Icons Nav -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-bar-chart"></i><span>Switch Account</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i class="bi bi-circle"></i><span>Personal Account</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-circle"></i><span>PSLA Account</span>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link to="/settings">
            <a class="nav-link">
              <i class="bi bi-gear"></i><span>Settings</span>
            </a>
          </router-link>

          <ul
            id="icons-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="icons-bootstrap.html">
                <i class="bi bi-circle"></i><span>My Profile</span>
              </a>
            </li>
            <li>
              <a href="icons-remix.html">
                <i class="bi bi-circle"></i><span>Account Settings</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i class="bi bi-circle"></i><span>Need help ?</span>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="Login.html">
            <i class="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
          </a>
        </li>
        <!-- End Login Page Nav -->
      </ul>
    </aside>

    <!-- Chaning Routerview section -->
    <main id="main" class="main">
      <router-view />
    </main>
  </body>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navItemIcon {
  color: #f58634;
  cursor: pointer;
}
.navItemIcon:hover {
  color: white;
  transition: 0.2s ease-in;
}
.navItemIcon a.router-link-exact-active {
  color: white;
}
</style>