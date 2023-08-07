import {type FC} from 'react';

import {type PageProperties} from './_types';

export const indexPageProperties: PageProperties = {
	isActive(url) {
		return url === '/';
	},
};

export const IndexPage: FC = () => (
	<p>서비스 방향성 없음.</p>
);
