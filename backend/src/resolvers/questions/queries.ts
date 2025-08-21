import Question from "../../models/Question.js";

export const questionQueries = {
    questions: async (_: any, { limit = 10, offset = 0} : { limit?: number, offset?: number }) => {
        try {
            return await Question.find()
                .sort({ createdAt: -1 })
                .skip(offset)
                .limit(limit);
        } catch (err) {
            console.error('Questions resolver error:', err);
            throw err;
        }
    },
};