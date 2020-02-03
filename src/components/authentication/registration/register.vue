<template>
<div>
    <Theheader></Theheader>
    <div class="container body">
        <div class="row justify-content-center">
            <div class="card mt-5 col-6">
            <div class="card-title text-center pt-2">
                <h4>Registration Form</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstName">Firstname</label>
                            <input type="text" class="form-control" v-model="firstname" id="firstName">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastName">Lastname</label>
                            <input type="text" class="form-control" v-model="lastname" id="lastName">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" v-model="password" id="inputPassword4">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress2">Address</label>
                        <input type="text" class="form-control" id="inputAddress2" v-model="address" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" v-model="city" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" v-model="state" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" v-model="zip" id="inputZip">
                        </div>
                    </div>
                    <div class="form-group">

                            <div>
                                <b-form-checkbox
                                        id="checkbox-1"
                                        v-model="status"
                                        name="checkbox-1"
                                        value="true"
                                        unchecked-value="false"
                                >
                                    I accept the terms and condition
                                </b-form-checkbox>

                            </div>

<!--                        {{status}}-->
                    </div>
                    <button type="submit" disabled class="btn btn-outline-primary btn-block" v-if="status === 'false'">Sign in</button>
                    <button type="submit" class="btn btn-outline-primary btn-block" v-if="status === 'true'">Sign in</button>
                    <b-link class="btn btn-block btn-outline-primary" :to="{name:'login'}">Already have an account. Sign in</b-link>
                </form>
            </div>
<!--            <div class="card-footer">User Form</div>-->
        </div>
        </div>
    </div>
<!--    <Thefooter></Thefooter>-->
</div>
</template>
<script src="./register.js"></script>

<style>
    @import "register.css";
</style>