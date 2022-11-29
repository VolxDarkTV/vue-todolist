const { createApp } = Vue

createApp({
    data(){
        return{
            tasksInput : 0,
            logo: 'img/IKEA-logo.png',
            newTask:'',
            // All Data
            tasks : 
            [
                { 
                    text: 'Fare i compiti', 
                    done: false 
                }, 
                { 
                    text: 'Fare la spesaaaaaaaaaaaaaaaa jdhsbvjsdvdjvcbjdsbcjdj', 
                    done: true
                }, 
                {
                    text: 'Fare il bucato', 
                    done: false 
                },
                {
                    text: 'ciao'
                }
            ]

        }
    },
    methods:{
        // metodi
        addTask(){
            // Prima di tutto mi creo l'object e inserisco al suo interno il tag text perché poi verrà utilizzato per cercare la srtinga di testo. Successivamente inserisco this.newTask che è collegato all'input
            const obj = {text: `${this.newTask}`};
            this.tasks.push(obj);
        }
    }

   


}).mount('#app')