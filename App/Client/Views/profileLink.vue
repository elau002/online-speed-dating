<template>
<div>
  <div v-if='loggedIn'>
    <li>
    <p class="navbar-text">Welcome, {{username}} !!</p>
		<button v-on:click='logout'>Log Out</button>
    </li>
    <li><a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Profile</b> <span class="caret"></span></a>
      <ul class="dropdown-menu" role="menu">
        <li><router-link :to='{name: "profile", params: {id: username}}'><a>Home</a></router-link></li>
        <li><router-link :to='edit'><a>Update Profile</a></router-link></li>
      </ul>
    </li>
  </div>
  <div v-else>
    <li><p class="navbar-text">Already have an account?</p></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
		  <ul id="login-dp" class="dropdown-menu">
		    <li>
			  <div class="row">
			    <div class="col-md-12">
				  Login via
				<div class="social-buttons">
				  <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
				  <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
				</div>
                  or
                <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
				  <login></login>
				  <div class="checkbox">
				    <label>
				      <input type="checkbox"> keep me logged-in
				    </label>
				  </div>
				</form>
			  </div>
			  <div class="bottom text-center">
			  New here ?     
        <router-link to='/signup'><a href="#/signup"><b>Join Us</b></a></router-link>
			  </div>
			</div>
		  </li>
		</ul>
      </li>
  </div>
</div>
</template>

<style>

</style>