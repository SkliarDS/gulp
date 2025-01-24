export const copy = () => {
	return app.gulp.src(app.path.src.files)
		.pipe(app.gulp.dest(app.path.build.files))
}

export const copyTxt = () => {
	return app.gulp.src(app.path.src.txt)
		.pipe(app.gulp.dest(app.path.build.txt))
}
export const copyIco = () => {
	return app.gulp.src(app.path.src.ico)
		.pipe(app.gulp.dest(app.path.build.ico))
}