export interface DeviceGridData {
    selected: boolean
    name: string;
    device: string;
    path: string;
    status: DeviceStatus;
  }
  
  export enum DeviceStatus {
    scheduled = "scheduled",
    available = "available"
  }

  export enum DeviceGridCustomCallback {
    rowSelected = "rowSelected"
  }
  