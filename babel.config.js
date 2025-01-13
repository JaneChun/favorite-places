module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module:react-native-dotenv',
				{
					moduleName: '@env', // 임포트 시 사용할 모듈 이름
					path: '.env', // 기본 .env 파일 경로
					safe: false,
					allowUndefined: true,
				},
			],
		],
	};
};
