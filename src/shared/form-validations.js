export const validateEmail = value => {
    let error;

    if (!value) {
        error = 'Mandatory field'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }

    return error;
}

export const validatePassword = value => {
    let error;

    if (!value) {
        error = 'Mandatory field';
    } else if ( !/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i.test(value)) {
        error = "Invalid password";
    }

    return error;
}