<template>
	<div class="container">

  	<form class="well form-horizontal" action=" " method="post"  id="contact_form">
			<legend>Sign Up!</legend>
			<div class="form-group">
				<label class="col-md-4 control-label">Username</label>  
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<input  name="username" placeholder="Username" class="form-control"  type="text" v-model="username">
					</div>
				</div>
			</div>
			<!-- Text input-->
			<div class="form-group">
				<label class="col-md-4 control-label" >Password</label> 
				<div class="col-md-4 inputGroupContainer">
					<div class="input-group">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<input name="password" placeholder="Password" class="form-control"  type="password" v-model="password">
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-md-4 control-label"></label>
				<div class="col-md-4">
					<button type="submit" class="btn btn-warning" v-on:click.prevent='signup'>Join! <span class="glyphicon glyphicon-send"></span></button>
				</div>
			</div>
		</form>
	</div>
</template> 

