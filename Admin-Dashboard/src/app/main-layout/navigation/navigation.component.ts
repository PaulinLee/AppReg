import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;
  name: String;
  currentRoute: String;
  isLogin: boolean;

  constructor(private router: Router, private activatedRouter : ActivatedRoute) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  console.log("Routr" + this.router.url);
  console.log("activatedRouter" + this.activatedRouter.pathFromRoot);
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
