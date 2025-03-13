import TableBodyType from '@/components/organisms/row/body.type';

const MergedData: TableBodyType.TableBodyDataMerge = {
  rowIndex: 1,
  sampleId: 'merged sample id',
  result: 'merged result',
  wellType: 'Sample',
  mergedWellInfo: {
    A01: [
      { channelIndex: 1, targetName: 'Target 1', targetResult: 'N/A' },
      { channelIndex: 2, targetName: 'Target 2', targetResult: '20.11' },
      { channelIndex: 3, targetName: 'Target 3', targetResult: 'N/A' },
      { channelIndex: 4, targetName: 'Target 4', targetResult: '32.45' },
      { channelIndex: 5, targetName: 'Target 5', targetResult: 'N/A' },
    ],
    E11: [
      { channelIndex: 1, targetName: 'Target 1', targetResult: '38.23' },
      { channelIndex: 2, targetName: 'Target 2', targetResult: 'N/A' },
      { channelIndex: 3, targetName: 'Target 3', targetResult: 'N/A' },
      { channelIndex: 4, targetName: 'Target 4', targetResult: 'N/A' },
      { channelIndex: 5, targetName: 'Target 5', targetResult: 'N/A' },
    ],
    H07: [
      { channelIndex: 1, targetName: 'Target 1', targetResult: 'N/A' },
      { channelIndex: 2, targetName: 'Target 2', targetResult: 'N/A' },
      { channelIndex: 3, targetName: 'Target 3', targetResult: 'N/A' },
      { channelIndex: 4, targetName: 'Target 4', targetResult: 'N/A' },
      { channelIndex: 5, targetName: 'Target 5', targetResult: '40.26' },
    ],
  },
  comment: 'merged comment',
};

export default MergedData;
