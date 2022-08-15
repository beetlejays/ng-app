import { Component } from "@angular/core";

@Component({
    selector: "app-user-input",
    templateUrl: "./user.component.html"
})

export class UserInput {
    userNameInput: string = "hello"

    resetUser() {
        console.log("resetted")
    }
}