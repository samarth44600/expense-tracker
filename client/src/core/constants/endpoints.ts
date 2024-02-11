const baseURL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;

const endpoints = {
    expenses: {
        all: `${baseURL}/expenses`,
        today: `${baseURL}/expenses/today`,
    },
    category: {
        all: `${baseURL}/category`,
    },

}

export default endpoints