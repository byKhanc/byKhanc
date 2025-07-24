"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JustifyCenterTest;
var components_1 = require("../components");
var D = require("../data");
function JustifyCenterTest() {
    var boxes = D.range(0, 5).map(function (index) { return (<components_1.Div key={index} className="bg-black w-4 m-1 h-4"/>); });
    return (<section className="mt-4 p-4">
            <components_1.Title>JustifyCenterTest</components_1.Title>
            <div className="mt-4">
            <components_1.Subtitle>flex flex-row justify-center</components_1.Subtitle>
                    <div className="flex flex-row justify-center h-40 bg-gray-300">{boxes}</div>
                </div>
                <div className="mt-4">
                    <components_1.Subtitle>flex flex-col justify-center</components_1.Subtitle>
                    <div className="flex flex-col justify-center h-40 bg-gray-300">{boxes}</div>
                </div>
        </section>);
}
