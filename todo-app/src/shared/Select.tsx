import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react'

interface ISelect {
  title: string
  options: string[]
  changeOptionValue: (option: string) => void
}

const Select: FC<ISelect> = (({ title, options, changeOptionValue }) => {
  const [optionValue, setOption] = useState(options[0]);
  console.log(optionValue)

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{title}</InputLabel>
      <MuiSelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={optionValue}
        label={title}
        onChange={(e) => {
          changeOptionValue(e.target.value)
          handleChange(e)
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
