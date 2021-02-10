import { allowedSocialIcons } from "../data/allowedSocialIcons.js";


function renderSocials(selector, data) {
    // input validation
    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('ERROR: netinkamas selectoriaus parametras.');
        return false;
    }
    if (!Array.isArray(data) ||
        data.length === 0) {
        console.error('ERROR: netinkamas data parametras.');
        return false;
    }
        
        //logic
        const DOM = document.querySelector(selector);
        if (!DOM) {
            return 'ERROR: nepavyko rasti elemento pagal pateikta selectoriu'

        }
        
        let HTML = '';

        for (let i=0; i<data.length; i++){
        const socialObject = data[i];   
        
        //duomenu objekto validacija
        if (typeof socialObject !== 'object'||
            Array.isArray(socialObject)||
            !socialObject.href||
            typeof socialObject.href !== 'string' ||
            !socialObject.icon ||
            typeof socialObject.icon !== 'string' ||
            !allowedSocialIcons.includes(socialObject.icon)) {
            console.warn('WARNING: netinkamo formato objektas', socialObject);
            continue;
        }

        HTML += `<a href="${socialObject.href}" 
        target="_blank" 
        class="fa fa-${socialObject.icon}" 
        rel=noreferrer noopener>${socialObject.icon}</a>`;
    }
        //post logic validation
        if (!HTML === ''){
            console.error('ERROR: tarop pateiktu duomenu nera tinkamos informacijos.');
            return false;
        }
        DOM.innerHTML = HTML;
        
        //return result
}

export { renderSocials }


