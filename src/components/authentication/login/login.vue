<template>
<div>
    <Theheader></Theheader>
    <div class="container body">
        <div class="container body">
            <div class="row justify-content-center">
                <div class="card mt-5 col-6">
                    <div class="card-title text-center pt-2">
                        <h4>Login Form</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-block btn-primary mb-2">Submit</button>
                            <b-link  :to="{name:'register'}" class="btn btn-block btn-outline-primary">Don't have an account. Sign up</b-link >
                        </form>
                    </div>
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
<!--    <Thefooter></Thefooter>-->
</div>
</template>
<script src="./login.js"></script>
<style>
    @import "login.css";
</style>