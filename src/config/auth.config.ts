export const authConfig = {
	jwt: {
		secret: "dev-secret",
		expiresIn: "7d",
	},
	bcrypt: {
		saltRounds: 10,
		pepper: "dev-pepper",
		salt: "dev-salt",
	},
};
