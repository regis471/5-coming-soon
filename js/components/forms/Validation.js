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
       //pries @ (lokali dalis) turi buti ne tuscias tekstas
       //uz @ (domeno dalis) turi buti ne tuscias tekstas
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
}
export { Validation }