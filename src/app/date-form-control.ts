import { FormControl } from '@angular/forms'

// extend form control then redefine some of them
export class DateFormControl extends FormControl {
    // alt form control ad overside
    setValue(value: string | null , options: any) {
        // excepct value to be string or null 
        // update value to none
        // so when u reset update to empty string
        // return null and its okay
        if(!value) {
            super.setValue(this.value, {...options, emitModelToViewChange:true})
        return
        }
// if user doesnt put something from 0 to 9 or \ 
// then no change is allowed return current valuethis.value no ujpdated value
// so dont put anycharacters
        if(value.match(/[^0-9 |\/]/gi)) {
            super.setValue(this.value, {...options, emitModelToViewChange:true})
        return
        }
        // if avlue bigger than 5 just dont update return same value
        // 01/22 = 5
        if(value.length > 5) {
            super.setValue(this.value, {...options, emitModelToViewChange:true})
        return
        }
        // if new value is 2 and cur value is 2 aloow it 
        if(value.length === 2 && this.value.length === 3) {
            super.setValue(value, {...options, emitModelToViewChange:true})
        return
        }
        // when reach two amke it 
        if(value.length === 2) {
            super.setValue(value + '/', {...options, emitModelToViewChange:true})
        return
        }
// we dont do anything with value so it doesnt bubble
// then pass value through to form group 
// emitmodeltoviewchange updates dom on every press
// so if we add * in end for each press update dom

super.setValue(value , {...options, emitModelToViewChange:true})
    }
}
