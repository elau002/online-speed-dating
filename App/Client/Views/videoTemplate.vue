<template>
<div>
<h1>Logged in as {{username}}</h1>
  <div v-html='videoOut'></div>{{videoOut}}
  <input v-model='myNumber'>
  <button v-on:click='makePhone(myNumber)'>login</button>
  <input type="number" v-model='yourNumber'>
  <button v-on:click='dial(yourNumber)'>call this user</button>
</div>
</template>             