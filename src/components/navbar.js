export const Navbar = () => {
    return `<nav role="navigation">
     <ul class="links">
         <li class="Team">Team</li>
         <li><a aria-haspopup="true" href="">A Taste</a>
         <ul class="dropdown" aria-label="submenu">
             <li class="Chosoku">Chōshoku</li>
             <li class="Bento">Bento</li>
             <li class="Ramen">Ramen</li>
         </ul>
         </li>
         <li class="About">About Us</li>
     </ul>
     <h1 class="Logo">招き猫</h1>
     <ul class="social">
         <li><a href="#">Instagram</a></li>
         <li><a href="#">Facebook</a></li>
         <li><a href="#">Twitter</a></li>
     </ul>
 </nav>`
}