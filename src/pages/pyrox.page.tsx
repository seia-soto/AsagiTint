import {type FC} from 'react';

import {type PageProperties} from './_types';

export const pyroxPageProperties: PageProperties = {
	isActive(url) {
		return url.startsWith('/pyrox');
	},
};

export const PyroxPage: FC = () => (
	<p>청휘석 및 미래시 계산</p>
);
