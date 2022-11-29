const { createApp } = Vue

createApp({
    data(){
        return{
            tasksInput : 0,
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
                }
            ]

        }
    },

   


}).mount('#app')