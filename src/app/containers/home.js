angular
        .module('app')
        .component('detail', {
            templateUrl: 'app/containers/home.html',
            controller: Home
        });

function Home() {
    $ctrl = this;
    $(document).ready(function () {
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
        });
    });
    
    
    
    $ctrl.user = JSON.parse(localStorage.getItem('user'));
    $ctrl.users = JSON.parse(localStorage.getItem('users'));
}
