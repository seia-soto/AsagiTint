import {type FC, type PropsWithChildren} from 'react';

import {$container} from '../../styles/container.css';
import {$fixedSide, $fixedSideDirector, $side, $sideItem, $sideItemActive, $sideItemGroup} from '../../styles/navigation/side.css';
import {$compose} from '../../styles/theme/utils';

export const SideDirector: FC<PropsWithChildren> = ({children}) => (
	<div className={$compose($container, $fixedSideDirector)}>
		{children}
	</div>
);

export const Side: FC<PropsWithChildren> = ({children}) => (
	<section className={$fixedSide}>
		<nav className={$side}>
			<ul className={$sideItemGroup}>
				{children}
			</ul>
		</nav>
	</section>
);

export const SideItem: FC<PropsWithChildren<{isActive?: boolean}>> = ({children, isActive = false}) => (
	<li className={isActive ? $sideItemActive : $sideItem}>{children}</li>
);
