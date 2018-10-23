import { Component, Input } from "@angular/core";

@Component({
  selector: "ap-photo",
  templateUrl: "photo.component.html",
  styleUrls: ["photo.component.sass"]
})
export class PhotoComponent {
  @Input()
  description = "";

  @Input()
  url = "";
}
