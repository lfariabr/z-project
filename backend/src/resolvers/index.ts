import {questionQueries} from './questions/queries.js'

const resolvers = {
	Query: {
		health: () => 'ok',
		...questionQueries,
	},
};

export default resolvers;