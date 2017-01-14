angular
        .module('app')
        .component('list', {
            templateUrl: 'app/containers/list.html',
            controller: Home
        });

function Home() {
    $(document).ready(function () {
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
        });
    });
}


