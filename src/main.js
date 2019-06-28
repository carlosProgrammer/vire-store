import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/app.scss';
import {fbase} from "./firebase";
import VueFirestore from 'vue-firestore';
import Swal from 'sweetalert2';

Vue.use(VueFirestore, {
    key: 'id',
    enumerable: true
})

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

Vue.use(VueFirestore)

Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('Hero',require('./components/Hero.vue').default);
Vue.component('Products',require('./sections/Products.vue').default);


Vue.config.productionTip = false;

let app = '';

fbase.auth().onAuthStateChanged(function(user) {

    if(!app){
        new Vue({
            router,
            render: h => h(App)
        })
        .$mount("#app");
    }

});



/*!
 * Start Bootstrap - SB Admin 2 v4.0.6 (https://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */


/*Toggle Sidebar Function*/
! function(t) {
    "use strict";
    t("#sidebarToggle, #sidebarToggleTop").on("click", function(o) {
        t("body").toggleClass("sidebar-toggled"), t(".sidebar").toggleClass("toggled"), t(".sidebar").hasClass("toggled") && t(".sidebar .collapse").collapse("hide")
    }), t(window).resize(function() {
        t(window).width() < 768 && t(".sidebar .collapse").collapse("hide")
    }), t("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(o) {
        if (768 < t(window).width()) {
            var e = o.originalEvent,
                l = e.wheelDelta || -e.detail;
            this.scrollTop += 30 * (l < 0 ? 1 : -1), o.preventDefault()
        }
    }), t(document).on("scroll", function() {
        100 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn() : t(".scroll-to-top").fadeOut()
    }), t(document).on("click", "a.scroll-to-top", function(o) {
        var e = t(this);
        t("html, body").stop().animate({
            scrollTop: t(e.attr("href")).offset().top
        }, 1e3, "easeInOutExpo"), o.preventDefault()
    })
}(jQuery);
