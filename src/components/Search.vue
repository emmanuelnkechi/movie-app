<template>
  <div>
    <nav>
      <div class="nav-div d-flex">
        <img src="../assets/images/magnifying-glass.svg" alt />
        <input type="search" placeholder="Search Movies"/>
      </div>
    </nav>
  </div>
</template>


<style scoped>
nav {
  background: #313131;
  padding: 30px 15px;
  /* margin-bottom: 700px; */
}
.nav-div {
    background: #8a8686;
    border-radius: 30px;
}
input {
  width: 60%;
  border: none;
  padding: 10px 0;
  background: #8a8686;
}

::placeholder {
    color: #313131;
    /* font-weight: 30px; */
    font-size: 18px;
}
img {
  height: 30px;
  width: 60px;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 30px !important;
}
</style>