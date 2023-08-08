import {type FC} from 'react';
import {Link, Route} from 'wouter';
import useLocation from 'wouter/use-location';

import {Navigation, NavigationItem, NavigationPusher} from './components/navigation/bar';
import {Side, SideDirector, SideItem} from './components/navigation/side';
import {IndexPage} from './pages/index.page';
import {PyroxPage, pyroxPageProperties} from './pages/pyrox/pyrox.page';
import {$contentContainer, $inlineContentContainer} from './styles/container.css';
import {$link} from './styles/link.css';
import {$fixedSideContentPusher} from './styles/navigation/side.css';
import {$root} from './styles/theme/theme.css';
import {$compose} from './styles/theme/utils';

export const Vendor: FC = () => {
	const [location] = useLocation();

	return (
		<div className={$root}>
			<Navigation title={<Link className={$link} to='/'>Asagi Tint</Link>}>
				<NavigationItem>설정</NavigationItem>
			</Navigation>
			<NavigationPusher>
				<SideDirector>
					<Side>
						<SideItem isActive={pyroxPageProperties.isActive(location)} link='/pyrox'>미래시 계획</SideItem>
					</Side>
				</SideDirector>
				<section className={$compose($fixedSideContentPusher, $contentContainer)}>
					<article className={$inlineContentContainer}>
						<Route component={IndexPage} path='/' />
						<Route component={PyroxPage} path='/pyrox' />
					</article>
				</section>
			</NavigationPusher>
		</div>
	);
};
