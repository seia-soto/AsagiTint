import {type FC, type InputHTMLAttributes, type PropsWithChildren} from 'react';

import {MaterialSymbolsCheckBox, MaterialSymbolsCheckBoxOutlineBlank} from '../../styles/icons/icons';
import {$checkbox, $checkboxIcon, $checkboxInput, $checkboxLabel} from '../../styles/input.css';

export const Checkbox: FC<PropsWithChildren & InputHTMLAttributes<HTMLInputElement>> = ({children, defaultChecked = false, ...props}) => (
	<label className={$checkbox}>
		<input className={$checkboxInput} type='checkbox' {...props} />
		<MaterialSymbolsCheckBox className={$checkboxIcon} data-active />
		<MaterialSymbolsCheckBoxOutlineBlank className={$checkboxIcon} />
		{children && <section className={$checkboxLabel}>{children}</section>}
	</label>
);
