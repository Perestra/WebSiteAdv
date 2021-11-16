const phoneMask = field => {
    const {value} = field

    const nextValue = phoneTransform(value);
    if (nextValue != value) field.value = nextValue;
}

const phoneTransform = value => {

    let nextValue = value.replace(/\D/g, "");
    nextValue = nextValue.replace(/^0/, "");

    if (nextValue.length > 11) {
        nextValue = nextValue.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (nextValue.length > 7) {
        nextValue = nextValue.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (nextValue.length > 2) {
        nextValue = nextValue.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (value.trim() !== "") {
        nextValue = nextValue.replace(/^(\d*)/, "($1");
    }
    return nextValue;
}