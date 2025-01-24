var input = document.querySelector(".file__real");
var preview = document.querySelector(".preview");

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    var curFiles = input.files;
    if (curFiles.length === 0) {
        var para = document.createElement("p");
        para.textContent = "Не выбрано ни одного файла.";
        preview.appendChild(para);
    } else {
        var list = document.createElement("ul");
        preview.appendChild(list);
        for (var i = 0; i < curFiles.length; i++) {
        var listItem = document.createElement("li");
        var para = document.createElement("p");
        if (validFileType(curFiles[i])) {
            para.textContent =
            "Файла: " +
            curFiles[i].name +
            ", размер " +
            returnFileSize(curFiles[i].size) +
            ".";
            var image = document.createElement("img");
            image.src = window.URL.createObjectURL(curFiles[i]);
            listItem.appendChild(image);
            listItem.appendChild(para);
        } else {
            para.textContent =
            "Файла: " +
            curFiles[i].name +
            ": Недопустимый тип файла.";
            listItem.appendChild(para);
        }

        list.appendChild(listItem);
        }
    }
}


// var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
var fileTypes = [];

function validFileType(file) {
    if (fileTypes.length === 0) {
        return true; // Если пустой, проверка пройдена
    }
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }   
    return false;
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + "bytes";
    } else if (number > 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + "KB";
    } else if (number > 1048576) {
        return (number / 1048576).toFixed(1) + "MB";
    }
}