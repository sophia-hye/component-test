export namespace TableBodyType {
  export type Data = {
    rowIndex: number;
    wellId: string;
    sampleId: string;
    result: string;
    wellType: WellType;
    targetResult: string[];
    comment: string;
  };

  export type DataThrombosis = Omit<Data, 'result'> & {
    result: SevenStrings | string;
  };

  export type TableBodyData = Data | DataThrombosis;

  type targetResultInfo = {
    channelIndex: ChannelNumberType;
    targetName: string;
    targetResult: string;
  };

  export type TableBodyDataMerge = Omit<Data, 'wellId' | 'targetResult'> & {
    mergedWellInfo: {
      [key in WellId]?: targetResultInfo[];
    };
  };
}

export default TableBodyType;
