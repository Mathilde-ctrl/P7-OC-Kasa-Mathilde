

/**
 * Le composant Banner montre une image et un titre.
 * @component
 * @param {string} imageSource - Permet de choisir différentes source de l'image.
 * @returns {JSX.Element}
 */
function Banner({ imageSource, showTitle, isAProposPage }) {
  const bannerClassName = isAProposPage ? 'welcome welcome--apropos' : 'welcome';
  const imageClassName = isAProposPage ? 'welcome--image welcome--apropos' : 'welcome--image';
  const divClassName = isAProposPage ? 'welcome--banner welcome--apropos' : 'welcome--banner';

  return (
    <div className={bannerClassName}>
      <img src={imageSource} alt="Paysage décoratif pour page d'accueil Kasa" className={imageClassName} />
      <div className={divClassName} ></div>
      {showTitle && <p className="welcome--title">Chez vous, partout et ailleurs</p>}
    </div>
  );
}
 
export default Banner;
