import SkillBox from './SkillBox';
import styles from './Skills.module.css';
import Wrapper from '../layout/Wrapper';

const SKILLS = [
	{ name: 'HTML', exp: 4 },
	{ name: 'CSS', exp: 4 },
	{ name: 'SASS', exp: 2.5 },
	{ name: 'JavaScript', exp: 3 },
	{ name: 'Next.js', exp: 0.5 },
	{ name: 'React', exp: 1.5 },
	{ name: 'ReactRouter', exp: 1.5 },
	{ name: 'ReactRedux', exp: 1.5 },
	{ name: 'TypeScript', exp: 1.5 },
	{ name: 'Bootstrap', exp: 1 },
	{ name: 'Accessibility', exp: 3 },
	{ name: 'GIT', exp: 1 },
	{ name: 'GULP', exp: 1 },
];

const Skills: React.FC = () => {
	return (
		<section className={styles.skills}>
			<Wrapper>
				<h2>Skills</h2>
				{SKILLS.map((skill, index) => (
					<SkillBox
						key={index}
						skill={skill.name}
						exp={skill.exp}
						index={index}
					/>
				))}
			</Wrapper>
		</section>
	);
};

export default Skills;
