import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardBrandIdentifier',
  standalone: true
})
export class CreditCardBrandIdentifierPipe implements PipeTransform {

    transform(card_number: any): any {
        if (!card_number) return 'Unknown';
        const patterns: { [key: string]: RegExp } = {
            Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            MasterCard: /^5[1-5][0-9]{14}$/,
            Amex: /^3[47][0-9]{13}$/,
            Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
            DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        };
        for (const brand in patterns) {
            if (card_number.match(patterns[brand])) {
              return brand.toLowerCase();
            }
          }
        return 'Unknown';
    }

}
