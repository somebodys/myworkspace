define("one", {
    name: "one"
});

define("two", ["../domReady/one"], function (one) {
    return {
        name: "two",
        oneName: "one"
    };
});
