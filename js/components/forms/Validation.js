class Validation {    
    static isValidName(name) {
        //ne tuscias tekstas
        if (!Validation.isNonEmptyText(name)) {
            return 'Name cannot be empty.';
        }

        //nei priekyje nei gale nera tarpu
        if (!Validation.noSpacesAroundText(name)) {
            return 'Cannot be space around name.';
        }

        //negali buti daugiau nei vienas zodis (nera tarpu)
        if (!Validation.isSingleWord(name)) {
            return 'Name cannot be no then one word.';

        }

        //pirma raide didzioji
        if (!Validation.isFirstLetterUppercase(name)){
            return 'Name first letter should be uppercase';
        }

        //visos likusios - tik mazosios
        if (!Validation.isLowercaseButFirst(name)) {
            return 'All letters in text should be lowercase, except first letter should be uppercase';
        }

        //sudaryta tik is raidziu (nekreipiant demesio i tikslias abeceles)
        if (!Validation.onlyAlphabetLetters(name)) {
            return ' Only alfabet letters should be in text.';
        }

        //tik abeceles raides (galimybe nurodyti kokios abeceles  yra priimtinos)
        return true;
    }
    static isValidEmail(email) { 
       //ne tuscias tekstas
       if (!Validation.isNonEmptyText(email)) {
        return 'Email cannot be empty';
    }
        //nei priekyje nei gale nera tarpu
        if (!Validation.noSpacesAroundText(email)) {
            return 'Email cannot have space around the text.';
        }
       //butinas tik vienas @ simbolis
        if (!Validation.textContainsLetter(email, '@')) {
            return 'Email can have only one @ symbol.';
        } 
        const emailParts = email.split('@');
       //pries @ (lokali dalis) turi buti ne tuscias tekstas
       // uztenka patikriniti jog pirmas simbolis nera @
       if (!Validation.isNonEmptyText(emailParts[0])) {
            return 'Email name cannot be empty.';
       }

       //uz @ (domeno dalis) turi buti ne tuscias tekstas
       //uztenka patikrinti jog paskutinis simbolis nera @
       if (!Validation.isNonEmptyText(emailParts[1])) {
        return 'Email address cannot be empty.';
    }
       return true;
}
    static isValidText(text) {
        //ne tuscias tekstas
        if (!Validation.isNonEmptyText(text)) {
            return 'Text cannot be empty';
        }
        //nei priekyje nei gale nera tarpu
        return true;
    }

    static isNonEmptyText(text) {
        if (typeof text !== 'string' ||
        text === '') {
            return false;
        }
        return true;
    }

    static isSingleWord(text) {        
        return !text.includes(' ');
    }

    static isFirstLetterUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }

    static noSpacesAroundText(text) {
        return text === text.trim();
    }
    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }
    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if (symbol === letter) {
                letterCount++;
            }
        }
         
        //aukstesnes funkcijos sutrumpinimas
        // letterCount = text.split('').filter(symbol => symbol === letter);
        return letterCount === count;
    }
    static onlyAlphabetLetters(text) {
        const uppercase = text.toUpperCase();
        const lowercase = text.toLowerCase();
        const size = text.length;

        for (let i=0; i<size; i++) {
            if (uppercase[i] === lowercase[i]) {
                return false;
            }
        }
    }
}
export { Validation }