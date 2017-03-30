module.exports = {
	babelrc: false,
	cacheDirectory: true,
	presets: [
		['latest', {loose: true, modules: false}],
		'stage-0',
		'react'
	],
	plugins: [
		[
			"import",
			{
				libraryName: "antd",
				style: "css"
			}
		],
		// 'react-hot-loader/babel',
		'transform-runtime',
		'babel-plugin-transform-react-constant-elements'
	]
};