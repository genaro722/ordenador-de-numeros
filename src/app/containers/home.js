angular
        .module('app')
        .component('home', {
            templateUrl: 'app/containers/home.html',
            controller: Home
        });

function Home() {
    $(document).ready(function () {
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
        });
    });
}
