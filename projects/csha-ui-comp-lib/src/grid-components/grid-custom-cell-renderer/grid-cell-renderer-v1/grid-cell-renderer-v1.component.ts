import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { GridV1CustomCellComponentBase, GridV1CustomCellParam } from '@csha-ui-comp-lib';

@Component({
  selector: 'csha-grid-cell-renderer-v1',
  template: ``
})
// todo write tests
// rename the compoent to grid-custom-cell-renderer
export class GridCellRendererV1Component<CellType = any, RowType = any> implements OnInit {

  @Input() cellData: CellType;
  @Input() rowData: RowType;
  @Input() customComponent: Type<GridV1CustomCellComponentBase<CellType, RowType>>;
  @Input() callbackMap: {[key: string]: (...arg: any) => void};

  private customCellComponentRef: ComponentRef<GridV1CustomCellComponentBase<CellType, RowType>>;
  private customCellComponentInstance: GridV1CustomCellComponentBase<CellType, RowType>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  public ngOnInit(): void {
    this.loadComponent();
  }

  private loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.customComponent);
    this.viewContainerRef.clear();
    this.customCellComponentRef = this.viewContainerRef.createComponent(componentFactory);
    this.customCellComponentInstance = this.customCellComponentRef.instance;
    this.setChildComponentParam();
    this.customCellComponentInstance?.refresh();
  }

  private setChildComponentParam(): void {
    this.customCellComponentInstance.params = {
      cellData: this.cellData,
      rowData: this.rowData,
      callbackMap: this.callbackMap
    };
  }

}
