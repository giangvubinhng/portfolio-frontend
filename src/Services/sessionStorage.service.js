const SESSION_ITEM_KEY_BIO = "bio";

function ParseJsonSafe(jsonStr) {
  if ("string" === typeof jsonStr) {
    return JSON.parse(jsonStr);
  }
  return jsonStr;
}

function getItem(key) {
    const itemStr = window.sessionStorage.getItem(key);
    return ParseJsonSafe(itemStr);
}

function setItem(key, value) {
    const valueStr = JSON.stringify(value);
    window.sessionStorage.setItem(key, valueStr);
}

function removeItem(key) {
    window.sessionStorage.removeItem(key);
}

function getBio(){
    return getItem(SESSION_ITEM_KEY_BIO);
}

function setBio(bio){
    setBio(SESSION_ITEM_KEY_BIO, bio)
}


export default {getItem, setItem, removeItem, getBio, setBio}