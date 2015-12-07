require({
    bundles: {
        'main': ['util', 'main'],
        'second': ['other'],
        'third': ['third']
    }
}, ['.', 'other', 'third'], function (util, other, third) {

    require(['../dataMain/baseUrl/src/main'], function (main) {
        doh.register(
            'bundles',
            [
                function bundles(t){
                    t.is('util', util.name);
                    t.is('other', other.name);
                    t.is('third', third.name);
                    t.is('main', main.name);
                }
            ]
        );
        doh.run();
    });
});
