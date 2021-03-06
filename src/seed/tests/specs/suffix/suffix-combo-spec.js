describe("mod with suffix", function () {
    var S = KISSY;

    it("can load mod with a suffix when combo loader", function () {
        var combine = S.config("combine"), ret = 0;

        S.config({
            packages:{
                suffix:{
                    base:"../specs/"
                }
            },
            modules:{
                "suffix/a.tpl":{
                    requires:["./a.tpl.css"]
                }
            },
            map:[
                [/\?t=.+$/, ""]
            ]
        });

        S.all("<div id='suffix-test'></div>").appendTo("body");

        S.use("suffix/a.tpl", function (S, A) {
            expect(A).toBe(1);
            expect(S.all("#suffix-test").css("font-size")).toBe("77px");
            ret = 1;
        });

        waitsFor(function () {
            return ret;
        });

        runs(function(){
            S.config("map").length = 0;
        });

    });

});