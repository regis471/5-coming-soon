class Forms {
    constructor(){
        this.forms = [];

        this.init();
    }

    init() {
        this.findAllForms();
        this.addEvents();

        
    }

    findAllForms(){
        const forms = document.querySelectorAll('.form');
        this.forms = [...forms];
    }
    
    addEvents() {
        for (const form of this.forms){
            // const inputs = form.querySelectorAll('input');
            // const textareas = form.querySelectorAll('textarea');

            // const allInputs = [...inputs, ...textareas];
            
            const allInputs = form.querySelectorAll('input, textareas'); // suptrumpinimas aukstesnes komandos

            const submit = form.querySelector('.btn');
            
            submit.addEventListener('click', (event) => {
                event.preventDefault();
                
                for (const input of allInputs) {
                    console.log(input.value);
                }
            })
        }
        
        // for (let i=0; i<this.forms.length; i++){ kaip atrodytu pagal sena cikla
        //     const form = this.form[i];
        //     console.log(form);
        // }
}
}
export { Forms }