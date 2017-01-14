angular
        .module('app')
        .component('detail', {
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
