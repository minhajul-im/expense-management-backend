export interface SanitizeOptionsType {
	trimStrings?: boolean;
	removeEmptyStrings?: boolean;
	filterNullInArrays?: boolean;
}

export function sanitizeObjectFn<T = Record<string, any>>(
	body: T,
	options: SanitizeOptionsType = {}
): any {
	const { trimStrings = true, removeEmptyStrings = false, filterNullInArrays = false } = options;

	if (body == null) {
		return undefined;
	}

	if (typeof body === "string") {
		let str = trimStrings ? body.trim() : body;
		if (removeEmptyStrings && str === "") {
			return undefined;
		}
		return str;
	}

	if (Array.isArray(body)) {
		const sanitized = body
			?.map((item) => sanitizeObjectFn(item, options))
			?.map((item) => (item === undefined ? null : item))
			?.filter((item) => {
				if (filterNullInArrays) {
					return item != null;
				}
				return true;
			});

		return sanitized;
	}

	if (typeof body === "object" && body !== null) {
		if (Object.getPrototypeOf(body) !== Object.prototype) {
			return body;
		}
	}

	if (typeof body === "object" && body !== null) {
		const result: Record<string, any> = {};

		for (const [key, value] of Object.entries(body)) {
			const cleanValue = sanitizeObjectFn(value, options);

			if (cleanValue !== undefined) {
				result[key] = cleanValue;
			}
		}

		return result;
	}

	return body;
}
