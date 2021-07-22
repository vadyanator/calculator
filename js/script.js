function insert(elem) {
    document.form.textview.value = 
    document.form.textview.value + elem;
}

function clean() {
    document.form.textview.value = "";
}

function deleteOneDig() {
    let str = document.form.textview.value;
    document.form.textview.value = str.substring(0, str.length - 1);
}

function result() {
    let str = document.form.textview.value
    document.form.textview.value = eval(str);
}