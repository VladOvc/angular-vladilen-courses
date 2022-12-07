import {Component} from '@angular/core'

@Component({
    selector: 'app-eventBinding',
    templateUrl: './eventBinding.component.html'
})

export class EventBindingComponent{
    firstNameEmployee = '';
    lastNameEmployee = '';
  
    firstNameEmployeeUpdate(event: KeyboardEvent) {
      this.firstNameEmployee = this.onInput(event, 'FirstName')
    }
  
    lastNameEmployeeUpdate(event: KeyboardEvent) {
      this.lastNameEmployee = this.onInput(event, 'LastName')
    }
  
    onInput(event: KeyboardEvent, value?: string) {
      console.log('Event: ' + value)
      return (<HTMLInputElement>event.target).value
    }
  
    onClick() {
      console.log('click')
    }
}