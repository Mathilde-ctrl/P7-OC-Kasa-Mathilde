import React,{useState} from "react";
/**
 * Composant Collapse pour afficher le menu déroulant. 
 * 
 * @param {title, text } - Les props du composant 
 * @returns {JSX.Element} 
 */
function Collapse({title, text }){
  /**
   * isCollapsed represente l'état actuelle du composant. 
   * setIsOpen est une fonction qui met à jour son état avec un toogle.
   */
  const [isCollapsed, setIsMoving] = useState(true);

  /**
   * Toggles le menu  déroulant quand le bouton est cliqué.
   * Permet de basculer l'état de fermer à ouvert en prenant lui donnant sa valeur opposée.
   */
  const toggleCollapse = () => {
    setIsMoving(!isCollapsed);
  };

  return (
    <div className="collapse">
      <button className="collapse--title" onClick={toggleCollapse}>
        {title} 
        <div className="collapse--title__icon"></div>
      </button>
      {!isCollapsed && <div className="collapse--content">{text}</div>}
    </div>
  );
}


export default Collapse;