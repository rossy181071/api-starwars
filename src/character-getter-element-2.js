import { LitElement, css, html } from 'lit'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CharacterGetterElement2 extends LitElement {
   constructor() {
    super()
   }

   getCharactersPage(page) {
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}`)
      
    .then(response => response.json())
    .then(jsonData => this.dispatchEvent(new CustomEvent('new character-event', { 
     detail: jsonData}))) 
      
      }
    }
  
window.customElements.define('character-getter-element-2', CharacterGetterElement2)
