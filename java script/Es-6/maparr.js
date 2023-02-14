let marks = [34, 35, 36, 37, 38]
    let new_marks1 = marks.map((mark) =>{
        return mark + 2
    })
    let new_marks2 = marks.forEach((mark) =>{
        return mark + 4
    })
    console.log(marks);
    console.log(new_marks1);
    console.log(new_marks2);