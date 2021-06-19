import { Type } from "@angular/core";
import { GridCellRendererV1Component } from "../../grid-cell-renderer-v1/grid-cell-renderer-v1.component";

export interface GridV1ColumnConfig<RowType = any> {
    displayName: string;
    dataField: string;
    minWidth: number;
    columnType: GridV1ColumnType;
    customCellConfig? : GridV1CustomCellConfig<any,RowType>
    // todo add custom sorter
}

export interface GridV1CustomCellConfig<CellType = any, RowType = any> {
    cellComponent: Type<GridV1CustomCellComponentBase<CellType, RowType>>;
    callbackMap: {[key: string]: (...arg: any) => void} // to perform call back from custom cell component
}

export enum GridV1ColumnType {
    text = "text",
    customCellRenderer = "customCellRenderer"
    // todo - number, date etc.
}

/**
 * all custom cell renderer must impliment this interface
 */
export interface GridV1CustomCellComponentBase<CellType = any, RowType = any> {
    params: GridV1CustomCellParam<CellType, RowType>;
    refresh?(): void;
}

export interface GridV1CustomCellParam<CellType = any, RowType = any> {
    cellData: CellType,
    rowData: RowType,
    callbackMap: {[key: string]: (...arg: any) => void}
}

