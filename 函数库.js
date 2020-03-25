// 包含es6的语法

// 查找规则:
// 1.深拷贝 --- deepClone

// 2.生成随机字符串 --- randomString

// 3添加千位分隔符/去除千位分隔符 --- addThousandth/removeThousandth


// 深拷贝
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

// 生成随机字符串
function randomString(len) {
    len = len || 16;
    let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

// 添加千位分隔符
function addThousandth(value) {
    let t= value >=1000 ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value;
    return t
}

// 去除千位分隔符
function removeThousandth(value) {
    return value.replace(/(,*)/g, '')
}


// 数组对象方法排序:
function sortByKey(array,key){
    return array.sort(function(a,b){
        let x=a[key];
        let y=b[key];
        return ((x<y)?-1:((x>y)?1:0));
    });
}

// 数组对象去重
function removeObjDuplication(arr, key) {
    let result = [];
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i][key]]) {
            result.push(arr[i]);
            obj[arr[i][key]] = true;
        }
    }
    return result
}