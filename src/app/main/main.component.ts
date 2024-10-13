import { Component, output } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { InputComponent } from "../input/input.component";
import { OutputComponent } from "../output/output.component";
import { ConversionService } from "../services/conversion.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, InputComponent, OutputComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  conversion: { prev: string; new: string } | null = null;

  constructor(private conversionService:ConversionService) {}

  inputCode!:string;

  outputCode!:string;

  conversionSelected(conversion:{prev:string,new:string}){
    this.conversion = conversion;
  }

  getInputCode(code:string){
    this.inputCode = code;
    if (this.conversion) {
      this.conversionService
        .convertCode(
          this.conversion.prev,
          this.conversion.new,
          this.inputCode
        )
        .subscribe(
          (result) => {
            this.outputCode=result;
          },
          (error) => {
            console.error('Conversion failed', error);
            // Handle error (e.g., show a message to the user)
          }
        );
    } else {
      console.warn('No conversion option selected');
    }
    
  }

}
