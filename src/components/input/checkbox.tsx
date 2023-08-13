import {type InputHTMLAttributes, type PropsWithChildren, forwardRef} from 'react';

import {MaterialSymbolsCheckBox, MaterialSymbolsCheckBoxOutlineBlank} from '../../styles/icons/icons';
import {$checkbox, $checkboxIcon, $checkboxInput, $checkboxLabel} from '../../styles/input.css';

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren & InputHTMLAttributes<HTMLInputElement>>(({children, defaultChecked = false, ...props}, ref) => (
	<label className={$checkbox}>
		<input className={$checkboxInput} ref={ref} type='checkbox' {...props} />
		<MaterialSymbolsCheckBox className={$checkboxIcon} data-active />
		<MaterialSymbolsCheckBoxOutlineBlank className={$checkboxIcon} />
		{children && <span className={$checkboxLabel}>{children}</span>}
	</label>
));
