require({
    nodeIdCompat: true,
    baseUrl: 'node_modules'
}, ['.'], function (foo) {

    doh.register(
        'packagesNodeAdapter',
        [
            function packagesNodeAdapter(t){
                t.is('foo', foo.name);
                t.is('bar', foo.bar.name);
                t.is('baz', foo.baz.name);
                t.is('bar', foo.baz.bar.name);
            }
        ]
    );
    doh.run();
});
