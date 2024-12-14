import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

    destroyed = new Subject<void>();
    currentScreenSize!: string;
    public isDarkMode = false;

    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$ = this.loadingSubject.asObservable();

    loadingOn() {
      this.loadingSubject.next(true);
    }
  
    loadingOff() {
      this.loadingSubject.next(false);
    }


  private _theme = new BehaviorSubject<ThemePalette>('light' as ThemePalette); // Explicitly cast 'light' to ThemePalette
  theme$ = this._theme.asObservable();



  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver, @Inject(PLATFORM_ID) private platformId: Object) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });

      let theme = (this.isBrowser()) ? localStorage.getItem('theme') : 'light'
      console.log(theme, 'theme')
        if (theme === 'dark') {
            this.isDarkMode = true;
        } else {
          this.isDarkMode = false;
        }

  }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  initTheme() {
    if (this.isDarkMode) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  public setDarkTheme() {
    if(this.isBrowser()){
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', 'dark');
      }
    }
  }

  public setLightTheme() {
    if(this.isBrowser()){
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', 'light');
      }
    }

  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

    canShowSidebar(){

        let show = false;

        switch(this.currentScreenSize){
            case 'XSmall':
            case 'Small':
            case 'Medium':
                show = true;
            break;
            
        }

        return show;

    }

    layoutIsMobile(){
      
        let show = false;

        switch(this.currentScreenSize){
            case 'XSmall':
            case 'Small':
            //case 'Medium':
                show = true;
            break;
        }

        return show;
    }
}
