"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DirectionTest;
var components_1 = require("../components");
var D = require("../data");
function DirectionTest() {
    var boxes = D.range(1, 9 + 1).map(function (number) {
        return (<p key={number} calssName={"border-2 border-blue-300 p-1 mt-1 ml-1"}>
			{number}
		</p>);
    });
    return (<section className="mt-4">
    <components_1.Title>DirectionTest</components_1.Title>
	<components_1.Div className="flex flex-row mt-4">
	  <components_1.Div className="mr-2">
	    <components_1.Subtitle>flex-row</components_1.Subtitle>
	    <components_1.Div className="flex flex-row p-4">{boxes}</components_1.Div>
	  </components_1.Div>
	  <components_1.Div className="mr-2">
	    <components_1.Subtitle>flex-row-reverse</components_1.Subtitle>
	    <components_1.Div className="flex flex-row-reverse p-4">{boxes}</components_1.Div>
	  </components_1.Div>
	  <components_1.Div className="mr-2">
	    <components_1.Subtitle>flex-col</components_1.Subtitle>
	    <components_1.Div className="flex flex-col p-4">{boxes}</components_1.Div>
	  </components_1.Div>
	  <components_1.Div className="mr-2">
	    <components_1.Subtitle>flex-col-reverse</components_1.Subtitle>
	    <components_1.Div className="flex flex-col-reverse p-4">{boxes}</components_1.Div>
	  </components_1.Div>
	</components_1.Div>
  </section>);
}
