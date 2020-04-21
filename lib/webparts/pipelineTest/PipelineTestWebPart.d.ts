import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
export interface IPipelineTestWebPartProps {
    description: string;
}
export interface SPList {
    value: SPListItem[];
}
export interface SPListItem {
    Title: string;
    Type: string;
    Author: string;
}
export default class PipelineTestWebPart extends BaseClientSideWebPart<IPipelineTestWebPartProps> {
    private _getListData;
    private _renderList;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=PipelineTestWebPart.d.ts.map