var LetKeyword;
(function (LetKeyword) {
    var i = 100;
    console.log("Before Block, i is:", i);
    for (var i_1 = 0; i_1 < 5; i_1++) {
        console.log("Inside Block, i is:", i_1);
    }
    console.log("After Block, i is:", i);
})(LetKeyword || (LetKeyword = {}));
//# sourceMappingURL=3_scopes.js.map