let names = ['Гена', 'Чебурашка', 'Шапокляк', 'Галя'];


let userName = prompt("Имя для удаления:");


if (userName) {
   
    let index = names.indexOf(userName);

    if (index !== -1) {
       
        names.splice(index, 1);
        alert(`${userName} Имя удалено из списка`);
    } else {
        alert(`${userName} Ошибка`);
    }
} else {
    alert("Повторите еще раз");
}



console.log('Обновленный список:', names);


