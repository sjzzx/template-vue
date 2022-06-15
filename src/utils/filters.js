// 该js用于脱敏(浙里办)

// 姓名脱敏(第一位隐藏)
function nameSensitive(value, display) {
	/**
	 *  value:要脱敏的值
	 *  display(Boolean):是否脱敏 默认脱敏
	 */
	// 非空校验
	if (!value){
		return '';
	}
	// 转字符串
	value = value.toString();
	if (!display) {
		if (value.length === 2) {
			// value = value.substr(0, 1) + '*';
			value = '*' + value.substr(1, 1) ;
		} else if (value.length > 2) {
			var char = '';
			for (var i = 0, len = value.length - 2; i < len; i++) {
				char += '*';
			}
			// value = value.substr(0, 1) + char + value.substr(-1, 1);
			value = char + value.substr(-2, 1) + value.substr(-1, 1);
		} else {
			return value;
		}
		console.log('姓名进行了脱敏');
		return value;
	} else {
		console.log('姓名未进行脱敏');
		return value;
	}
}
// 电话脱敏(前三后四)
function phoneSensitive(value, display) {
	/**
	 *  value:要脱敏的值
	 *  display(Boolean):是否脱敏 默认脱敏
	 */

	// 非空校验
	if (!value) {
		return '';
	}

	// 转字符串
	value = value.toString();

	if (!display && value.length == 11) {
		console.log('电话进行了脱敏');
		value = value.substring(0, 3) + '****' + value.substring(7);
		return value;
	} else {
		console.log('不脱敏');
		return value;
	}
}

// 银行卡号脱敏(前三后四)
function bankcardSensitive(value, display) {
	/**
	 *  value:要脱敏的值
	 *  display(Boolean):是否脱敏 默认脱敏
	 */

	// 非空校验
	if (!value) {
		return '';
	}

	// 转字符串
	value = value.toString();

	if (!display) {
		console.log('脱敏');
		value = value.substr(0, 6) + ' **** **** ' + value.substr(value.length - 4);
		return value;
	} else {
		console.log('不脱敏');
		return value;
	}
}

// 身份证号脱敏(前三后四)
function idNumberSensitive(value, display) {
	/**
	 *  value:要脱敏的值
	 *  display(Boolean):是否脱敏 默认脱敏
	 */

	// 非空校验
	if (!value) {
		return '';
	}

	// 转字符串
	value = value.toString();

	if (!display && (value.length == 18 || value.length == 15)) {
		console.log('身份证号进行了脱敏');
		// value = value.substr(0, 6) + '********' + value.substr(value.length - 4);
		value = value.substr(0, 1) + '****************' + value.substr(value.length - 1);
		return value;
	} else {
		console.log('不脱敏');
		return value;
	}
}

// 删除时分秒 仅展示年月日
function timeSensitive(value, display) {
	/**
	 *  value:要截取的值
	 *  display(Boolean):是否截取 默认截取
	 */

	// 非空校验
	if (!value) {
		return '';
	}
	return value.substr(0,10)
}

export {
	nameSensitive,
	phoneSensitive,
	bankcardSensitive,
	idNumberSensitive,
	timeSensitive
};
