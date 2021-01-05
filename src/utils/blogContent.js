export const getFirstParagraph = blogBody => {
	return blogBody.split('</p>')[0].substr(3);
};
