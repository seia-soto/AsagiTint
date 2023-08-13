import {type FC, useState} from 'react';
import {useForm} from 'react-hook-form';

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

enum RaidPerIncome {
	Platinum = 1200,
	Gold = 1000,
	Silver = 800,
	Bronze = 600,
}

enum PvpDailyIncome {
	Top = 45,
	Second = 40,
	Top10 = 35,
	Top100 = 30,
	Top200 = 25,
	Top500 = 20,
	Top1k = 18,
	Top2k = 16,
	Top4k = 14,
	Top8k = 12,
	Top15k = 10,
}

type FormValues = {
	current: {
		pyroxenes: number;
	};
	packages: {
		biweeklyActivityPoints: {
			active: boolean;
			startDate: Date;
		};
		biweeklyPyroxenes: {
			active: boolean;
			startDate: Date;
		};
		monthlyPyroxenes: {
			active: boolean;
			startDate: Date;
		};
	};
	pvp: {
		active: boolean;
		dailyIncome: PvpDailyIncome;
	};
	raid: {
		active: boolean;
		perIncome: RaidPerIncome;
	};
};

export const PyroxPage: FC = () => {
	const [formData, setFormData] = useState();
	const {handleSubmit, register, setValue} = useForm<FormValues>({
		defaultValues: {
			pvp: {
				active: true,
				dailyIncome: 20,
			},
			raid: {
				active: true,
				perIncome: 1000,
			},
		},
	});

	return (
		<>
			<form onSubmit={handleSubmit(data => {
				console.log(data);
			})} className={$inlineContentContainer}>
				<OptionGroup>
					<OptionItem className={$fullWidth}>
						<input
							className={$compose($inputTransparent, $fullWidth)}
							inputMode='numeric'
							pattern='[0-9]*'
							placeholder='현재 청휘석 수량'
							type='number'
							{...register('current.pyroxenes', {valueAsNumber: true})}
						/>
					</OptionItem>
				</OptionGroup>
				<OptionGroup>
					<OptionItem>
						<Checkbox {...register('pvp.active')}>전술경연 대회</Checkbox>
						<Select {...register('pvp.dailyIncome', {valueAsNumber: true})}>
							<option value={PvpDailyIncome.Top}>1위</option>
							<option value={PvpDailyIncome.Second}>2위</option>
							<option value={PvpDailyIncome.Top10}>3~10위</option>
							<option value={PvpDailyIncome.Top100}>11~100위</option>
							<option value={PvpDailyIncome.Top200}>101~200위</option>
							<option value={PvpDailyIncome.Top500}>201~500위</option>
							<option value={PvpDailyIncome.Top1k}>501~1000위</option>
							<option value={PvpDailyIncome.Top2k}>1001~2000위</option>
							<option value={PvpDailyIncome.Top4k}>2001~4000위</option>
							<option value={PvpDailyIncome.Top8k}>4001~8000위</option>
							<option value={PvpDailyIncome.Top15k}>8001~15000위</option>
						</Select>
					</OptionItem>
					<OptionItem>
						<Checkbox {...register('raid.active')}>총력전</Checkbox>
						<Select {...register('raid.perIncome', {valueAsNumber: true})}>
							<option value={RaidPerIncome.Platinum}>플래티넘</option>
							<option value={RaidPerIncome.Gold}>골드</option>
							<option value={RaidPerIncome.Silver}>실버</option>
							<option value={RaidPerIncome.Bronze}>키보토스 불법 체류자</option>
						</Select>
					</OptionItem>
				</OptionGroup>
				<Divider />
				<OptionHeader>패키지</OptionHeader>
				<OptionGroup>
					<OptionItem>
						<Checkbox {...register('packages.monthlyPyroxenes.active')}>월간 청휘석 패키지</Checkbox>
						<input className={$compose($inputTransparent)} type='date' {...register('packages.monthlyPyroxenes.startDate', {valueAsDate: true})} />
					</OptionItem>
					<OptionItem>
						<Checkbox {...register('packages.biweeklyPyroxenes.active')}>하프 월간 청휘석 패키지</Checkbox>
						<input className={$compose($inputTransparent)} type='date' {...register('packages.biweeklyPyroxenes.startDate', {valueAsDate: true})} />
					</OptionItem>
					<OptionItem>
						<Checkbox {...register('packages.biweeklyActivityPoints.active')}>2주 AP 패키지</Checkbox>
						<input className={$compose($inputTransparent)} type='date' {...register('packages.biweeklyActivityPoints.startDate', {valueAsDate: true})} />
					</OptionItem>
				</OptionGroup>
			</form>
			<Divider />
			<EventList>
				<Event />
			</EventList>
		</>
	);
};
