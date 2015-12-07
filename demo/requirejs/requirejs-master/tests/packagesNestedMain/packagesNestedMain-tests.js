require({
    packages: [{
        name: 'foo',
        main: 'lib/index'
    }]
}, ['.'], function (foo) {

    doh.register(
        'packagesNestedMain',
        [
            function packagesNestedMain(t){
                t.is('foo', foo.name);
                t.is('bar', foo.bar.name);
            }
        ]
    );
    doh.run();
});
