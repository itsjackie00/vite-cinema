<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="#">Cinema Bianca</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:5174/">Home</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:5174/screening"> proiezioni</a>
        </li>  
      </ul>
      <form class="d-flex" role="search">
        <a href="http://127.0.0.1:8000/login"><button class="btn btn-outline-success" type="submit">admin</button></a>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
header{
  height: 90px;
}

</style>