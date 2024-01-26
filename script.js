body {
  background-color: #663333;
  font-family: 'PressStart2PRegular';
  font-weight: normal;
  font-style: normal;
}

#text {
  background-color: #0a0a23;
  color: #ffffff;
  padding: 15px;
  line-height: 1.2;
  font-size: 10px;
}

#game {
  max-width: 500px;
  max-height: 400px;
  background-color: #ffffff;
  color: #ffffff;
  margin: 30px auto 0px;
  padding: 10px;
}

#controls,
#stats {
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #0a0a23;
}

#controls {
  margin: auto;
}

#monsterStats {
  display: none;
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #ffffff;
  background-color: #c70d0d;
}

.stat {
  padding-right: 10px;
}

button {
  cursor: pointer;
  color: #0a0a23;
  background-color: #feac32;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
}


#knight {
  width: 192px;
  height: 192px;
  background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/afb473a63cca38d72163e098b28ed001f9feb363/knight1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 15em auto;
}

#other {
  display: none;
  width: 192px;
  height: 192px;
  background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/afb473a63cca38d72163e098b28ed001f9feb363/slime.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: -25em auto;
}

#background {
  width: 500px;
  height: 500px;
  background-size: cover;
  background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/main/townSquare.png');
  background-repeat: no-repeat;
  margin: 30px auto 0px;
  padding: 10px;
}

#knightDmg {
    margin-left: 2em;
}

#otherDmg {
    margin-left: 3em;
}

.dmg {
  color: #F50D37;
  text-shadow: 2px 2px #292525;
  font-size: 30px;
  font-family: fantasy;
  display:none;
}

.menu-item:hover:after {
  position: absolute;
  content: attr(title);
  display: inline-block;
  left: 20px;
  top: 20px;
  width: 11em;
  background-color:rgba(0, 0, 0, 0.5);
  font-size: 15px;
  line-height: 1.4;
  margin-left: -14em;
  margin-top: -1.5em;
  padding: 10px;
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    color:#FFF;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

#miss{
  position: absolute;
  top:50%;
  left:50%;
  transform:translate3d(-50%,-50%,0);

  font-family: 'Bitter', serif;
  animation: text-pop-up-top 2.5s 3 both  alternate;
  font-size:30px;
  color:#e0e0e0;
  backface-visibility:hidden;

  display: inline-block;
  &:nth-child(4n +1){

  }
  &:nth-child(4n +2){
    //animation-delay:0.15s;
  }
  &:nth-child(4n +3){
    //animation-delay:0.3s;
  }
  &:nth-child(4n +4){
    //animation-delay:0.45s;
  }
}



.menu-item,
.menu-open-button {
   background: #E04828;
   border-radius: 100%;
   width: 60px;
   height: 60px;
   margin-left: -40px;
   position: absolute;
   color: #FFFFFF;
   text-align: center;
   line-height: 80px;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu-open {
   display: none;
}

.lines {
   width: 25px;
   height: 3px;
   background: #FFFFFF;
   display: block;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -12.5px;
   margin-top: -1.5px;
   -webkit-transition: -webkit-transform 200ms;
   transition: -webkit-transform 200ms;
   transition: transform 200ms;
   transition: transform 200ms, -webkit-transform 200ms;
}

.line-1 {
   -webkit-transform: translate3d(0, -8px, 0);
   transform: translate3d(0, -8px, 0);
}

.line-2 {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}

.line-3 {
   -webkit-transform: translate3d(0, 8px, 0);
   transform: translate3d(0, 8px, 0);
}

.menu-open:checked + .menu-open-button .line-1 {
   -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
   transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open:checked + .menu-open-button .line-2 {
   -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
   transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open:checked + .menu-open-button .line-3 {
   -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
   transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu {
   margin: auto;
   position: absolute;
   top: .5em;
   bottom: 0;
   left: 16em;
   right: 0;
   width: 50px;
   height: 50px;
   text-align: center;
   box-sizing: border-box;
   font-size: 26px;
}


/* .menu-item {
   transition: all 0.1s ease 0s;
} */

.menu-item:hover {
  cursor: default;
}


.menu-open-button {
   z-index: 2;
    -webkit-transition-duration: 400ms;
   transition-duration: 400ms;
   -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   cursor: pointer;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.menu-open-button:hover {
   -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
   transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}


.menu-open:checked ~ .menu-item {
   -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
   transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

/* blue */
.menu-open:checked ~ .menu-item:nth-child(3) {
    visibility: hidden;
   transition-duration: 180ms;
   -webkit-transition-duration: 180ms;
   -webkit-transform: translate3d(0.08361px, -90.99997px, 0);
   transform: translate3d(0.08361px, -90.99997px, 0);
}



/* purple */
.menu-open:checked ~ .menu-item:nth-child(6) {
   transition-duration: 480ms;
   -webkit-transition-duration: 480ms;
   -webkit-transform: translate3d(0.0836px, 90.99997px, 0);
   transform: translate3d(0.08361px, 90.99997px, 0);
}

/* orange */
.menu-open:checked ~ .menu-item:nth-child(7) {
  visibility: hidden;
   transition-duration: 580ms;
   -webkit-transition-duration: 580ms;
   -webkit-transform: translate3d(-90.86291px, 62.62064px, 0);
   transform: translate3d(-90.86291px, 62.62064px, 0);
}

/* LIGHT BLUE */
.menu-open:checked ~ .menu-item:nth-child(8) {
  visibility: hidden;
   transition-duration: 680ms;
   -webkit-transition-duration: 680ms;
   -webkit-transform: translate3d(-91.03006px, -42.33095px, 0);
   transform: translate3d(-91.03006px, -42.33095px, 0);
}


.blue {
  visibility: hidden;
   background-color: #669AE1;
   background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/main/sword.png');
   background-size: 40px;
   background-position: center;
   background-repeat: no-repeat;
   box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.blue:hover {
   color: #669AE1;
   text-shadow: none;
}

.purple {
   background-color: #C49CDE;
   background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/main/stick.png');
   background-size: 40px;
   background-position: center;
   background-repeat: no-repeat;
   box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.purple:hover {
   color: #C49CDE;
   text-shadow: none;
}

.orange {
  visibility: hidden;
   background-color: #FC913A;
   background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/main/dagger.png');
   background-size: 40px;
   background-position: center;
   background-repeat: no-repeat;
   box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.orange:hover {
   color: #FC913A;
   text-shadow: none;
}

.lightblue {
  visibility: hidden;
   background-color: #62C2E4;
   background-image: url('https://raw.githubusercontent.com/Edgrrrcia/jsRPG.github.io/main/claw-hammer.png');
   background-size: 40px;
   background-position: center;
   background-repeat: no-repeat;
   box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.lightblue:hover {
   color: #62C2E4;
   text-shadow: none;
}
