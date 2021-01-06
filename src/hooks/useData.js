import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (options = { id: null, category: null }) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: res } = await axios.get('/data/blogs.json');

				if (options.id != null) {
					const [blog] = res.filter(blog => blog.id === options.id);
					setData(blog);
				} else if (options.category != null) {
					const blogsInCategory = res.filter(
						blog => blog.category.toLowerCase() === options.category.toLowerCase()
					);
					setData(blogsInCategory);
				} else {
					setData(res);
				}
			} catch (err) {
				setError(err.message);
			}
		};

		fetchData();

		return () => {
			setData(null);
			setError(null);
		};
	}, []);

	return [data, error];
};

export default useData;
