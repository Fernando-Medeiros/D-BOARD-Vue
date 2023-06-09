export default class InputRegex {
    public static testEmail(email: string): TestResult {
        return {
            result: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email),
            msg: 'Deve ter n* caracteres seguido de @ e terminar com .com ou semelhante'
        }
    }

    public static testFirstName(firstName: string): TestResult {
        return {
            result: /^[a-zA-Z]{4,12}(\s[a-zA-Z]{3,12})?$/.test(firstName),
            msg: 'O nome deve ter 4 a 24 caractere'
        }
    }

    public static testLastName(lastName: string): TestResult {
        return {
            result: /^[a-zA-Z]{4,12}(\s[a-zA-Z]{3,12})?$/.test(lastName),
            msg: 'O sobrenome deve ter 4 a 24 caractere'
        }
    }

    public static testPassword(password: string): TestResult {
        return {
            result: /^[A-Za-z\d@$!%*#?&]{7,16}$/.test(password),
            msg: 'A senha deve ter 7 a 16 caractere'
        }
    }
}

type TestResult = { result: boolean; msg: string }
