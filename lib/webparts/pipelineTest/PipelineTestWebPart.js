var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import styles from "./PipelineTestWebPart.module.scss";
import * as strings from "PipelineTestWebPartStrings";
import { SPHttpClient } from "@microsoft/sp-http";
var PipelineTestWebPart = /** @class */ (function (_super) {
    __extends(PipelineTestWebPart, _super);
    function PipelineTestWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PipelineTestWebPart.prototype._getListData = function () {
        return this.context.spHttpClient
            .get(this.context.pageContext.web.absoluteUrl +
            "/_api/web/lists/GetByTitle('Inventory')/Items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    PipelineTestWebPart.prototype._renderList = function () {
        var _this = this;
        this._getListData().then(function (response) {
            var html = '<table border=1 width=100% style="border-collapse: collapse;">';
            html += "<th>Title</th> <th>Type</th> <th>Author</th>";
            response.value.forEach(function (item) {
                html += "\n      <tr>\n      <td>" + item.Title + "</td>\n      <td>" + item.Type + "</td>\n      <td>" + item.Author + "</td>\n      </tr>\n      ";
            });
            html += "</table>";
            var listContainer = _this.domElement.querySelector("spListContiner");
            listContainer.innerHTML = html;
        });
    };
    PipelineTestWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.pipelineTest + "\">\n    <div id=\"spListContainer\" />\n      </div>\n      </div>";
        this._renderList();
    };
    Object.defineProperty(PipelineTestWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    PipelineTestWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return PipelineTestWebPart;
}(BaseClientSideWebPart));
export default PipelineTestWebPart;
//# sourceMappingURL=PipelineTestWebPart.js.map