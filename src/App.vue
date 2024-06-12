<template>
    <div id="app">
      <h1>{{ greeting }}</h1>
      <p>This is a simple Vue.js app!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: 'Hello, Vue.js!'
      };
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  </style>
  