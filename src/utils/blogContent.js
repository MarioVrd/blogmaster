export const getFirstParagraph = blogBody => {
	return blogBody.split('</p>')[0];
};
