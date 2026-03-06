import { api } from "../api/books";

export const query = {

    server: {
        bookCover: {
            get: async () => {
                const res = await api.bookCover.get();
                return res;
            },
        }
    }
}
