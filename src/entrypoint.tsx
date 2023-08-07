import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {$container, $contentContainer} from './styles/container.css';
import {$fixedContentPusher, $fixedNavigation, $navigation, $navigationHeader, $navigationItem, $navigationItemGroup} from './styles/navigation/bar.css';
import {$fixedSide, $fixedSideContentPusher, $fixedSideDirector, $side, $sideItem, $sideItemActive, $sideItemGroup} from './styles/navigation/side.css';
import {$root, platformTheme} from './styles/theme/theme.css';
import {$compose} from './styles/theme/utils';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<div className={$root}>
				<section className={$fixedNavigation}>
					<nav className={$navigation}>
						<h1 className={$navigationHeader}>Asagi Tint</h1>
						<ul className={$navigationItemGroup}>
							<li className={$navigationItem}>설정</li>
						</ul>
					</nav>
				</section>
				<section className={$compose($fixedContentPusher, $container)}>
					<div className={$fixedSideDirector}>
						<section className={$fixedSide}>
							<nav className={$side}>
								<ul className={$sideItemGroup}>
									<li className={$sideItemActive}>청휘석 계산기</li>
									<li className={$sideItem}>예로니무스 힐량 계산기</li>
								</ul>
							</nav>
						</section>
					</div>
					<article className={$compose($fixedSideContentPusher, $contentContainer)} style={{height: '10000px'}}>
						본문 내용이 여기에 들어갑니다.
					</article>
				</section>
			</div>
		</React.StrictMode>,
	);
