"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Basic;
var daisyui_1 = require("../../theme/daisyui");
function Basic() {
    return (<section className="mt-4">
            <h2 className="text-3xl font-bold text-center">ButtonTest Basic</h2>
            <div className="mt-4 flex justify-evenly">
                <button className="btn btn-primary">DAISYUI Button</button>
                <daisyui_1.Button className="btn btn-primary">Button</daisyui_1.Button>
            </div>
        </section>);
}
