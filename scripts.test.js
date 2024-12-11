describe('Username validation regex', () => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    test('should validate username with at least 1 capital letter, 1 special character, 1 number and is at least 8 characters long', () => {
        expect(regex.test('Password1!')).toBe(true);
        expect(regex.test('Passw0rd!')).toBe(true);
        expect(regex.test('P@ssw0rd')).toBe(true);
    });

    test('should invalidate username without a capital letter', () => {
        expect(regex.test('password1!')).toBe(false);
    });

    test('should invalidate username without a special character', () => {
        expect(regex.test('Password1')).toBe(false);
    });

    test('should invalidate username without a number', () => {
        expect(regex.test('Password!')).toBe(false);
    });

    test('should invalidate username with less than 8 characters', () => {
        expect(regex.test('Pass1!')).toBe(false);
    });
});