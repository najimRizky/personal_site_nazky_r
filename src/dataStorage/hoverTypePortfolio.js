export const hoverY = {
    hidden:{
        y: -240, 
    },
    visible: { 
        y: 0, 
        transition: { 
            type: "linear",
            staggerChildren: 0.15,
            when: "beforeChildren",
        }
    }, 
    exit: { 
        y: -200, 
        transition: { 
            type: "linear" ,
            when: "afterChildren",
        }
    }  
}

export const hoverX = {
    hidden:{
        x: -400, 
    },
    visible: { 
        x: 0, 
        transition: { 
            type: "linear" ,
            staggerChildren: 0.15,
            when: "beforeChildren",
        }
    }, 
    exit: { 
        x: -400, 
        transition: { 
            type: "linear" ,
            when: "afterChildren",
        }
    }  
}

export const hoverOpac = {
    hidden:{
        opacity: 0
    },
    visible: { 
        opacity: 1,
        transition: { 
            type: "linear" ,
            staggerChildren: 0.15,
            when: "beforeChildren",
        }
    }, 
    exit: { 
        opacity: 0, 
        transition: { 
            type: "linear" ,
            when: "afterChildren",
        }
    }  
}

export const hoverScale = {
    hidden:{
        scale: 0
    },
    visible: { 
        scale: 1,
        transition: { 
            type: "linear",
            staggerChildren: 0.15,
            when: "beforeChildren",
        }
    }, 
    exit: { 
        opacity: 0, 
        transition: { 
            type: "linear" ,
            when: "afterChildren", 
        }
    }  
}