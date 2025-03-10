type FixedLengthArray<T extends unknown[], L extends number> = T & {
  length: L;
};
type SevenStrings = FixedLengthArray<string[], 7>;

export namespace TableBodyType {
  export type WellType = 'Sample' | 'NC' | 'PC';

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
}

export default TableBodyType;
