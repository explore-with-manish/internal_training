var dev1;

(function (ns) {
    function hello() {
        console.log("Hello from Dev1");
    }

    ns.hello = hello;
})(dev1 = dev1 || {})