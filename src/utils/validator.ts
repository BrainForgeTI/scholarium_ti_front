export class Validator {

    public emptyString(string: string) {
        if (typeof string != 'string') return true;

        if (string.length > 0) return false;

        return true
    }
}