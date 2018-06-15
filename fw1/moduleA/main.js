define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('../moduleB/messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('../moduleC/print');

    print(messages.getHello());
});