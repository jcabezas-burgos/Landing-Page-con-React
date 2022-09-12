
import './styles/App.css';
import Navbar from './componets/Navbar';  
import Header from "./componets/jumbotron"
import Card from './componets/card1';
import Footer from './componets/Footer';
function App() {
  return (
    <div>
        <Navbar/> 
      <div>
        <Header/>
        </div>
      <div className = "container row">
      <Card cardImg = "https://soyunperro.com/wp-content/uploads/2019/11/perro-blanco-con-el-pelo-limpio.jpg" cardtitle = "Khaleesi" cardText = "El perro mas parecido al mio que encontre."/> 
      <Card cardImg = "https://gcdn.emol.cl/fotografia/files/2014/08/fotos-perros-culpables-17.jpg" cardtitle = "Pepper" cardText = "En la foto tampoco aparece mi perro (si tengo 2) pero es igual de destrozon que este."/>  
      <Card cardImg = "https://i.pinimg.com/550x/fe/69/b7/fe69b7d60045739b2d6e99d91385c538.jpg" cardtitle = "Tambien tengo un hijo" cardText = "Este no es una foto de el pero su pelo se parce mucho."/> 
      </div>
      
      <Footer/>
      </div>);
}



export default App;
