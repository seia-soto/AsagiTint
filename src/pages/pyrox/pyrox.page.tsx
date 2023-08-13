import {type FC} from 'react';

import {Checkbox} from '../../components/input/checkbox';
import {Select} from '../../components/input/select';
import {Divider} from '../../components/layout/divider';
import {$inlineContentContainer} from '../../styles/container.css';
import {$inputTransparent} from '../../styles/input.css';
import {$compose} from '../../styles/theme/utils';
import {$fullWidth} from '../../styles/trivials.css';
import {type PageProperties} from '../_types';
import {Event, EventList} from './components/event';
import {OptionGroup, OptionHeader, OptionItem} from './components/options';

export const pyroxPageProperties: PageProperties = {
	isActive(url) {
		return url.startsWith('/pyrox');
	},
};

export const PyroxPage: FC = () => (
	<>
		<section className={$inlineContentContainer}>
			<OptionGroup>
				<OptionItem className={$fullWidth}>
					<input className={$compose($inputTransparent, $fullWidth)} inputMode='numeric' pattern='[0-9]*' placeholder='현재 청휘석 수량' type='number' />
				</OptionItem>
			</OptionGroup>
			<OptionGroup>
				<OptionItem>
					<Checkbox defaultChecked>전술경연 대회</Checkbox>
					<Select>
						<option value='1'>1위</option>
						<option value='2'>2위</option>
						<option value='3'>3~10위</option>
						<option value='11'>11~100위</option>
						<option value='101'>101~200위</option>
						<option value='201'>201~500위</option>
						<option value='501'>501~1000위</option>
						<option value='1001'>1001~2000위</option>
						<option value='2001'>2001~4000위</option>
						<option value='4001'>4001~8000위</option>
						<option value='8001'>8001~15000위</option>
					</Select>
				</OptionItem>
				<OptionItem>
					<Checkbox defaultChecked>총력전</Checkbox>
					<Select>
						<option value='platinum'>플래티넘</option>
						<option value='gold'>골드</option>
						<option value='silver'>실버</option>
						<option value='bronze'>키보토스 불법 체류자</option>
					</Select>
				</OptionItem>
			</OptionGroup>
			<Divider />
			<OptionHeader>패키지</OptionHeader>
			<OptionGroup>
				<OptionItem>
					<Checkbox>월간 청휘석 패키지</Checkbox>
					<input className={$compose($inputTransparent)} type='date' />
				</OptionItem>
				<OptionItem>
					<Checkbox>하프 월간 청휘석 패키지</Checkbox>
					<input className={$compose($inputTransparent)} type='date' />
				</OptionItem>
				<OptionItem>
					<Checkbox>2주 AP 패키지</Checkbox>
					<input className={$compose($inputTransparent)} type='date' />
				</OptionItem>
			</OptionGroup>
		</section>
		<Divider />
		<EventList>
			<Event />
		</EventList>
	</>
);
