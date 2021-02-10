class Validation {    
    static isValidName(name) {
        //ne tuscias tekstas
        if (!Validation.isNonEmptyText(name)) {
            return 'Vardas turi buti ne tuscias';
        }

        //nei priekyje nei gale nera tarpu
        if (!Validation.noSpacesAroundText(name)) {
            return 'Vardo priekyje ir gale neturi buti tarpo.';
        }

        //negali buti daugiau nei vienas zodis (nera tarpu)
        if (!Validation.isSingleWord(name)) {
            return 'Vardas turi buti vienas zodis';

        }

        //pirma raide didzioji
        if (!Validation.isFirstLetterUppercase(name)){
            return 'Vardo pirmoji raide turi buti dizioji.';
        }

        //visos likusios - tik mazosios
        if (Validation.isLowercaseButFirst(name)) {
            return 'Vardo visos likusios raides, isskyrus pirma, turi buti mazosios.';
        }

        //sudaryta tik is raidziu (nekreipiant demesio i tikslias abeceles)
        if (!Validation.onlyAlphabetLetters(name)) {
            return ' Varde gali buti tik abeceles raides';
        }

        //tik abeceles raides (galimybe nurodyti kokios abeceles  yra priimtinos)
        return true;
    }
    static isValidEmail(email) { 
       //ne tuscias tekstas
       if (!Validation.isNonEmptyText(email)) {
        return 'Email turi buti ne tuscias';
    }
        //nei priekyje nei gale nera tarpu
        if (!Validation.noSpacesAroundText(email)) {
            return 'Email priekyje ir gale neturi buti tarpo.';
        }
       //butinas tik vienas @ simbolis
        if (!Validation.textContainsLetter(email, '@')) {
            return 'El. pastas turi tureti viena @ simboli';
        } 
        const emailParts = email.split('@');
       //pries @ (lokali dalis) turi buti ne tuscias tekstas
       // uztenka patikriniti jog pirmas simbolis nera @
       if (!Validation.isNonEmptyText(emailParts[0])) {
            return 'El. pasto lokali dalis turi buti ne tuscias';
       }

       //uz @ (domeno dalis) turi buti ne tuscias tekstas
       //uztenka patikrinti jog paskutinis simbolis nera @
       if (!Validation.isNonEmptyText(emailParts[1])) {
        return 'El. pasto domeno dalis turi buti ne tuscias';
    }
       return true;
}
    static isValidText(text) {
        //ne tuscias tekstas
        if (!Validation.isNonEmptyText(text)) {
            return 'Tekstas turi buti ne tuscias';
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
        return rest = rest.toLowercase();
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
        const lowercase = text.toLowercase();
        const size = text.length;

        for (let i=0; i<size; i++) {
            if (uppercase[i] === lowercase[i]) {
                return false;
            }
        }
    }
}
export { Validation }