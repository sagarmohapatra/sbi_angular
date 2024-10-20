import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isMobile: boolean = false;
  drawerMode: 'side' | 'over' = 'side';  // Make sure it's set to 'side' or 'over'
  drawerOpened: boolean = true;  
  constructor(private router: Router,private breakpointObserver: BreakpointObserver) {}
  out() {
    this.router.navigate(['/logout']);
  }
  isShowing: any = false;
  ngOnInit() {
  this.breakpointObserver.observe([Breakpoints.Handset])
  .subscribe(result => {
    this.isMobile = result.matches;
    if (this.isMobile) {
      this.drawerMode = 'over';
      this.drawerOpened = false; // Don't keep the drawer open by default on mobile
    } else {
      this.drawerMode = 'side';
      this.drawerOpened = true; // Keep the drawer open on larger screens
    }
  });
}

toggleDrawer(drawer: any) {
if (this.isMobile) {
  drawer.toggle();
}
}
  toggle() {
    this.isShowing = !this.isShowing;   
  }
  get toggleClose() {
    return {

    };
  }
}
