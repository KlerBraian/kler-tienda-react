import React from 'react'

//Este componente renderiza las redes en el footer de la pagina

export const Footer = () => {
  return (
    <div className='footer'>
         <p className="footer-p">@Klercat</p>
                <ul className="footer-ul">
                    <li className="footer-networks"><a href="https://www.instagram.com/mantis.banda/" ><i className="bi bi-instagram"></i></a></li>
                    <li className="footer-networks"><a href="https://www.youtube.com/@mantisbanda1308"><i className="bi bi-youtube"></i></a></li>
                    <li className="footer-networks"><a href="https://www.facebook.com/profile.php?id=100087381406841"><i className="bi bi-facebook"></i></a></li>
                    <li className="footer-networks"><a href="https://www.tiktok.com/@mantis.banda"><i className="bi bi-tiktok"></i></a></li>
                </ul>
    </div>
  )
}
