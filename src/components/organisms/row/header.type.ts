type ChannelIdx = { channelIndex: ChannelNumberType };

type Channel = {
  channelName: string;
  colSpan: number;
};

type Target = {
  targetName: string;
  targetUnit?: string;
  geneName?: string;
};

export namespace TableHeaderType {
  export type ChannelHeader = ChannelIdx & Channel;
  export type TargetHeader = ChannelIdx & Target;

  export type Thrombo = {
    geneName: string;
    targetName: string;
  };

  export type TableHeader = ChannelHeader & {
    targetInfo?: Target[];
  };

  export type ThromboHeader = ChannelIdx & Thrombo;
}

export default TableHeaderType;
