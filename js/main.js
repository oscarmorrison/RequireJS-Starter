requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.2.4.min'
    }
});

requirejs(
    ['jquery'],
    function($) {   
        $('body').append('hello world');
    }
);