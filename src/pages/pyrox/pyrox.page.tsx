import {type FC, useState} from 'react';

import {$inlineContentContainer} from '../../styles/container.css';
import {MaterialSymbolsCheckBox, MaterialSymbolsCheckBoxOutlineBlank, MaterialSymbolsKeyboardArrowDown} from '../../styles/icons/icons';
import {$input} from '../../styles/input.css';
import {$listTransparent} from '../../styles/list.css';
import {type PageProperties} from '../_types';
import {$event, $eventActionGroup, $eventActionItem, $eventBody, $eventCheckboxIcon, $eventDropdownIcon, $eventFooter, $eventIconShell, $eventShell} from './components/event.css';

export const pyroxPageProperties: PageProperties = {
	isActive(url) {
		return url.startsWith('/pyrox');
	},
};

const List: FC = () => {
	const [isDropdownActive, setDropdownActive] = useState(false);

	const updateDropdownState = () => {
		setDropdownActive(value => !value);
	};

	return (
		<li className={$listTransparent}>
			<section className={$event}>
				<section className={$eventActionGroup}>
					<label className={$eventIconShell}>
						<input className={$eventActionItem} type='checkbox' />
						<MaterialSymbolsCheckBoxOutlineBlank className={$eventCheckboxIcon} />
						<MaterialSymbolsCheckBox className={$eventCheckboxIcon} data-active />
					</label>
					<label className={$eventIconShell}>
						<input className={$eventActionItem} data-dropdown onChange={updateDropdownState} type='checkbox' />
						<MaterialSymbolsKeyboardArrowDown className={$eventDropdownIcon} />
					</label>
				</section>
				<section>
					대충 이벤트 이름
				</section>
				<section className={$eventFooter}>
					총 청휘석 n개
				</section>
			</section>
			<article className={$eventBody} data-active={isDropdownActive}>
				숨겨진 영역.
			</article>
		</li>
	);
};

export const PyroxPage: FC = () => (
	<>
		<section className={$inlineContentContainer}>
			<label>
				<input className={$input} placeholder='현재 청휘석' type='number' />
			</label>
		</section>
		<ol className={$eventShell}>
			<List />
		</ol>
	</>
);
