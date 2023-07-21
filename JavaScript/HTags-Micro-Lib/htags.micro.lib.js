/** 
 * ———————————————————————————
 * "HTags Micro Library"
 * @author Walter Zitano
 * ———————————————————————————
 */

class HTag
{
    /** 
     * Imposta attributi e relativi valori al nodo del DOM specificato.
     * La funzione non verifica se attributi e valori siano validi a livello HTML.
     * @param {HTMLElement} tagName - Elemento HTML del DOM cui applicare le proprietà.
     * @param {strings[]} attributesNames - Un array di stringhe contenente i nomi degli attributi da assegnare all'elemento.
     * @param {strings[]} attributesValues - Un array di stringhe contenente i valori degli attributi da assegnare all'elemento.
     */
    static setAttributesList(tagName, attributesNames, attributesValues)
    {
        let arg1 = Array.isArray(attributesNames);
        let arg2 = Array.isArray(attributesValues);

        try
        {
            // Verifica che nomi e valori degli attributi siano array.
            if (!arg1) throw "Attributes list isn't an array.";
            if (!arg2) throw "Values list isn't an array.";

            // Verifica che i due array abbiano la stessa dimensione.
            if (attributesNames.length != attributesValues.length) throw "Attributes and values lists haven't the same length.";

            // Verifica che nomi e valori degli attributi siano array di stringhe.
            for (let item in attributesNames)
            {
                if (typeof item !== "string" ) throw "Attributes list isn't a strings array.";

                item.trim();

                if (item == "") throw "An attribute item is empty.";
            }

            for (let item in attributesValues)
            {
                if (typeof item !== "string") throw "Values list isn't a strings array.";

                item.trim();

                if (item == "") throw "A value item is empty.";
            }

            // Assegna attributi e valori all'elemento del DOM specificato.   
            for (let i in attributesNames) { tagName.setAttribute(attributesNames[i], attributesValues[i]); }
        }
        catch(error)
        {
            console.log(error);
        }
    }

    /**
     * Crea un nuovo elemento del DOM.
     * @param {string} [element] - Elemento HTML da creare nel DOM; default: div.
     */
    static newHTag(element = "div")
    {
        try
        {
            // Verifica che il parametro sia una stringa valida.
            if (typeof element !== "string" ) throw "Argument isn't a string.";

            if (element == "") throw "Argument is empty string.";

            // Restituisce un elemento del DOM.
            return document.createElement(element);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}