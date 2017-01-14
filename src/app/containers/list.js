angular
        .module('app')
        .component('list', {
            templateUrl: 'app/containers/list.html',
            controller: Home
        });

function Home($state) {
    
    
    var $ctrl = this;
    $ctrl.ordenar = true;
     $ctrl.users = [
    {
        id: 1,
        name: 'Sofia Gonzalez',
        age: 31,
        phone: '0987612345',
        email: 'sofiagonzalez@gmail.com',
        country: 'Argentina',
        city: 'Cordova',
        check : true,
        rol: 'Java Developer',
        currentSalary: 30000,
        expectedSalary: 35000,
        img: 'chica.png',
        experience: [
            {
              company: 'Canonical Inc.',
              startYear: 2013,
              finishYear: 2014,
              employment: 'Senior Java/J2EE Developer'
            } 
        ]
        
    },
    {
        id: 2,
        name: 'Paul Diaz',
        age: 24,
        phone: '3123124423',
        email: 'pauldiaz@gmail.com',
        country: 'Venezuela',
        city: 'Caracas',
        check : true,
        rol: 'PHP Develoer',
        currentSalary: 20000,
        expectedSalary: 30000,
        img: 'man2.png',
        experience: [
            {
              company: 'Apple.',
              startYear: 2012,
              finishYear: 2014,
              employment: 'Symfony Backend Developer'
            }, 
            {
              company: 'Microsoft.',
              startYear: 2010,
              finishYear: 2012,
              employment: 'Java Web Developer'
            } 
        ]
        
    },
    {
        id: 3,
        name: 'Kelvins Insua',
        age: 24,
        phone: '12312321382',
        check : true,
        email: 'kelvinsinsua@gmail.com',
        country: 'Colombia',
        city: 'Medellin',
        rol: 'IOS Developer',
        currentSalary: 40000,
        expectedSalary: 50000,
        img: 'man1.png',
        experience: [
            {
              company: 'Apple.',
              startYear: 2012,
              finishYear: 2014,
              employment: 'IOS developer'
            } 
        ]
        
    },
    {
        id: 4,
        name: 'Genaro Vegas',
        age: 28,
        check : true,
        phone: '12312321382',
        email: 'genarovegas@gmail.com',
        country: 'Chile',
        city: 'Santiago de Chile',
        rol: 'Ruby on Rails Developer',
        currentSalary: 70000,
        expectedSalary: 80000,
        img:'man.png',
        experience: [
            {
              company: 'Company Name.',
              startYear: 2015,
              finishYear: 'Actualidad',
              employment: 'IOS developer'
            } 
        ]
        
    }
    
    
    
]


    $(document).ready(function () {
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
        });
    });
    
    $ctrl.detail = function(user){
      localStorage.setItem("user",JSON.stringify(user));
      $state.go('detail');
    };
    
}


