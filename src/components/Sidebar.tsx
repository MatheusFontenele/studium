import { gql, useQuery } from "@apollo/client";
import { isPast } from "date-fns";
import { Lessons } from "./Lessons";

interface LessonsProps {
	availableAt: string;
	id: string;
	lessonType: string;
	slug: string;
	title: string;
}

interface GetLessonsQueryProps {
	lessons: LessonsProps[];
}

const GET_LESSON_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			lessonType
			availableAt
			title
			slug
		}
	}
`;
export function Sidebar() {
	const { data } = useQuery<GetLessonsQueryProps>(GET_LESSON_QUERY);

	return (
		<aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 hidden md:block">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Cronograma de Aulas
			</span>
			<div className="flex flex-col gap-8 ">
				{data?.lessons.map((lesson) => {
					return (
						<Lessons
							key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							type={lesson.lessonType}
							availableAt={new Date(lesson.availableAt)}
						/>
					);
				})}
			</div>
		</aside>
	);
}
