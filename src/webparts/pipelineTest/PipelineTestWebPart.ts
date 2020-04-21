import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./PipelineTestWebPart.module.scss";
import * as strings from "PipelineTestWebPartStrings";

export interface IPipelineTestWebPartProps {
  description: string;
}

import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

export interface SPList {
  value: SPListItem[];
}

export interface SPListItem {
  Title: string;
  Type: string;
  Author: string;
}
export default class PipelineTestWebPart extends BaseClientSideWebPart<
  IPipelineTestWebPartProps
> {
  private _getListData(): Promise<SPList> {
    return this.context.spHttpClient
      .get(
        this.context.pageContext.web.absoluteUrl +
          "/_api/web/lists/GetByTitle('Inventory')/Items",
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  private _renderList(): void {
    this._getListData().then((response) => {
      let html: string =
        '<table border=1 width=100% style="border-collapse: collapse;">';
      html += "<th>Title</th> <th>Type</th> <th>Author</th>";
      response.value.forEach((item: SPListItem) => {
        html += `
      <tr>
      <td>${item.Title}</td>
      <td>${item.Type}</td>
      <td>${item.Author}</td>
      </tr>
      `;
      });
      html += "</table>";
      const listContainer: Element = this.domElement.querySelector(
        "spListContiner"
      );
      listContainer.innerHTML = html;
    });
  }
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.pipelineTest}">
    <div id="spListContainer" />
      </div>
      </div>`;
    this._renderList();
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
