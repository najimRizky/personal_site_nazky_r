export const hoverY = {
    hidden:{
        y: -240, 
    },
    visible: { 
        y: 0, 
        transition: { 
            type: "linear" 
        }
    }, 
    exit: { 
        y: -200, 
        transition: { 
            type: "linear" 
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
            type: "linear" 
        }
    }, 
    exit: { 
        x: -400, 
        transition: { 
            type: "linear" 
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
            type: "linear" 
        }
    }, 
    exit: { 
        opacity: 0, 
        transition: { 
            type: "linear" 
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
            type: "linear" 
        }
    }, 
    exit: { 
        opacity: 0, 
        transition: { 
            type: "linear" 
        }
    }  
}