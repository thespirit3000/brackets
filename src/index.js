const convertedConfig = bracketsConfig => {
    let convertedArray = [];
    bracketsConfig.forEach(element => {
        convertedArray.push(element.join(""));
    });
    return convertedArray;
};

module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) {
        return false;
    }
    const config = convertedConfig(bracketsConfig);
    const length = config.length;
    for (let index = 0; index < length; ) {
        if (str.indexOf(config[index]) != -1) {
            str = str.replace(config[index], "");
            index = 0;
        } else {
            index += 1;
        }
    }
    return str.length == "";
};
