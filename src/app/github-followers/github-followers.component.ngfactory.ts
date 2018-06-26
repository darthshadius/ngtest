/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './github-followers.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './github-followers.component';
import * as i5 from './github-followers.service';
const styles_GithubFollowersComponent:any[] = [i0.styles];
export const RenderType_GithubFollowersComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_GithubFollowersComponent,data:{}});
function View_GithubFollowersComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),15,'div',[['class',
      'media']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),12,'div',[['class','media-body']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),6,'h4',[['class',
          'media-heading']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),
          i1.ɵeld(6,0,(null as any),(null as any),3,'a',([] as any[]),[[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,7).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(7,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(8,3),(_l()(),i1.ɵted(9,(null as any),['',''])),(_l()(),
          i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵeld(12,0,(null as any),(null as any),1,'a',([] as any[]),[[8,'href',
          4]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(13,
          (null as any),['',''])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),
          i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,8,0,'/followers',_v.context.$implicit.id,_v.context.$implicit.login);
    _ck(_v,7,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,7).target;
    const currVal_1:any = i1.ɵnov(_v,7).href;
    _ck(_v,6,0,currVal_0,currVal_1);
    const currVal_3:any = _v.context.$implicit.login;
    _ck(_v,9,0,currVal_3);
    const currVal_4:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit.html_url,
        '');
    _ck(_v,12,0,currVal_4);
    const currVal_5:any = _v.context.$implicit.html_url;
    _ck(_v,13,0,currVal_5);
  });
}
export function View_GithubFollowersComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_GithubFollowersComponent_1)),i1.ɵdid(1,802816,(null as any),0,i3.NgForOf,
      [i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,'ngForOf']},
      (null as any))],(_ck,_v) => {
    var _co:i4.GithubFollowersComponent = _v.component;
    const currVal_0:any = _co.followers;
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_GithubFollowersComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'github-followers',
      ([] as any[]),(null as any),(null as any),(null as any),View_GithubFollowersComponent_0,
      RenderType_GithubFollowersComponent)),i1.ɵdid(1,114688,(null as any),0,i4.GithubFollowersComponent,
      [i2.ActivatedRoute,i5.GithubFollowersService],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const GithubFollowersComponentNgFactory:i1.ComponentFactory<i4.GithubFollowersComponent> = i1.ɵccf('github-followers',
    i4.GithubFollowersComponent,View_GithubFollowersComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3Zhei9Eb2N1bWVudHMvYWxsd29ya3NwYWNlL2RlcGxveS1kZW1vL3NyYy9hcHAvZ2l0aHViLWZvbGxvd2Vycy9naXRodWItZm9sbG93ZXJzLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9jdmF6L0RvY3VtZW50cy9hbGx3b3Jrc3BhY2UvZGVwbG95LWRlbW8vc3JjL2FwcC9naXRodWItZm9sbG93ZXJzL2dpdGh1Yi1mb2xsb3dlcnMuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvY3Zhei9Eb2N1bWVudHMvYWxsd29ya3NwYWNlL2RlcGxveS1kZW1vL3NyYy9hcHAvZ2l0aHViLWZvbGxvd2Vycy9naXRodWItZm9sbG93ZXJzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3Zhei9Eb2N1bWVudHMvYWxsd29ya3NwYWNlL2RlcGxveS1kZW1vL3NyYy9hcHAvZ2l0aHViLWZvbGxvd2Vycy9naXRodWItZm9sbG93ZXJzLmNvbXBvbmVudC50cy5HaXRodWJGb2xsb3dlcnNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2ICpuZ0Zvcj1cImxldCBmb2xsb3dlciBvZiBmb2xsb3dlcnNcIiBjbGFzcz1cIm1lZGlhXCI+XG4gIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgPGg0IGNsYXNzPVwibWVkaWEtaGVhZGluZ1wiPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZm9sbG93ZXJzJywgZm9sbG93ZXIuaWQsIGZvbGxvd2VyLmxvZ2luXVwiPnt7IGZvbGxvd2VyLmxvZ2luIH19PC9hPlxuICAgIDwvaDQ+XG4gICAgPGEgaHJlZj1cInt7IGZvbGxvd2VyLmh0bWxfdXJsIH19XCI+e3sgZm9sbG93ZXIuaHRtbF91cmwgfX08L2E+XG4gIDwvZGl2PlxuPC9kaXY+IiwiPGdpdGh1Yi1mb2xsb3dlcnM+PC9naXRodWItZm9sbG93ZXJzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQXNELDRDQUNwRDtVQUFBO1VBQUEsNENBQXdCO1VBQUEsYUFDdEI7VUFBQTtVQUFBLGdCQUEwQixnREFDeEI7aUJBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBRyxNQUEyRCwwQ0FBd0I7aUJBQUEsK0JBQ25GO01BQ0w7VUFBQSw4REFBa0M7VUFBQSx3QkFBMkIsNENBQ3pEO2lCQUFBO0lBSEM7SUFBSCxXQUFHLFNBQUg7O0lBQUE7SUFBQTtJQUFBLFdBQUEsbUJBQUE7SUFBOEQ7SUFBQTtJQUU3RDtRQUFBO0lBQUgsWUFBRyxTQUFIO0lBQWtDO0lBQUE7Ozs7b0JBTHRDO01BQUEseUNBQUE7TUFBQTtNQUFBOztJQUFLO0lBQUwsV0FBSyxTQUFMOzs7O29CQ0FBO01BQUE7eUNBQUEsVUFBQTtNQUFBOztRQUFBOzs7OyJ9
