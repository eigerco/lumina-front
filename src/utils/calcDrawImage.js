// Imports
// ------

// Exports
// -------
export const calcDrawImage = (ctx, image, left = 0.5, top = 0.5) => {
	const cWidth = ctx.canvas.width;
	const cHeight = ctx.canvas.height;
	const width = image.width;
	const height = image.height;
	const ratio = width / height;
	const cRatio = cWidth / cHeight;
	let resultHeight, resultWidth;

	if (ratio > cRatio) {
		resultHeight = cHeight;
		resultWidth = cHeight * ratio;
	} else {
		resultWidth = cWidth;
		resultHeight = cWidth / ratio;
	}

	ctx.drawImage(
		image,
		(cWidth - resultWidth) * left,
		(cHeight - resultHeight) * top,
		resultWidth,
		resultHeight
	);
};
