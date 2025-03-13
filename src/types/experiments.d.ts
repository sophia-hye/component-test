type ChannelNumberType = 1 | 2 | 3 | 4 | 5;

type WellType = 'Sample' | 'NC' | 'PC';

type Row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Col =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12';
type WellId = `${Row}${Col}`;

type FixedLengthArray<T extends unknown[], L extends number> = T & {
  length: L;
};
type SevenStrings = FixedLengthArray<string[], 7>;
