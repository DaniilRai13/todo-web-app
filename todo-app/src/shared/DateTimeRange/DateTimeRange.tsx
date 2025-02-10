import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers';
interface IDateTime {
  title: string
  currentValue: string
  changeTimeValue: (value: string | undefined) => void
}
export default function DateTimeRange({ currentValue, title, changeTimeValue }: IDateTime) {
  const [value, setValue] = useState<Dayjs | null>(dayjs(currentValue));

  return (
    <DemoContainer
      components={[
        'DateTimePicker'
      ]}
    >
      <DemoItem label={title} component="DateTimePicker">
        <DateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            changeTimeValue(newValue?.format('YYYY-MM-DDTHH:mm'))
          }}
        />
      </DemoItem>
    </DemoContainer>
  );
}