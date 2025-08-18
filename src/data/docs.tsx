import { compileData, Data, DataConstructor } from "@/lib/dataUtils";

const docsDataRaw: DataConstructor = {
	"Git Basics": {
		topics: {
			"Git Introduction": {
				content: (
				<div>
					Git is a distributed version control system that helps
					developers track changes in source code during software
					development. It allows multiple people to work on a project
					simultaneously without interfering with each other’s
					changes. Git records changes in a repository, enabling users
					to view history, revert to earlier versions, and collaborate
					through branching and merging. Each user has a complete copy
					of the project’s history, which increases reliability and
					flexibility.
				</div>
			),
				subtopics: {},
			},

			"Git Terminologies": {
				content: (
					<div>
					</div>
				),
				subtopics: {}
			}
		},
	},
};

const docsData: Data = compileData(docsDataRaw);
export default docsData;
