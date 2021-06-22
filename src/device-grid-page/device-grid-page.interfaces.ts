import { GridRowTypeBase } from "@csha-ui-comp-lib";

export interface DeviceGridData extends GridRowTypeBase {
  name: string;
  device: string;
  path: string;
  status: DeviceStatus;
}

export enum DeviceStatus {
  scheduled = "scheduled",
  available = "available"
}
