import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as MuiSelect,
} from '@mui/material';

interface ISelect<T> {
	title: string;
	options: T[];
	value: T;
	classNames?: string;
	changeOptionValue: (option: T) => void;
}

const Select = <T,>({
	title,
	options,
	value,
	changeOptionValue,
	classNames,
}: ISelect<T>) => {
	return (
		<FormControl
			sx={{ m: 1, minWidth: 120 }}
			size='small'
			className={classNames}
		>
			<InputLabel id='demo-select-small-label'>{title}</InputLabel>
			<MuiSelect
				labelId='demo-select-small-label'
				id='demo-select-small'
				value={value}
				label={title}
				onChange={e => {
					changeOptionValue(e.target.value as T);
				}}
			>
				{options.map(option => (
					<MenuItem key={String(option)} value={String(option)}>
						{String(option)}
					</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	);
};

export default Select;
