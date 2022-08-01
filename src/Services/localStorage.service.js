function ParseJsonSafe(jsonStr) {
	if ('string' === typeof jsonStr) {
		return JSON.parse(jsonStr);
	}
	return jsonStr;
}

const getItem = (key) => {
	const itemStr = window.localStorage.getItem(key);
	return ParseJsonSafe(itemStr);
};

const setItem = (key, value) => {
	const valueStr = JSON.stringify(value);
	window.localStorage.setItem(key, valueStr);
};

const removeItem = (key) => {
	window.localStorage.removeItem(key);
};

export default {getItem, setItem, removeItem};