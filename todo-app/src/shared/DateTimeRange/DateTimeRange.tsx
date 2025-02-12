import { DateTimePicker } from '@mui/x-date-pickers'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
interface IDateTime {
  title: string
  currentValue: string
  classNames?: string
  changeTimeValue: (value: string | undefined) => void
}
export default function DateTimeRange({ currentValue, title, changeTimeValue, classNames }: IDateTime) {
  return (
    <div className={classNames}>
      <DemoContainer
        components={[
          'DateTimePicker'
        ]}

      >
        <DemoItem label={title} component="DateTimePicker">
          <DateTimePicker
            value={dayjs(currentValue)}
            onChange={(newValue) => {
              changeTimeValue(newValue?.format('YYYY-MM-DDTHH:mm'))
            }}
          />
        </DemoItem>
      </DemoContainer>
    </div>
  )
}