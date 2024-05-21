import { useEffect, useState } from 'react';

import styles from './Projects.module.css';
import Wrapper from '../layout/Wrapper';
import ProjectBox from './ProjectBox';
import Link from '../UI/Link';

type Props = {
	onLoad: (status: boolean) => void;
};

const Projects: React.FC<Props> = (props) => {
	const [data, setData] = useState<null | Project[]>(null);

	useEffect(() => {
		fetychData();
	}, []);

	const fetychData = async () => {
		props.onLoad(true);
		const response = await fetch('https://portfoliov2-b0eed-default-rtdb.firebaseio.com/cheapData.json');
		const data: Project[] = await response.json();
		setData(data);
		props.onLoad(false);
	};

	return (
		<section className={styles.projects}>
			<Wrapper>
				<div className={styles.projects__heading}>
					<h2>Projects</h2>
					<Link href='#contact'>contact me</Link>
				</div>
				<div className={styles.projects__boxes}>
					{data &&
						data.map((data, index) => (
							<ProjectBox
								key={index}
								index={index}
								title={data.title}
								liveUrl={data.liveUrl}
								codeUrl={data.codeUrl}
								img={data.img}
								tech={data.tech}
							/>
						))}
				</div>
			</Wrapper>
		</section>
	);
};

export default Projects;
