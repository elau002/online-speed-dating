<template>
  <div>
    <h1>Profile Update</h1>
      <div>
        <form class='profile-form'>
          <div>
            <input name='name' placeholder='Enter name' type='text' v-model='name'>
          </div>
          <div>
            <input name='age' placeholder='age' type='number' v-model='age'>
          </div>
          <div>
            <input name='gender' placeholder='Gender' type='text' v-model='gender'>
          </div>
          <div>
            <input name='location' placeholder='Where Are You?' type='text' v-model='location'>
          </div>
          <div>
            <input name='profileImg' placeholder='Upload a photo' type='text' v-model='profileImg'>
          </div>
          <div>
            <input maxlength='200' name='userinfo' placeholder='Tell Us about yourself' type='text' v-model='userinfo'>
          </div>       
        </form> 
	  <button v-on:click='setUserInfo'>Save User Info</button>
    </div>
  </div>
</template>