import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {Navigation, NavigationItem, NavigationPusher} from './components/navigation/bar';
import {$container, $contentContainer} from './styles/container.css';
import {$fixedSide, $fixedSideContentPusher, $fixedSideDirector, $side, $sideItem, $sideItemActive, $sideItemGroup} from './styles/navigation/side.css';
import {$root} from './styles/theme/theme.css';
import {$compose} from './styles/theme/utils';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<div className={$root}>
				<Navigation title='Asagi Tint'>
					<NavigationItem isActive={false}>설정</NavigationItem>
				</Navigation>
				<NavigationPusher>
					<div className={$compose($container, $fixedSideDirector)}>
						<section className={$fixedSide}>
							<nav className={$side}>
								<ul className={$sideItemGroup}>
									<li className={$sideItemActive}>미래시 스케쥴러</li>
									<li className={$sideItem}>스탯 계산기</li>
								</ul>
							</nav>
						</section>
					</div>
					<article className={$compose($fixedSideContentPusher, $contentContainer)} style={{height: '10000px'}}>
						본문 내용이 여기에 들어갑니다.
					</article>
				</NavigationPusher>
			</div>
		</React.StrictMode>,
	);
