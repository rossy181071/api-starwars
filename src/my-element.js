import { LitElement, css, html } from 'lit'
import { Child2Element } from './child-2-element'
import { CharacterGetterElement2 } from './character-getter-element-2'
/**
 * An example element.
 *
 * @slot - This element has a slot    
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
    /**
   * The number of times the button has been clicked.
   */
   count: { type: Number },
   /**
   * The current characters page number
     */ 
  page: { type: Number } ,
  /**
   * The list of characters as an array
   */
  characters: { type: Array} ,
  
  }

}

  constructor() {
    super()
    this.count = 0
    this.page = 1
    this.characters = []
  }

  myEvent2Handler() {
   this.count ++ 
  }

  update(changedProperties) {
    if (changedProperties.has("page"))
      this.shadowRoot.querySelector("character-getter-element-2").getCharactersPage (this.page)

  }

  newCharactersPageEventHandler (e) {
    this.characters = e.detail.data
  }

  firstPage () {
    this.page = 1
  }
  
  previousPage () {
    if (this.page > 1)
    this.page-- 
  else
  this.page = 97
  }

  nextPage () {
    if (this.page < 97)
      this.page++
    else
    this.page = 1
  }
  lastPage() {
    this.page = 97
  }
     
  

  render() {
    return html`      
      <div class="card">
        <h1>
          count is ${this.count}
      </h1>
      <h1>
        Pagina ${this.page}
      </h1>
      <button @click="${this.firstPage}">Inicio</button> 
      <button @click="${this.previousPage}">Anterior</button> 
      <button @click="${this.nextPage}">Siguiente</button> 
      <button @click="${this.lastPage}">Final</button> 
      <child-2-element @my-event-2="${this.myEvent2Handler}"></child-2-element> 
      <character-getter-element-2 @new-character-event="${this.
        newCharactersPageEventHandler}"></character-getter-element-2>  
      <h1 id="character-name"></h1>
      <img id= "character-img">
      <div id="characters-list">
        ${this.characters.length < 1 ? '' : this.characters.map(char => html`<div 
          class="character" id="${char._id}">
      <h1>${char.name}</h1>
      <p>${char.descrption}</p>
      <img src="${char.image}">
        </div>`) }
      </div>
      </div>
    `
  }

  
  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
      img {
        width: 50vw;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
