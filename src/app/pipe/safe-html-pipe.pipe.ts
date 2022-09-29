import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'byPassSecurity'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}

  transform(value: any) {
    console.log("Going through le pipe: " + value);
    this.sanitized.bypassSecurityTrustStyle(value);
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
