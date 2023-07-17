import React,{useState} from "react";


/**
 * Composant Collapse pour afficher le menu déroulant. 
 * 
 * @param {title, text } - Les props du composant 
 * @returns {JSX.Element} 
 */
function Collapse({title, text }){
  /**
   *  "isCollapsed" est une variable qui represente l'état actuelle du composant. 
   *  "setIsMoving" est une fonction qui met à jour son état avec un toogle.
   *  La valeur initial de "isCollapsed = true" le contenu du collapse est donc initialement masqué.
   */
  const [isCollapsed, setIsMoving] = useState(true);

  /**
   *  "isRotated est une variable qui represente l'état actuelle du composant" 
   *  "setIsMoving" est une fonction qui met à jour son état 
   *  La valeur initial de "isRotated = false" la rotation est à son point de départ.
   */
  const [isRotated, setIsRotating] = useState(false);


  /**
   * Toggles le menu  déroulant quand le bouton est cliqué.
   * 
   * "toggleCollapse" est défini en tant que fonction qui est appelée lorsqu'on clique sur le bouton
   *  Elle appelle la fonction setIsMoving en lui donnant la valeur opposée à son état actuel avec "!" devant "isCollapsed"
   *  et la fonction SetIsRotating en lui donnant sa valeur opposée, donc lorsque "true" la rotation se réalise car ajoute la classe "rotate".
   */

  const toggleCollapse = () => {
    setIsMoving(!isCollapsed);
    setIsRotating(!isRotated);
  };  


  return (
    <div className="collapse">
      <button className="collapse--title" onClick={toggleCollapse}>
        {title} 
        <div className={`collapse--title__icon ${isRotated ? 'rotate' : ''}`}></div>
      </button>
    <div className={`collapse--content ${isCollapsed ? "" : "open"}`}>{text}</div>
    </div>
  );
}


export default Collapse;
