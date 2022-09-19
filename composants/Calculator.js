import React, { useState } from 'react'
import AmazingNumberButton from './AmazingNumberButton.js';
import GreatOperationButton from './GreatOperationButton.js';
import MagnificientEqualButton from './MagnificientEqualButton.js';
import BeautifulScreen from './BeautifulScreen.js';
import Reset from './Reset.js';
import ItSOverNineThousand from './ItSOverNineThousand';


export default function Calculator() {

/* setValue permet de mettre à jour la valeur de value*/
//useState tableau qui permet au getteur de retourner les éléments où on clique, suivi du setteur et après le égal la valeur par défaut/

    const [value, setValue] = useState("") 
    const [messageOver, setmessageOver] = useState(); 
    const Calculette = function(e) {
        setValue(value + e.target.name)
        console.log(value);
    }
//la fonction eval sur Js permet de faire les calculs de la Calculator 9000 automatiquement
// la condition permet d'établir que si on fait un calcul qui n'a aucun sens un message d'erreur s'affiche
// si le calcul dépasse 9000 un message d'erreur apparaît

    const Result = function(){  
        try {
            setValue(eval(value))

            if(value > 8999){
                setmessageOver('It\'s over 9000 !!!');
                // console.log(messageOver);
        }        
        } catch (error) {
            if (error instanceof SyntaxError) {
                alert('erreur dans le calcul')
                console.log(error);
                setValue('');
                setmessageOver('');
            }
        }
        const Resetvalue = function(){
            setValue('');
            setmessageOver('');
        }
    }

// j'appelle mes composants, puis je déclare mes props qui ont comme paramètres une fonction ou une value
  return (
    <div>Calculator 9000
        <BeautifulScreen value={value}/>
        <AmazingNumberButton calculette={Calculette} />
        <GreatOperationButton calculette={Calculette}/>
        <MagnificientEqualButton resultat={Result} />
        <Reset resetClick={Resetvalue} />
        <ItSOverNineThousand message={messageOver} />
    </div>

  )
}
