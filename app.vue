<template>
  <div>
    <header>
      <h1>Japan Blogg NTIG T4-22</h1>

      <nav>
        <NuxtLink to="/"><p>HOME</p></NuxtLink>
        <NuxtLink to="/images"><p>IMAGES</p></NuxtLink>
        <NuxtLink to="/about"><p>ABOUT</p></NuxtLink>
      </nav>
    </header>

    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  align-self: center;
  margin-top: 1rem;
}

nav {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  background-color: #bc002d;
  margin: 1rem;
  width: 85%;
  border-radius: 5px;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  margin: 0.5rem;
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;
}

a:hover {
  background-color: #cf0030;
  border-radius: 5px;
}
</style>
