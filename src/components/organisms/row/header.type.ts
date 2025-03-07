export namespace TableHeaderType {
  export type ChannelInfo = {
    channelIndex: ChannelNumberType;
    channelName: string;
    colSpan: number;
  };

  export type TargetInfo = {
    channelIndex: ChannelNumberType;
    targetName: string;
    targetUnit?: string;
  };

  export type TableHeader = {
    channelIndex: ChannelNumberType;
    channelName: string;
    colSpan: number;
    targetInfo?: {
      targetName: string;
      targetUnit?: string;
    }[];
  };

  export type ResultInfo = {
    geneName: string;
    targetName: string;
  };
}

export default TableHeaderType;
