import { StyleSheet } from "react-native"

export const align = StyleSheet.create({
    relative: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    abosolute: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center', 
        justifyContent: 'center',        
    }    
})