type CellTest = {
  rowIndex: number;
  wellId: string;
  sampleId: string;
  result: string;
  wellType: string;
  targetResult: string[];
  comment: string;
};

const cellDataList: CellTest[] = [
  {
    rowIndex: 1,
    wellId: 'A01',
    sampleId: 'A01 sample id',
    result: 'A01 result',
    wellType: 'Sample',
    targetResult: ['N/A', '23.89', 'N/A', 'N/A', 'N/A'],
    comment: 'A01 comment',
  },
  {
    rowIndex: 2,
    wellId: 'E11',
    sampleId: 'E11 sample id',
    result: 'E11 result',
    wellType: 'Sample',
    targetResult: ['N/A', '++', 'N/A', '+++', '18.92'],
    comment: 'E11 comment',
  },
  {
    rowIndex: 3,
    wellId: 'H07',
    sampleId: 'H07 sample id',
    result: 'H07 result',
    wellType: 'Sample',
    targetResult: ['+', '39.22', 'N/A', 'N/A', 'N/A'],
    comment: 'H07 comment',
  },
];

const cellData: CellTest = cellDataList[0];

export default cellData;
