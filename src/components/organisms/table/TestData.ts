type ChannelTest = {
  channelIndex: ChannelNumberType;
  name: string;
  colSpan: number;
  targetInfo: {
    name: string;
    unit: string;
  }[];
};

const data: ChannelTest[] = [
  {
    channelIndex: 1,
    name: 'FAM',
    colSpan: 1,
    targetInfo: [
      {
        name: 'table header2',
        unit: 'Copies/ul',
      },
    ],
  },
  {
    channelIndex: 2,
    name: 'HEX',
    colSpan: 1,
    targetInfo: [
      {
        name: 'table header2',
        unit: 'Copies/ul',
      },
    ],
  },
  {
    channelIndex: 3,
    name: 'Cal Red 610',
    colSpan: 1,
    targetInfo: [
      {
        name: 'table header2',
        unit: 'Copies/ul',
      },
    ],
  },
  {
    channelIndex: 4,
    name: 'Quasar 670',
    colSpan: 1,
    targetInfo: [
      {
        name: 'table header2',
        unit: 'Copies/ul',
      },
    ],
  },
  {
    channelIndex: 5,
    name: 'Quasar 705',
    colSpan: 1,
    targetInfo: [
      {
        name: 'table header2',
        unit: 'Copies/ul',
      },
    ],
  },
];

export default data;
