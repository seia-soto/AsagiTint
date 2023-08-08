import {type FC} from 'react';

import {IcTwotoneRemoveCircle, MaterialSymbolsCheckBoxOutline} from '../../styles/icons/icons';
import {type PageProperties} from '../_types';
import {$event, $eventActionGroup, $eventActionItem, $eventHeader, $eventHeading, $eventRail} from './components/event.css';

export const pyroxPageProperties: PageProperties = {
	isActive(url) {
		return url.startsWith('/pyrox');
	},
};

export const PyroxPage: FC = () => (
	<ol className={$eventRail}>
		<li className={$event}>
			<section className={$eventHeader}>
				<h3 className={$eventHeading}>아트라하시스 방주 점령전</h3>
				<ul className={$eventActionGroup}>
					<li className={$eventActionItem}>
						<MaterialSymbolsCheckBoxOutline fontSize='1.35em' />
						<span>비활성화</span>
					</li>
					<li className={$eventActionItem}>
						<IcTwotoneRemoveCircle fontSize='1.35em' />
						<span>제거</span>
					</li>
				</ul>
			</section>
		</li>
	</ol>
);
