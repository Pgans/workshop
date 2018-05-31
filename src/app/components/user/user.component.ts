import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  private name: string;
  private age: number;
  private email: string;

  //dictionary
  private address: {
    street: string;
    city: string;
    province: string;
    postcode: string;

  //array
    private skills:[];



  };

  constructor() {}

  ngOnInit() {
    this.name = "Chatree Boontha";
    this.age = 47;
    this.email = "mhosp.gan@gmail.com";

    this.address = {
      street: "114/13 chayang",
      city: "muangsamsib",
      province:"ubonratchatanee",
      postcode: "34140"
    };
    this.skills = ["Programing","Football", "Musicer"];


  }
}
