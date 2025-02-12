import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import { FC } from 'react'

interface ISelect {
  title: string
  options: string[]
  value: string
  classNames?: string
  changeOptionValue: (option: string) => void
}

const Select: FC<ISelect> = (({ title, options, value, changeOptionValue,classNames }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className={classNames}>
      <InputLabel id="demo-select-small-label">{title}</InputLabel>
      <MuiSelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={title}
        onChange={(e) => {
          changeOptionValue(e.target.value)
        }}
      >
        {options.map((option) =>
          <MenuItem key={option} value={option}>{option}</MenuItem>
        )}
      </MuiSelect>
    </FormControl>
  )
})

export default Select
